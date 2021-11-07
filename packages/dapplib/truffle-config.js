require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture struggle recipe noise essay history light army gas'; 
let testAccounts = [
"0xc5a0dc9deffcf1026de5e56d563857dbcd2f6818e3ac872863706e8ebc2d4c6b",
"0x05fdcd98101d0d2a6060f18e74e2355dc4ec77d951ca336dd482254a2450f740",
"0x4cb0c12705345064bda43a8bf41e02efbb434f868f35454a9180bd4729dcffc4",
"0x901457286487f3d4df3130aac501f6a1b6cf2a4dda7afff4ab9bfd30a86c23ca",
"0x663f32cc15f9ec08dab9d84fcef16aeb1e7d7739118391d913f59c862eb19dd3",
"0x8267552b9afb304d75552d81ce26f56f3a7b8adf79aa7ce9211f20ad8a7b25b4",
"0xc8593ed5abc7d35b516ff632091cc45d4d662d883647ed26160c01d04f574f54",
"0xcd9ee5dcfb1e687cd3f77a3f58e67c49e183ef8a714a9acc1e487e8da297ce09",
"0x90ffc4ee469b0b222a61b54e111e9175d25e90873b2d6ede5f05cb88214446c1",
"0xb59b54a0257672e5b1b654205745aa6df0422bfdb34627938ab84c5bbc24ead4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

