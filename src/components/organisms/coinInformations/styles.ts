import { StyleSheet } from 'react-native';

import { DARK_GRAY_1, LIGHT_GRAY_1 } from "styles/colors";
import { FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_18, INTER_REGULAR } from "styles/typography";

export default StyleSheet.create({
  title: {
    fontFamily: INTER_REGULAR,
    fontSize: FONT_SIZE_14,
    color: DARK_GRAY_1,
    marginBottom: -10,
    marginTop: 20,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  description: {
    fontFamily: INTER_REGULAR,
    fontSize: FONT_SIZE_16,
    color: LIGHT_GRAY_1,
    textAlign: 'left',
    marginTop: 20,
  },

  price: {
    fontFamily: INTER_REGULAR,
    fontSize: FONT_SIZE_18,
    color: LIGHT_GRAY_1,


    borderStyle: 'solid',
    borderColor: LIGHT_GRAY_1,
    borderBottomWidth: 2,

    paddingTop: 10,
    paddingBottom: 5,
  },

  top: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
