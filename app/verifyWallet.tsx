import PhraseButton from '@/components/PhraseButton';
import { Colors, Fonts } from '@/constants/theme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const VerifyWallet = () => {
    const router = useRouter();
    const { phrase, random } = useLocalSearchParams();
    // console.log(random);

    const [randomPhrase, setRandomPhrase] = useState(random?.split(','))
    const [verifyPhrase, setVerifyPhrase] = useState([]);

    // const copyToClipboard = async () => {
    //     await Clipboard.setStringAsync(phrase.join(' '));
    // };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setVerifyPhrase(text.split(' '))
        setRandomPhrase([])
    };

    const onDeleteVerfyPhrase = (text = null) => {
        if (text) {
            setRandomPhrase([...randomPhrase, text])
            setVerifyPhrase(verifyPhrase.filter(item => item != text))
        }

    }
    const onAddtoVerfyPhrase = (text = null) => {
        if (text) {
            setVerifyPhrase([...verifyPhrase, text]),
                setRandomPhrase(randomPhrase.filter(item => item != text))
        }
    }

    const onPressVerify = () => {
        if (verifyPhrase.join(',') == phrase) {
            router.navigate('/welcome');
        } else {
            Alert.alert("Invalid Phrase!!", "", [], { userInterfaceStyle: 'dark' })
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <FontAwesome5 name="long-arrow-alt-left" size={22} color={Colors.light.white} />
            </TouchableOpacity>

            <View style={styles.contentWrraper}>
                <Text style={styles.titleText}>Verify you saved it correctly</Text>
                <Text style={styles.subTitleText}>Tap the words in the correct numerical order to verify you save secret recovery phrase.</Text>
            </View>

            <View style={[styles.phraseItemWrapper, { justifyContent: 'center', alignItems: 'center' }]}>
                <View style={[styles.randomPhraseWrapper, { marginTop: 0 }]}>
                    {verifyPhrase.map((item, index) => (
                        <PhraseButton key={index} id={index} text={item} onPress={() => onDeleteVerfyPhrase(item)} />
                    ))}
                </View>
            </View>

            <TouchableOpacity style={styles.copyBtnWrapper} onPress={fetchCopiedText}>
                <MaterialIcons name="content-paste-go" size={20} color={Colors.light.white} />
                <Text style={styles.copyBtnText}>Paste Phrase</Text>
            </TouchableOpacity>

            <View style={styles.randomPhraseWrapper}>
                {randomPhrase?.map((item, index) => (
                    <PhraseButton key={index} id={index} text={item} onPress={() => onAddtoVerfyPhrase(item)} />
                ))}
            </View>

            <TouchableOpacity style={styles.saveBtnWrapper} onPress={onPressVerify}>
                <Text style={styles.copyBtnText}>Verify seed phrase</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default VerifyWallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.lightDark,
        paddingHorizontal: 22,
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
    phraseItemWrapper: {
        marginTop: 40,
        backgroundColor: Colors.light.dark,
        height: 180,
        borderRadius: 20,
    },
    copyBtnWrapper: {
        marginTop: 25,
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
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
    PhraseRowWrapper: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 8,
        justifyContent: 'center',
    },
    randomPhraseWrapper: {
        marginTop: 30,
        gap: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: 250,
        // backgroundColor: 'red'
    }
})