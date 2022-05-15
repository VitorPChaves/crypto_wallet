import React, { useState, useRef } from "react";
import { Picker } from '@react-native-picker/picker';

import { LIGHT_GRAY_1 } from "styles/colors";

import styles from "./styles";

export function Select() {
  const [selectedCoin, setSelectedCoin] = useState();

  return (
    <Picker
        selectedValue={selectedCoin}
        style={styles.picker}
        mode={"dropdown"}
        onValueChange={(itemValue, itemIndex) => setSelectedCoin(itemValue)}
    > 
        <Picker.Item label="Select coin" enabled={false} style={{color:LIGHT_GRAY_1}}/>
        <Picker.Item label="Bitcoin" value="btc" />
        <Picker.Item label="Ethereum" value="eth" />
        <Picker.Item label="Dogecoin" value="doge" />
    </Picker>
  );
};