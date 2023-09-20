import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react';
import Colors from '../../util/colors';

export default function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>

    )
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 46,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, /* Android Specific */
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
});