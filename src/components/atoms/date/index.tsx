import React from "react";

import { Text } from "components/atoms/text";
import styles from './styles';

type Props = {
    date: Date;
}

export function Date({date}: Props) {
    return ( 
        <Text style={styles.date}>Added {date}</Text>
    )
}