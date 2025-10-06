import { Colors, Fonts } from '@/constants/theme'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const PhraseButton = ({ id = 0, text = "", onPress = () => { } }) => {
    return (
        <TouchableOpacity style={styles.btnWrapper} onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default PhraseButton

const styles = StyleSheet.create({
    btnWrapper: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.dark,
        height: 35,
        width: 80,
        borderRadius: 18,
        borderColor: Colors.light.grey,
        borderWidth: 1,
    },
    btnText: {
        fontFamily: Fonts.rounded,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '600',
        color: Colors.light.white,
    },
})