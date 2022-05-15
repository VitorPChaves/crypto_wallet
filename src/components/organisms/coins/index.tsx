import React from "react";
import { FlatList } from 'react-native-gesture-handler';

import { coins } from '../../../utils/coin';
import styles from "./styles";

import { Coin } from "../../molecules/coin"

export function Coins() {
    return ( 
    <FlatList
        style={{width: '100%'}}
        data={coins}
        keyExtractor={coin => coin.id}
        showsVerticalScrollIndicator={false}
        //renders the list of spots
        renderItem={({ item }) => (
          <Coin data={item}/>
        )}
      />
    )
}