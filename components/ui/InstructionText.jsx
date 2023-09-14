import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Colors from '../../util/colors';

export default function InstructionText({ children }) {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
});