import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title';
import Colors from '../util/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={require("../assets/success.png")} />
            </View>
            <Text style={styles.summaryText}>your phone needed <Text style={styles.highligth}>{roundsNumber}</Text> round to guess the number <Text style={styles.highligth}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 200,
        width: 200,
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 36
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highligth: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});