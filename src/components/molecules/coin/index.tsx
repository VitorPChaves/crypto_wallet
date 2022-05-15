import React from "react";
import { View } from 'react-native';

import styles from './styles';

import { Icon } from "../../atoms/icon"
import { Name } from "../../atoms/name"
import { Date } from "../../atoms/date"
import { Price } from "../../atoms/price"

export type CoinProps = {
    name: string;
    icon: string;
    price: number;
    date: Date;
}

type Props = {
    data: CoinProps;
}

export function Coin({data}: Props) {
    return ( 
        <View style={styles.container}>
            <View style={styles.left}>
                <Icon icon={data.icon}/>
                <View>
                <Name name={data.name}/>
                <Date date={data.date}/>
                </View>
            </View>
            <Price price={data.price}/>
        </View>
    )
}