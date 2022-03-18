import React from "react";
import { View } from 'react-native';

import { Text } from "../text"
import styles from './styles';


type Props = {
    price: number;
}

//Adicionar (Quantity*price) 
export function Price({price}: Props) {
    return ( 
        <View style={styles.right}>
            <Text style={styles.value}>
                {Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD' 
                }).format(price)}  
            </Text>
        </View>
    )
}