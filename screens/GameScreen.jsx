import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

export default function GameScreen(props) {

    const initialGuess = generateRandomBetween(1, 100, props.userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <Text></Text>
            <View>
                <Text>Higher or Lower</Text>
                {/* + - */}
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});