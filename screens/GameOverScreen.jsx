import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title';
import Colors from '../util/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[imageStyle, styles.imageContainer]}>
                    <Image style={styles.imageStyle} source={require("../assets/success.png")} />
                </View>
                <Text style={styles.summaryText}>your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> round to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

// const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        /*         borderRadius: width < 380 ? 150 : 300,
                width: width < 380 ? 150 : 300,
                height: width < 380 ? 150 : 300, */
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 36
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 800
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});