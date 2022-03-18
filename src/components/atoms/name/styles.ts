import { StyleSheet } from 'react-native';

import { BLACK } from 'styles/colors';
import { FONT_SIZE_18, INTER_REGULAR } from 'styles/typography';

export default StyleSheet.create({
    name: {
      fontFamily: INTER_REGULAR,
      fontSize: FONT_SIZE_18,
      color: BLACK,
      fontWeight: 'bold',
    },
  });