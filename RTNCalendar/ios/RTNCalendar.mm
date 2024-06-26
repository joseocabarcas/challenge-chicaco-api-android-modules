#import "RTNCalendar.h"

@implementation RTNCalendar

RCT_EXPORT_MODULE()

- (void)addEvent:(char)a b:(char)b c:(char)c d:(char)d e:(char)e f:(char)f g:(char)g resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    bool *result = [[bool alloc] initWithBool:TRUE];
    resolve(result);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeCalendarSpecJSI>(params);
}

@end