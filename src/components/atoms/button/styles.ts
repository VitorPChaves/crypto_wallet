import { StyleSheet } from 'react-native';

import { BLUE_1, WHITE } from "styles/colors";
import { FONT_SIZE_16 } from "styles/typography";

export default StyleSheet.create({
    button: {
        height: 42,
        backgroundColor: BLUE_1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    buttonText: {
        color: WHITE,
        fontSize: FONT_SIZE_16,
    },
});
