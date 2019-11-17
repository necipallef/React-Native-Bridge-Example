import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    container: {
        width: 250 * rx,
        height: 90 * rx,
        flexDirection: 'row',
        borderWidth: 5 * rx,
        borderColor: 'black',
        borderRadius: 55 * rx,
        padding: 15 * rx,
    },
    buttonTextContainer: {
        width: 40 * rx,
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    middleTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    middleText: {
        color: 'black',
        fontSize: 16,
    },
});
