import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Text } from "components/atoms/text";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Button() {
    const navigation = useNavigation();

    async function handleAddCoin() {
        //usar AsyncStorage para armazenar as informações e enviar a tela inicial
        navigation.navigate('home');
    }

    return (
      <View>
        <TouchableOpacity
            //adicionar condição para navegar
          onPress={handleAddCoin}
          style={styles.button}>
          <Text style={styles.buttonText}>ADD COIN</Text>
        </TouchableOpacity>
      </View>
  );
};