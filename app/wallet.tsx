import { Colors, Fonts } from '@/constants/theme'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Wallet = () => {
    const router = useRouter();

    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false);
    const [notifyTexts, setNotifyTexts] = useState({
        title: 'Hang tight!',
        desc: "We're fetching your wallet details..."
    })



    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topWrapper}>
                <View style={styles.topLeftBtn}>
                    <TouchableOpacity>
                        <AntDesign name="setting" size={24} color={Colors.light.white} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="scan" size={24} color={Colors.light.white} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.topCenterBtn}>
                    <Text style={styles.mainWalletTxt}>Main Wallet</Text>
                    <AntDesign name="caret-down" size={20} color={Colors.light.white} />
                </TouchableOpacity>

                <View style={styles.topRightBtn}>
                    <TouchableOpacity>
                        <FontAwesome5 name="copy" size={24} color={Colors.light.white} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome5 name="search" size={24} color={Colors.light.white} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.balanceWrapper}>
                <Text style={styles.balanceText}>$678.17</Text>
                <View style={styles.balanceProfitWrapper}>
                    <Feather name="arrow-up" size={25} color={Colors.light.accent} />
                    <Text style={styles.balanceProfitText}>$15.49 (-1.97%)</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Button title='Start Again!' onPress={() => router.navigate('/')} color={Colors.light.primary} />
            </View>
        </SafeAreaView>
    )
}

export default Wallet

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
    topWrapper: {
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    topLeftBtn: {
        flexDirection: "row",
        gap: 25,
    },
    topCenterBtn: {
        flexDirection: "row",
        gap: 5,
        alignItems: 'center',
    },
    mainWalletTxt: {
        fontFamily: Fonts.rounded,
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '700',
        color: Colors.light.white
    },
    topRightBtn: {
        flexDirection: "row",
        gap: 25,
    },
    balanceWrapper: {
        top: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
    },
    balanceText: {
        fontFamily: Fonts.rounded,
        fontSize: 45,
        lineHeight: 50,
        fontWeight: '700',
        color: Colors.light.white,
    },
    balanceProfitWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    balanceProfitText: {
        fontFamily: Fonts.rounded,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '500',
        color: Colors.light.accent,
    },
})