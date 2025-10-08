[Bitcoin Tools](https://btc.bitaps.com/tools)

[BIP39](https://iancoleman.io/bip39/)

[BlockChain Explore](https://blockexplorer.one)

[learnmeabitcoin.com/](https://learnmeabitcoin.com/)

| Coin     | index | path starts with |
| -------- | ----- | ---------------- |
| Bitcoin  | 0’    | m/44’/0’/…       |
| Ethereum | 60’   | m/44’/60’/…      |
| Litecoin | 2’    | m/44’/2’/…       |
| Dogecoin | 3’    | m/44’/3’/…       |


```js
// Dogecoin (3’) – legacy (D…)
const dogeNet = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bip32: { public: 0x02facafd, private: 0x02fac398 },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e
};

const root = bip32.fromSeed(seed, dogeNet);
const child = root.derivePath("m/44'/3'/0'/0/0"); // coin-type 3'
const pubkey = child.publicKey;

const { address } = bitcoin.payments.p2pkh({ pubkey, network: dogeNet });
console.log('DOGE address :', address);  // D...
console.log('DOGE WIF     :', child.toWIF());
```

```js
// Litecoin (2’) – native SegWit (LTC1…)


const ltcNet = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bech32: 'ltc',
  bip32: { public: 0x019da462, private: 0x019d9cfe },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0
};

const root = bip32.fromSeed(seed, ltcNet);
const child = root.derivePath("m/44'/2'/0'/0/0"); // coin-type 2'
const pubkey = child.publicKey;

const { address } = litecoin.payments.p2wpkh({ pubkey, network: ltcNet });
console.log('LTC address :', address);   // ltc1...
console.log('LTC WIF     :', child.toWIF());
```

```js
// Ethereum (60’)
// m/44'/60'/0'/0/i

// npm install ethers@6  # ETH
const { ethers } = require('ethers');

const hdNode = ethers.HDNodeWallet.fromSeed(seed)
                 .derivePath("m/44'/60'/0'/0/0");

console.log('ETH address :', hdNode.address);   // 0x...
console.log('ETH privKey :', hdNode.privateKey); // 0x...
```

