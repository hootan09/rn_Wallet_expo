global.Buffer = require('buffer').Buffer;

import ecc from '@bitcoinerlab/secp256k1';
import { BIP32Factory } from 'bip32';
import { entropyToMnemonic, generateMnemonic, mnemonicToEntropy, mnemonicToSeedSync, validateMnemonic } from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
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

export function entropyTextToMnemonicText(text = '') {
    return entropyToMnemonic(text)
}

export function mnemonicTextToEntropyText(text = '') {
    return mnemonicToEntropy(text);
}

export function mnemonicTextToSeed(text = '') {
    let seed = mnemonicToSeedSync(text)//.toString('hex');
    return seed;
}

export function getAddressFromSeed(seed: any) {
    console.log('Seed : ', seed.toString('hex'));
    const bip32 = BIP32Factory(ecc);
    const root = bip32.fromSeed(seed);
    
    console.log('Master private key :', root.toBase58());

    for (let i = 0; i < 3; i++) {
        const path = `m/84'/0'/0'/0/${i}`;
        const child = root.derivePath(path);

        /* 5. private key → WIF */
        const wif = child.toWIF();
        
        /* 6. public key → P2WPKH (bech32) address */
        const pubkey = child.publicKey;
        const network = bitcoin.networks.bitcoin;   // bitcoin (mainnet)
        const { address } = bitcoin.payments.p2wpkh({ pubkey, network });
        console.log(`\nPath      ${path}\nAddress   ${address}\nWIF       ${wif}`);
    }
}