import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors,
    text: {
        fontFamily: Platform.OS === 'android' ? 'serif' : 'Avenir',
        fontSize: 20,
        color: colors.darkGrey,
    },
};