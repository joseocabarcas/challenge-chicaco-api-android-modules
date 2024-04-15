package com.rtncalendar;

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class CalendarPackage : TurboReactPackage() {
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? = 
    if (name == CalendarModule.NAME) {
      CalendarModule(reactContext)
    } else {
      null
    }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      CalendarModule.NAME to ReactModuleInfo(
        CalendarModule.NAME,
        CalendarModule.NAME,
        false, // canOverrideExistingModule
        false, // needsEagerInit
        true, // hasConstants
        false, // isCxxModule
        true // isTurboModule
      )
    )
  } 
}