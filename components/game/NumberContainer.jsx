import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../util/colors';

export default function NumberContainer(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{props.children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 16 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 24 : 36,
        fontFamily: 'open-sans-bold'
    },
});