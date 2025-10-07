import { Colors, Fonts } from '@/constants/theme'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Recovery = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <FontAwesome5 name="long-arrow-alt-left" size={22} color={Colors.light.white} />
            </TouchableOpacity>

            <View style={styles.contentWrraper}>
                <Text style={styles.titleText}>Secret Recovery Phrase</Text>
                <Text style={styles.subTitleText}>Start the process to restore your wallet by entering your 12 or 24-word recovery phrase below.</Text>
            </View>


            <TouchableOpacity style={styles.saveBtnWrapper} onPress={() => { }}>
                <LinearGradient
                    style={{width: '100%', height: '100%', borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}
                    colors={Colors.light.primaryLinearGradient}
                >
                    <Text style={styles.copyBtnText}>Verify seed phrase</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Recovery

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.lightDark,
        paddingHorizontal: 16,
    },
    backBtn: {
        marginTop: 20,
        marginLeft: 16,
    },
    contentWrraper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    titleText: {
        fontFamily: Fonts.rounded,
        fontSize: 25,
        lineHeight: 30,
        fontWeight: '600',
        color: Colors.light.white,
    },
    subTitleText: {
        fontFamily: Fonts.rounded,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '600',
        color: Colors.light.white,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.75
    },
    copyBtnText: {
        fontFamily: Fonts.rounded,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '800',
        color: Colors.light.white,
    },
    saveBtnWrapper: {
        width: '100%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: Colors.light.primary,
        borderRadius: 12,
    },
})