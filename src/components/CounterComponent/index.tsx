import {Styles} from './style';
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Props} from './types';
import {useSelector} from 'react-redux';
import {GlobalState} from '../../store/state';

export function CounterComponent(props: Props) {

    const currentCount = useSelector((state: GlobalState) => state.counter.currentCount);

    const {
        plusPress,
        minusPress,
    } = props;

    const currentCountString = currentCount.toString();

    return (
        <View style={Styles.container}>
            <TouchableOpacity
                onPress={minusPress}>
                <View style={Styles.buttonTextContainer}>
                    <Text style={Styles.buttonText}>
                        -
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={Styles.middleTextContainer}>
                <Text style={Styles.middleText}>
                    {currentCountString}
                </Text>
            </View>
            <TouchableOpacity
                onPress={plusPress}>
                <View style={Styles.buttonTextContainer}>
                    <Text style={Styles.buttonText}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
