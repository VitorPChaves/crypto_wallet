import { StyleSheet } from 'react-native';

import { BLUE_1, WHITE } from '../../../styles/colors';
import { FONT_SIZE_14, INTER_REGULAR } from '../../../styles/typography';

export default StyleSheet.create({
    right: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  
    value: {
      fontFamily: INTER_REGULAR,
      fontSize: FONT_SIZE_14,
      textAlign: 'center',
      color: WHITE,
      backgroundColor: BLUE_1,
      borderRadius: 20,
      width: 'auto',
      paddingHorizontal: 10,
      paddingVertical: 2
  
    },
  });