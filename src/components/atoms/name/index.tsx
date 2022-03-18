import React from "react";

import { Text } from "components/atoms/text";
import styles from './styles';

type Props = {
    name: string;
}

export function Name({name}: Props) {
    return ( 
        <Text style={styles.name}>{name}</Text>
    )
}