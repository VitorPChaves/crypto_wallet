import React from "react";
import { KeyboardAvoidingView, Platform } from 'react-native';

import styles from "./styles";

import { CoinInformations } from "../../organisms/coinInformations"
import { Button } from "../../atoms/button"

interface AddCoinTemplateProps {}

// TODO: Transformar o keyboardAvoidingView em uma flatlist para pegar o data das coins
export const AddCoinTemplate = ({}: AddCoinTemplateProps) => {
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios' } style={styles.container}>
      <CoinInformations/>
      <Button/>
    </KeyboardAvoidingView>
  );
};


