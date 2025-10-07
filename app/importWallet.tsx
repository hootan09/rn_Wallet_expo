import { Colors, Fonts } from '@/constants/theme'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ImportWallet = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <FontAwesome5 name="long-arrow-alt-left" size={22} color={Colors.light.white} />
            </TouchableOpacity>

            <Image
                source={require('../assets/images/pngs/import_wallet.png')}
                style={[
                    { width: 'auto', height: 400 },
                ]}
            />

            <View style={styles.contentWrraper}>
                <Text style={styles.titleText}>Import a wallet</Text>
                <Text style={styles.subTitleText}>Import an existing wallet with your secret phrase or with your private key</Text>
            </View>


            <TouchableOpacity style={styles.btnWrapper} onPress={() => router.navigate('/verifyWallet')}>
                <View style={styles.iconBtnWrapper}>
                    <MaterialIcons name="content-paste-go" size={20} color={Colors.light.white} />
                </View>
                <View style={styles.textBtnWrapper}>
                    <Text style={styles.btnText}>Import Secret Recovery Phrase</Text>
                    <Text style={[styles.btnText, {fontSize: 12, lineHeight:14, fontWeight: '500', opacity: 0.75}]}>Import an existing wallet</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ImportWallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.dark,
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
        marginTop: 0,
    },
    titleText: {
        fontFamily: Fonts.rounded,
        fontSize: 30,
        lineHeight: 34,
        fontWeight: '700',
        color: Colors.light.white,
    },
    subTitleText: {
        fontFamily: Fonts.rounded,
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '600',
        color: Colors.light.white,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.75
    },
    btnWrapper: {
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        backgroundColor: Colors.light.lightDark,
        borderRadius: 12,
    },
    iconBtnWrapper: {
        width: 30,
        height: 30,
        backgroundColor: Colors.light.grey,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnWrapper: {
        gap: 2,
    },
    btnText: {
        fontFamily: Fonts.rounded,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '700',
        color: Colors.light.white,
    },
})