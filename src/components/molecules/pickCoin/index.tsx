import React, { useState, useRef } from "react";
import { View } from 'react-native';
import { Text } from "components/atoms/text";

import { coins } from '../../../utils/coin';

import { Select } from "../../atoms/select"
import { Icon } from "../../atoms/icon"


import styles from "./styles";

type Props = {
    icon: string;
}

export function PickCoin() {

  const coinIcon = coins[0].icon;

  return (
    <View style={styles.left}>
        <Text style={styles.icon}>{coinIcon}</Text>
        {/* <Icon icon={icon}/> */}
        <View style={styles.coin}>
        <Text style={styles.title}>Coin</Text>
        <Select/>
        </View>
    </View>
  );
};