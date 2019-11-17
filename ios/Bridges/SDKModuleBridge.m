#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import "RCTErrorFixer.h"

@interface RCT_EXTERN_REMAP_MODULE(SDKModule, SDKModule, RCTEventEmitter)

RCT_EXTERN_METHOD(getCountValue:
                  (RCTPromiseResolveBlock) resolve
                  rejecter:
                  (RCTPromiseRejectBlock) rejecter)

RCT_EXTERN_METHOD(increaseCount)

RCT_EXTERN_METHOD(decreaseCount)

RCT_EXTERN_METHOD(setCountValue:
                  (int) value)


+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end
