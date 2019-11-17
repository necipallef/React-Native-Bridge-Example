import {Props} from './types';
import {Button, TextInput, View} from 'react-native';
import {Styles} from './style';
import React, {useState} from 'react';
import {CounterApiService} from '../../api/services/counter-api.service';
import {useDispatch} from 'react-redux';
import {changeBusyAction} from '../../store/ui/action';

export function CounterSetComponent(props: Props) {

    const dispatch = useDispatch();

    const [currentCountString, setCurrentCountString] = useState(null);

    function setBusy(busy: boolean) {
        dispatch(changeBusyAction(busy));
    }

    function onSetPress() {
        const newCountString = currentCountString;
        if (newCountString == null || newCountString.length === 0) {
            return;
        }

        const newCount = parseInt(newCountString);
        if (isNaN(newCount)) {
            return;
        }

        setBusy(true);
        CounterApiService.get()
            .then(() => {
                props.setNewCount(newCount);
                setCurrentCountString(null);
            })
            .finally(() => setBusy(false));
    }

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.textInput}
                value={currentCountString}
                onChangeText={setCurrentCountString}
                keyboardType='numeric'/>
            <Button title='SET' onPress={onSetPress}/>
        </View>
    );
}
