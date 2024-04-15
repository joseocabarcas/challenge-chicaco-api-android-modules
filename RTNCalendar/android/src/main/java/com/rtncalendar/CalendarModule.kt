package com.rtncalendar

import android.Manifest
import android.annotation.SuppressLint
import android.content.ContentValues
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.CalendarContract
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.PermissionListener
import java.text.SimpleDateFormat
import java.time.Instant
import java.time.format.DateTimeFormatter
import java.util.Calendar
import java.util.Date
import java.util.TimeZone

class CalendarModule(val reactContext: ReactApplicationContext) : NativeCalendarSpec(reactContext), PermissionListener {

  override fun getName() = NAME

  var promiseHandle: Promise? = null

  @RequiresApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
  override fun addEvent(title: String, description: String, dateStart: String, dateEnd: String, timeStart: String, timeEnd: String, location: String, promise: Promise) {
    try {
      promiseHandle = promise
      val intent = Intent(Intent.ACTION_INSERT)
        .setData(CalendarContract.Events.CONTENT_URI)
        .putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, parseToMillis(dateStart, timeStart))
        .putExtra(CalendarContract.EXTRA_EVENT_END_TIME, parseToMillis(dateEnd, timeEnd))
        .putExtra(CalendarContract.Events.TITLE, title)
        .putExtra(CalendarContract.Events.DESCRIPTION, description)
        .putExtra(CalendarContract.Events.EVENT_LOCATION, location)
        .putExtra(CalendarContract.Events.AVAILABILITY, CalendarContract.Events.AVAILABILITY_BUSY)
      // reactContext.startActivity(intent)
      reactContext.startActivityForResult(intent, 11, Bundle.EMPTY)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(false)
      Log.e("CalendarModule", "addEvent: " + e.message)
    }
  }

  @RequiresApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
  override fun addEventAutomatic(title: String, description: String, dateStart: String, dateEnd: String, timeStart: String, timeEnd: String, location: String, promise: Promise) {
    try {
      promiseHandle = promise
      val calID: Long = 3
      val values = ContentValues().apply {
        put(CalendarContract.Events.DTSTART, parseToMillis(dateStart, timeStart))
        put(CalendarContract.Events.DTEND, parseToMillis(dateEnd, timeEnd))
        put(CalendarContract.Events.TITLE, title)
        put(CalendarContract.Events.DESCRIPTION, description)
        put(CalendarContract.Events.EVENT_LOCATION, location)
        put(CalendarContract.Events.CALENDAR_ID, calID)
      }

      // check permissions
      if (ContextCompat.checkSelfPermission(reactContext, Manifest.permission.WRITE_CALENDAR) != PackageManager.PERMISSION_GRANTED) {
        if (ActivityCompat.shouldShowRequestPermissionRationale(reactContext.currentActivity!!, Manifest.permission.WRITE_CALENDAR)) {
          // Show an explanation to the user *asynchronously* -- don't block
          // this thread waiting for the user's response! After the user
          // sees the explanation, try again to request the permission.
          // TODO:
          Log.d("CalendarModule", "shouldShowRequestPermissionRationale")
        } else {
          Log.d("CalendarModule", "requestPermissions")
          ActivityCompat.requestPermissions(reactContext.currentActivity!!, arrayOf(Manifest.permission.WRITE_CALENDAR), 20)
          // TODO: handle cycle
        }
      } else{
        val uri: Uri? = reactContext.contentResolver.insert(CalendarContract.Events.CONTENT_URI, values)
        Log.d("CalendarModule", "contentResolver")

        if (uri != null) {
          val eventID: Long = uri.lastPathSegment!!.toLong()
          Log.d("CalendarModule", "contentResolver" + uri.lastPathSegment)
          promise.resolve(true)
          return
        }
      }
      promise.resolve(false)
    } catch (e: Exception) {
      promise.resolve(false)
      Log.e("CalendarModule", "addEventAutomatic: " + e.message)
    }
  }

  @SuppressLint("SimpleDateFormat")
  @Throws()
  fun parseToMillis(date: String, time: String): Long {
    // tricky
    val dateTime = date.replace("T00:00:00", "T${time}:00")
    Log.d("CalendarModule", "parse date $dateTime")
    val datetimeFormatter = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss")
    datetimeFormatter.timeZone = TimeZone.getTimeZone("UTC")
    Log.d("CalendarModule", "date time" + datetimeFormatter.parse(dateTime)!!.time)
    return datetimeFormatter.parse(dateTime)!!.time
  }

  override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>?, grantResults: IntArray?): Boolean {
    if (requestCode == 20) {
      // TODO:
    }
    return true
  }

  companion object {
    const val NAME = "RTNCalendar"
  }
}