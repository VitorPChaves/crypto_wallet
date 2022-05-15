import { StyleSheet } from 'react-native';

import { GREEN_TINT_1 } from 'styles/colors';
import { FONT_SIZE_24 } from 'styles/typography';

export default StyleSheet.create({
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
  });