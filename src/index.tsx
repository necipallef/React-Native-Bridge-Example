import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './store';
import {IndicatorView} from './components/IndicatorView';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {MainScreen} from './screens/MainScreen';
import {GlobalState} from './store/state';

const switchNavigator = createSwitchNavigator({
    Main: MainScreen,
});

const Navigation = createAppContainer(switchNavigator);

function AppComponent() {
    const busy = useSelector((state: GlobalState) => state.ui.busy);

    return (
        <IndicatorView busy={busy}>
            <Navigation/>
        </IndicatorView>
    );
}

export function App() {
    return (
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    );
}
