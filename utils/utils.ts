global.Buffer = require('buffer').Buffer;

import { entropyToMnemonic, generateMnemonic, mnemonicToEntropy, validateMnemonic } from 'bip39';
import * as Crypto from 'expo-crypto';

export function generateMnemonicList(): string[] {
    // 128 bits of entropy → 12 words
    const strength = 128;

    // rng callback that returns a Buffer
    const rng = (count: number) => Buffer.from(Crypto.getRandomBytes(count));

    // generate the mnemonic
    const mnemonic = generateMnemonic(strength, rng);

    // return as word array
    return mnemonic.split(' ');
};

export function validateMnemonicText(text = ''): boolean {
    return validateMnemonic(text)
}

export function entropyTextToMnemonicText(text =''){
    return entropyToMnemonic(text)
}

export function mnemonicTextToEntropyText(text = ''){
    return mnemonicToEntropy(text);
}