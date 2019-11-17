import {NativeModules} from 'react-native';

const {SDKModule} = NativeModules;

export class SDK {
    public static increaseValue() {
        SDKModule.increaseCount();
    }

    public static decreaseValue() {
        SDKModule.decreaseCount();
    }

    public static setCountValue(countValue: number) {
        SDKModule.setCountValue(countValue);
    }

    public static getCountValue(): Promise<number> {
        return SDKModule.getCountValue();
    }
}
