import React from "react";
import { View } from 'react-native';
import { Text } from "components/atoms/text";

import { coins } from '../../../utils/coin';
import styles from "./styles";

import { PickCoin } from "../../molecules/pickCoin"
import { Input } from "../../atoms/input"
import { Price } from "../../atoms/price"

export type CoinProps = {
    name: string;
    icon: string;
    description: string;
    price: number;
    quantity: number;
}

type Props = {
    data: CoinProps;
}

//Trocar constante fixas por data props
export function CoinInformations() {

  const coinPrice = coins[0].price;
  const coinDescription = coins[0].description;

  return (
      <View style={styles.top}>
        <PickCoin/>
        <Text style={styles.description}>{coinDescription}</Text>
        <Text style={styles.title}>Price</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
          }).format(coinPrice)}
        </Text>
        <Text style={styles.title}>Quantity</Text>
        <Input/> 
      </View>
  );
};