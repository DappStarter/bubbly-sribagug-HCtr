require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rifle situate clump gesture desert flush general'; 
let testAccounts = [
"0x868a9ad320abb0fc42ce46e1856ca728474757ae3795e324791e32303b286df0",
"0xc61dc5bd089dbc5677654c8f18589f6994e42a1d603209cb5d98e5ff3fc4d262",
"0x80eaf5534d03fd0cebd83ab399b1023e5cbfe95c203b6f5eb26b4039806861ea",
"0x8734dfcc896b122ccc5e49afd4f8666557e4b9331ed2a6e880fd6cc0aa97df22",
"0x911f466f41bbdce539d146ded798f73ff81b1d4ff85c026779f5290d0969c770",
"0xf19015956dd0fb7a0ffe1d1a94959ad2328e2ac38d8e3e8f224e44c22a264397",
"0xea3af65f9e12c515e8bda4fab257cef3e1c254c22a3f4a87a7a17a8ecab99f76",
"0x6482567a4f206e2e7815b90a7ec4bc37cca3137d594d0b5f6616ddfa3a70a1ab",
"0x98c3d8d82026aef24242c9b8f292fa0e502406eee46385b4b53438b3eeb2d0e3",
"0x68907f4bf7cb45c14c0ea8a86eb0b653efb4c789266ea0f18ca8cdb8abfb89e5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


