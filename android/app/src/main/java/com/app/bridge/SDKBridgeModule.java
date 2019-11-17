package com.app.bridge;

import com.app.sdk.Counter;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import androidx.annotation.NonNull;

@ReactModule(name = "SDKModule")
public class SDKBridgeModule extends ReactContextBaseJavaModule {

    private Counter counterInstance = new Counter();

    private ReactApplicationContext reactApplicationContext;
    private DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter;

    private DeviceEventManagerModule.RCTDeviceEventEmitter getEventEmitter() {
        if (this.eventEmitter == null) {
            this.eventEmitter = this.reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }

        return this.eventEmitter;
    }

    SDKBridgeModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);

        this.reactApplicationContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "SDKModule";
    }

    @ReactMethod
    public void getCountValue(final Promise promise) {
        promise.resolve(counterInstance.getCountValue());
    }

    @ReactMethod
    public void increaseCount() {
        this.counterInstance.increaseCount();
        this.sendCountValue();
    }

    @ReactMethod
    public void decreaseCount() {
        this.counterInstance.decreaseCount();
        this.sendCountValue();
    }

    @ReactMethod
    public void setCountValue(int value) {
        this.counterInstance.setCountValue(value);
        this.sendCountValue();
    }

    private void sendCountValue() {
        WritableMap body = Arguments.createMap();
        body.putInt("countValue", counterInstance.getCountValue());
        this.getEventEmitter().emit("onNewCountValue", body);
    }
}
