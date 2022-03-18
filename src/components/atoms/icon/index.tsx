import React from "react";
import { View } from 'react-native';

import { Text } from "components/atoms/text";
import styles from './styles';

type Props = {
    icon: string;
}

export function Icon({icon}: Props) {
    return ( 
        <Text style={styles.icon}>{icon}</Text>
    )
}