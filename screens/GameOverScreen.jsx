import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title';

export default function GameOverScreen() {
    return (
        <View>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/success.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
});