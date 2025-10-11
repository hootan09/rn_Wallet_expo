global.Buffer = require('buffer').Buffer;

import ecc from '@bitcoinerlab/secp256k1';
import { BIP32Factory } from 'bip32';
import { entropyToMnemonic, generateMnemonic, mnemonicToEntropy, mnemonicToSeedSync, validateMnemonic } from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import { ethers } from 'ethers';
import * as Crypto from 'expo-crypto';
import * as rippleKeypairs from 'ripple-keypairs';

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

    const path = `m/84'/0'/0'/0/${0}`; //TrustWallet, metamask, ...
    const child = root.derivePath(path);

    /* 5. private key → WIF */
    const wif = child.toWIF();

    /* 6. public key → P2WPKH (bech32) address */
    const pubkey = child.publicKey;
    const network = bitcoin.networks.bitcoin;   // bitcoin (mainnet)
    
    const { address } = bitcoin.payments.p2wpkh({ pubkey, network });
    console.log(`\nBitCoin\nPath      ${path}\nAddress   ${address}\nWIF       ${wif}`);

    //Ethereum (60’)
    // m/44'/60'/0'/0/i
    const etherPath = `m/44'/60'/0'/0/${0}`
    const hdNode = ethers.HDNodeWallet.fromSeed(seed)
        .derivePath(etherPath);
    console.log("\nEthereum\npath:    ", etherPath, '\naddress: ', hdNode.address, '\nWIF:     ', hdNode.privateKey);

    //Dogecoin (3’) – legacy (D…)
    const dogeNet = {
        bech32: "D",
        messagePrefix: '\x19Dogecoin Signed Message:\n',
        bip32: { public: 0x02facafd, private: 0x02fac398 },
        pubKeyHash: 0x1e,
        scriptHash: 0x16,
        wif: 0x9e,
    };
    const dogePath = `m/44'/3'/0'/0/${0}`
    const child2 = root.derivePath(dogePath); // coin-type 3'
    const dogePubkey = child2.publicKey;

    const { address: dogeAddress } = bitcoin.payments.p2pkh({ pubkey:dogePubkey, network: dogeNet });
    console.log("\nDoge\npath:    ",dogePath,"\nAddress: ", dogeAddress,'\nWIF:     ', child2.toWIF());

    //XRP
    const xrpdata = rippleKeypairs.walletFromSeed(seed);
    console.log('\nXRP\nseed:     ', xrpdata.seed, '\naccountID:', xrpdata.accountID,'\npublicKey:',xrpdata.publicKey);
}