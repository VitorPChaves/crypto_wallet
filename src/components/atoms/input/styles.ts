import { StyleSheet } from 'react-native';

import { BLACK, DARK_GRAY_1 } from "styles/colors";
import { FONT_SIZE_18, INTER_REGULAR } from "styles/typography";

export default StyleSheet.create({
  quantity: {
    fontFamily: INTER_REGULAR,
    fontSize: FONT_SIZE_18,
    color: BLACK,

    borderStyle: 'solid',
    borderColor: DARK_GRAY_1,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});
