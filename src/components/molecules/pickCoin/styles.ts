import { StyleSheet } from 'react-native';

import { DARK_GRAY_1, GREEN_TINT_1 } from "styles/colors";
import { FONT_SIZE_14, FONT_SIZE_24, INTER_REGULAR } from "styles/typography";

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

  icon: {
    height: 48,
    width: 48,
    fontSize: FONT_SIZE_24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 10,
    backgroundColor: GREEN_TINT_1,
    borderRadius: 90,
  },

  coin : { 
    borderStyle: 'solid',
    borderColor: DARK_GRAY_1,
    borderBottomWidth: 2,
    paddingBottom: 0,
  },
});
