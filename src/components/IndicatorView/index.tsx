import {IndicatorProps} from './types';
import {ActivityIndicator, View} from 'react-native';
import {Style} from './style';
import React, {PropsWithChildren, ReactElement} from 'react';
import {renderIf} from '../../utils/renderIf';

export function IndicatorView(props: PropsWithChildren<IndicatorProps>): ReactElement {
    const {busy, children} = props;

    return (
        <>
            {children}
            {
                renderIf(busy)(() => <View style={Style.container} key={`indicator`}>
                        <ActivityIndicator size={'large'}/>
                    </View>,
                )
            }
        </>
    );
}
