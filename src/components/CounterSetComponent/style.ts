import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    container: {
        width: 75 * rx,
        height: 75 * rx,
        marginTop: 50 * rx,
    },
    textInput: {
        width: '100%',
        flex: 1,
        borderColor: 'blue',
        borderWidth: StyleSheet.hairlineWidth,
    },
});
