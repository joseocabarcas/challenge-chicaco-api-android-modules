package com.rtncalendar

import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.provider.CalendarContract
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.rtncalendar.NativeCalendarSpec
import java.util.Calendar

class CalendarModule(val reactContext: ReactApplicationContext) : NativeCalendarSpec(reactContext) {

  override fun getName() = NAME

  @RequiresApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
  override fun addEvent(title: String, description: String, timeStart: String, timeEnd: String,  promise: Promise) {
    try {
      val startMillis: Long = Calendar.getInstance().run {
        set(2012, 0, 19, 7, 30)
        timeInMillis
      }
      val endMillis: Long = Calendar.getInstance().run {
        set(2012, 0, 19, 8, 30)
        timeInMillis
      }
      val intent = Intent(Intent.ACTION_INSERT)
        .setData(CalendarContract.Events.CONTENT_URI)
        .putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, startMillis)
        .putExtra(CalendarContract.EXTRA_EVENT_END_TIME, endMillis)
        .putExtra(CalendarContract.Events.TITLE, title)
        .putExtra(CalendarContract.Events.DESCRIPTION, description)
        .putExtra(CalendarContract.Events.EVENT_LOCATION, "The gym")
        .putExtra(CalendarContract.Events.AVAILABILITY, CalendarContract.Events.AVAILABILITY_BUSY)
      // reactContext.startActivity(intent)
      reactContext.startActivityForResult(intent, 11, Bundle.EMPTY)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(false)
    }
  }

  companion object {
    const val NAME = "RTNCalendar"
  }
}