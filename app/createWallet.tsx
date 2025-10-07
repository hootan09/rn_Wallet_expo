import PhraseItemComponent from '@/components/PhraseItemComponent'
import { Colors, Fonts } from '@/constants/theme'
import { generateMnemonicList } from '@/utils/utils'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as Clipboard from 'expo-clipboard'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

global.Buffer = require('buffer').Buffer;

const CreateWallet = () => {
    const router = useRouter();
    const [phrase, setPhrase] = useState<string[]>([]);

    const [copyText, setCopyText] = useState("Copy to clipboard");
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(phrase.join(' '));
        setCopyText('Copied!');        
    };

    // const fetchCopiedText = async () => {
    //     const text = await Clipboard.getStringAsync();
    // };

    useEffect(() => {
      const createdPhrase = generateMnemonicList();
    //   console.log(createdPhrase);
    //   console.log(validateMnemonicText(createdPhrase.join(' ')));

    //   const entropy = mnemonicTextToEntropyText(createdPhrase.join(' '))
    //   console.log(entropy);
    //   console.log(entropyTextToMnemonicText(entropy));
      
      setPhrase(createdPhrase);
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <FontAwesome5 name="long-arrow-alt-left" size={22} color={Colors.light.white} />
            </TouchableOpacity>

            <View style={styles.contentWrraper}>
                <Text style={styles.titleText}>Secret Recovery Phrase</Text>
                <Text style={styles.subTitleText}>This is the only way you will be able to recover your account. Please store it somewhere safe!</Text>
            </View>

            <View style={styles.phraseItemWrapper}>
                {phrase.map((_, index) => (
                    (index + 1) % 2 == 0 && <View key={index} style={styles.PhraseRowWrapper}>
                        <PhraseItemComponent index={index} text={phrase[index - 1]} />
                        <PhraseItemComponent index={index + 1} text={phrase[index]} />
                    </View>
                ))}
            </View>

            <TouchableOpacity style={styles.copyBtnWrapper} onPress={copyToClipboard}>
                <Ionicons name="copy-outline" size={20} color={Colors.light.white} />
                <Text style={styles.copyBtnText}>{copyText}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveBtnWrapper} onPress={() => router.navigate({
                pathname: '/verifyWallet',
                params: { phrase: phrase, random: [...phrase].sort(() => Math.random() - 0.5) }
            })}>
                <LinearGradient
                    style={{ flexDirection: 'row', gap: 8, width: '100%', height: '100%', borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}
                    colors={Colors.light.primaryLinearGradient}
                >
                    <Text style={styles.copyBtnText}>Ok, I saved it</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CreateWallet

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
    phraseItemWrapper: {
        marginTop: 40,

    },
    copyBtnWrapper: {
        marginTop: 50,
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
})