import React, {useCallback, useEffect} from 'react';
import {
    DeviceEventEmitter,
    KeyboardAvoidingView,
    NativeEventEmitter,
    NativeModules,
    Platform,
    ScrollView,
    View,
} from 'react-native';
import {Styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {setCountAction} from '../../store/count/action';
import {CounterComponent} from '../../components/CounterComponent';
import {GlobalState} from '../../store/state';
import {SDK} from '../../utils/sdk';
import {CounterSetComponent} from '../../components/CounterSetComponent';

const {SDKModule} = NativeModules;

export const MainScreen = React.memo(() => {

        const currentCount = useSelector((state: GlobalState) => state.counter.currentCount);
        const dispatch = useDispatch();

        useEffect(() => {
            SDK.getCountValue()
                .then(countValue => {
                    dispatch(setCountAction(countValue));
                });
            const nativeEventListener = Platform.select({
                    ios: () => new NativeEventEmitter(SDKModule),
                    android: () => DeviceEventEmitter,
                },
            )();

            const sub = nativeEventListener.addListener('onNewCountValue', body => {
                dispatch(setCountAction(body.countValue));
            });

            return () => {
                sub.remove();
            };
        }, [dispatch]);

        const plusPress = useCallback(() => {
            SDK.increaseValue();
        }, []);

        const minusPress = useCallback(() => {
            SDK.decreaseValue();
        }, []);

        const setNewCount = useCallback((newCount: number) => {
            SDK.setCountValue(newCount);
        }, []);

        return (
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.select<'height' | 'position' | 'padding'>({
                    android: undefined,
                    ios: 'padding',
                })}>
                <ScrollView
                    contentContainerStyle={{flex: 1}}>
                    <View style={Styles.container}>
                        <CounterComponent
                            currentCount={currentCount}
                            plusPress={plusPress}
                            minusPress={minusPress}/>
                        <CounterSetComponent setNewCount={setNewCount}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    },
);
