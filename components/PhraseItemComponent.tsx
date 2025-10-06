import { Colors, Fonts } from '@/constants/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PhraseItemComponent = ({ index = 0, text = '' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{index}</Text>
            <Text style={[styles.text, {color: Colors.light.grey}]}>|</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default PhraseItemComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        // justifyContent: 'center',
        // gap: 12,
        alignItems: 'center',
        backgroundColor: Colors.light.dark,
        height: 45,
        width: 110,
        borderRadius: 18,
        borderColor: Colors.light.grey,
        borderWidth: 1,
    },
    text: {
        fontFamily: Fonts.rounded,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '600',
        color: Colors.light.white,

    },
})