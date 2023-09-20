import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title(props) {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.OS === "android" ? 2 : 0,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
    }
});