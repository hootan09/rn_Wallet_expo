import { Colors } from '@/constants/theme'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Wallet = () => {
    const router = useRouter();

    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false);
    const [notifyTexts, setNotifyTexts] = useState({
        title: 'Hang tight!',
        desc: "We're fetching your wallet details..."
    })

    const onVerifyRecoveryPress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.navigate('/wallet');
        }, 15000);
        setTimeout(() => {
            setNotifyTexts({
                title: 'Almost there!',
                desc: 'Syncing with the blockchain...'
            })
        }, 7000);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <FontAwesome5 name="long-arrow-alt-left" size={22} color={Colors.light.white} />
            </TouchableOpacity>

            <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
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
    }
})