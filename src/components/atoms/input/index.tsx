import React, { useState } from "react";
import { TextInput } from 'react-native';

import { LIGHT_GRAY_1 } from "styles/colors";

import styles from "./styles";

export function Input() {
  const [quantity, setQuantity] = useState('');

  return (
    <TextInput 
        style={styles.quantity}
        placeholder="0"
        placeholderTextColor= {LIGHT_GRAY_1}
        autoCapitalize="none"
        autoCorrect={false}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
    /> 
  );
};