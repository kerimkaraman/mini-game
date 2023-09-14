import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../util/colors';

export default function Title(props) {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    }
});