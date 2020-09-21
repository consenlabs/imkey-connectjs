import { EthTransactionParam, Connect } from "./index";

const IMKEY_ETH_PATH = "m/44'/60'/0'/0/0";
const btn = document.createElement('button');
btn.innerText = "I'm imKey Connect";
btn.addEventListener('click', (e) => {
    Connect.postData({
        "jsonrpc": "2.0",
        "method": "eth.getAddress",
        "params": {
            "path": IMKEY_ETH_PATH
        },
        "id": 0
    })
});

const btnGetEthAddress = document.createElement('button');
btnGetEthAddress.innerText = "GetEthAddress";
btnGetEthAddress.addEventListener('click', (e) => {
    Connect.getEthAddress(IMKEY_ETH_PATH)
        .then(console.log)
        .catch(console.log);
});

const btnRegisterEthAddress = document.createElement('button');
btnRegisterEthAddress.innerText = "RegisterEthAddress";
btnRegisterEthAddress.addEventListener('click', (e) => {
    Connect.registerEthAddress(IMKEY_ETH_PATH)
        .then(console.log)
        .catch(console.log);
});

const btnSignEthMessage = document.createElement('button');
btnSignEthMessage.innerText = "SignEthMessage";
btnSignEthMessage.addEventListener('click', (e) => {
    Connect.signEthMessage("Hello world", "0x6031564e7b2F5cc33737807b2E58DaFF870B590b")
        .then(console.log)
        .catch(console.log);
});

const btnSignEthTransaction = document.createElement('button');
btnSignEthTransaction.innerText = "SignEthTransaction";
btnSignEthTransaction.addEventListener('click', (e) => {
    Connect.signEthTransaction({
        data: "",
        gasLimit: "189000",
        gasPrice: "20000000008",
        nonce: "8",
        to: '0x3535353535353535353535353535353535353535',
        value: "512",
        chainId: "28",
        path: IMKEY_ETH_PATH,
        payment: "0.01 ETH",
        receiver: "0xE6F4142dfFA574D1d9f18770BF73814df07931F3",
        sender: "0x6031564e7b2F5cc33737807b2E58DaFF870B590b",
        fee: "0.0032 ether",
    })
        .then(console.log)
        .catch(console.log);
});

const btnGetBtcAddress = document.createElement('button');
btnGetBtcAddress.innerText = "GetBtcAddress";
btnGetBtcAddress.addEventListener('click', (e) => {
    Connect.getBtcAddress("m/44'/0'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnRegisterBtcAddress = document.createElement('button');
btnRegisterBtcAddress.innerText = "RegisterBtcAddress";
btnRegisterBtcAddress.addEventListener('click', (e) => {
    Connect.registerBtcAddress("m/44'/0'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnGetBtcSegWitAddress = document.createElement('button');
btnGetBtcSegWitAddress.innerText = "GetBtcSegWitAddress";
btnGetBtcSegWitAddress.addEventListener('click', (e) => {
    Connect.getBtcSegwitAddress("m/49'/0'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnRegisterBtcSegWitAddress = document.createElement('button');
btnRegisterBtcSegWitAddress.innerText = "RegisterBtcSegWitAddress";
btnRegisterBtcSegWitAddress.addEventListener('click', (e) => {
    Connect.registerBtcSegwitAddress("m/49'/0'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnGetXpub = document.createElement('button');
btnGetXpub.innerText = "GetBtcXpub";
btnGetXpub.addEventListener('click', (e) => {
    Connect.getBtcXpub("m/44'/0'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnSignBtcTransaction = document.createElement('button');
btnSignBtcTransaction.innerText = "SignBtcTransaction";
btnSignBtcTransaction.addEventListener('click', (e) => {
    Connect.signBtcTransaction({
        "utxo": [{
            "txHash": "983adf9d813a2b8057454cc6f36c6081948af849966f9b9a33e5b653b02f227a",
            "vout": 0,
            "amount": 200000000,
            "address": "mh7jj2ELSQUvRQELbn9qyA4q5nADhmJmUC",
            "scriptPubkey": "76a914118c3123196e030a8a607c22bafc1577af61497d88ac",
            "derivedPath": "0/22",
            "sequence": 4294967295
        },
        {
            "txHash": "45ef8ac7f78b3d7d5ce71ae7934aea02f4ece1af458773f12af8ca4d79a9b531",
            "vout": 1,
            "amount": 200000000,
            "address": "mkeNU5nVnozJiaACDELLCsVUc8Wxoh1rQN",
            "scriptPubkey": "76a914383fb81cb0a3fc724b5e08cf8bbd404336d711f688ac",
            "derivedPath": "0/0",
            "sequence": 4294967295
        },
        {
            "txHash": "14c67e92611dc33df31887bbc468fbbb6df4b77f551071d888a195d1df402ca9",
            "vout": 0,
            "amount": 200000000,
            "address": "mkeNU5nVnozJiaACDELLCsVUc8Wxoh1rQN",
            "scriptPubkey": "76a914383fb81cb0a3fc724b5e08cf8bbd404336d711f688ac",
            "derivedPath": "0/0",
            "sequence": 4294967295
        },
        {
            "txHash": "117fb6b85ded92e87ee3b599fb0468f13aa0c24b4a442a0d334fb184883e9ab9",
            "vout": 1,
            "amount": 200000000,
            "address": "mkeNU5nVnozJiaACDELLCsVUc8Wxoh1rQN",
            "scriptPubkey": "76a914383fb81cb0a3fc724b5e08cf8bbd404336d711f688ac",
            "derivedPath": "0/0",
            "sequence": 4294967295
        }
        ],

        "to": "moLK3tBG86ifpDDTqAQzs4a9cUoNjVLRE3",
        "changeAddressIndex": 53,
        "amount": 799988000,
        "fee": 10000,
        "extraData": "0200000080a10bc28928f4c17a287318125115c3f098ed20a8237d1e8e4125bc25d1be99752adad0a7b9ceca853768aebb6965eca126a62965f698a0c1bc43d83db632ad7f717276057e6012afa99385",
        "payment": "0.0001 BT",
        "network": "TESTNET",
        "pathPrefix": "m/44'/1'/0'"
    })
        .then(console.log)
        .catch(console.log);
});

const btnSignBtcSegWitTransaction = document.createElement('button');
btnSignBtcSegWitTransaction.innerText = "SignBtcSegWitTransaction";
btnSignBtcSegWitTransaction.addEventListener('click', (e) => {
    Connect.signBtcSegWitTransaction({
        "utxo": [{
            "txHash": "c2ceb5088cf39b677705526065667a3992c68cc18593a9af12607e057672717f",
            "vout": 0,
            "amount": 50000,
            "address": "2MwN441dq8qudMvtM5eLVwC3u4zfKuGSQAB",
            "scriptPubkey": "a9142d2b1ef5ee4cf6c3ebc8cf66a602783798f7875987",
            "derivedPath": "0/0",
            "sequence": 0
        },
        {
            "txHash": "9ad628d450952a575af59f7d416c9bc337d184024608f1d2e13383c44bd5cd74",
            "vout": 0,
            "amount": 50000,
            "address": "2N54wJxopnWTvBfqgAPVWqXVEdaqoH7Suvf",
            "scriptPubkey": "a91481af6d803fdc6dca1f3a1d03f5ffe8124cd1b44787",
            "derivedPath": "0/1",
            "sequence": 0
        }
    ],

        "to": "2N9wBy6f1KTUF5h2UUeqRdKnBT6oSMh4Whp",
        "changeAddressIndex": 0,
        "amount": 88000,
        "fee": 10000,
        "extraData": "1234",
        "payment": "0.0001 BT",
        "network": "TESTNET",
        "pathPrefix": "m/49'/1'/0'/"
    })
        .then(console.log)
        .catch(console.log);
});

const btnSignUsdtTransaction = document.createElement('button');
btnSignUsdtTransaction.innerText = "SignUsdtTransaction";
btnSignUsdtTransaction.addEventListener('click', (e) => {
    Connect.signUsdtTransaction({
        "utxo": [{
			"txHash": "0dd195c815c5086c5995f43a0c67d28344ae5fa130739a5e03ef40fea54f2031",
			"vout": 0,
			"amount": 14824854,
			"address": "mkeNU5nVnozJiaACDELLCsVUc8Wxoh1rQN",
			"scriptPubkey": "76a914383fb81cb0a3fc724b5e08cf8bbd404336d711f688ac",
			"derivedPath": "0/0",
			"sequence": 4294967295
		}],

		"to": "moLK3tBG86ifpDDTqAQzs4a9cUoNjVLRE3",
		"amount": 10050000000,
		"fee": 4000,
		"payment": "100 USDT",
		"propertyId": 31,
		"network": "TESTNET",
		"pathPrefix": "m/44'/1'/0'",
    })
        .then(console.log)
        .catch(console.log);
});

const btnSignUsdtSegWitTransaction = document.createElement('button');
btnSignUsdtSegWitTransaction.innerText = "SignUsdtSegWitTransaction";
btnSignUsdtSegWitTransaction.addEventListener('click', (e) => {
    Connect.signUsdtSegWitTransaction({
        "utxo": [{
			"txHash": "9baf6fd0e560f9f199f4879c23cb73b9c4affb54a1cfdbacb85687efa89f4c78",
			"vout": 1,
			"amount": 21863396,
			"address": "2MwN441dq8qudMvtM5eLVwC3u4zfKuGSQAB",
			"scriptPubkey": "a9142d2b1ef5ee4cf6c3ebc8cf66a602783798f7875987",
			"derivedPath": "0/0",
			"sequence": 0
		}],

		"to": "moLK3tBG86ifpDDTqAQzs4a9cUoNjVLRE3",
		"amount": 10000000000,
		"fee": 4000,
		"payment": "100 USDT",
		"propertyId": 31,
		"network": "TESTNET",
		"pathPrefix": "m/49'/1'/0'/"
    })
        .then(console.log)
        .catch(console.log);
});

const btnGetEosPubKey = document.createElement('button');
btnGetEosPubKey.innerText = "GetEosPubKey";
btnGetEosPubKey.addEventListener('click', (e) => {
    Connect.getEosPubKey("m/44'/194'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnRegisterEosPubKey = document.createElement('button');
btnRegisterEosPubKey.innerText = "RegisterEosPubKey";
btnRegisterEosPubKey.addEventListener('click', (e) => {
    Connect.registerEosPubKey("m/44'/194'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnSignEosMessage = document.createElement('button');
btnSignEosMessage.innerText = "SignEosMessage";
btnSignEosMessage.addEventListener('click', (e) => {
    Connect.signEosMessage("imKey2019", false,"m/44'/194'/0'/0/0","EOS88XhiiP7Cu5TmAUJqHbyuhyYgd6sei68AU266PyetDDAtjmYWF")
        .then(console.log)
        .catch(console.log);
});

const btnSignEosTransaction = document.createElement('button');
btnSignEosTransaction.innerText = "SignEosTransaction";
btnSignEosTransaction.addEventListener('click', (e) => {
    Connect.signEosTransaction({
        "publicKeys": [{
			"publicKey": "EOS88XhiiP7Cu5TmAUJqHbyuhyYgd6sei68AU266PyetDDAtjmYWF"
		}],
		"txData": "c578065b93aec6a7c811000000000100a6823403ea3055000000572d3ccdcd01000000602a48b37400000000a8ed323225000000602a48b374208410425c95b1ca80969800000000000453595300000000046d656d6f00",
		"chainId": "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
		"path": "m/44'/194'/0'/0/0",
		"preview": {
			"payment": "1000 eos",
			"to": "bbbb5555bbbb",
			"from": "liujianmin12"
		}
    })
        .then(console.log)
        .catch(console.log);
});

const btnGetCosmosAddress = document.createElement('button');
btnGetCosmosAddress.innerText = "GetCosmosAddress";
btnGetCosmosAddress.addEventListener('click', (e) => {
    Connect.getCosmosAddress("m/44'/118'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnRegisterCosmosAddress = document.createElement('button');
btnRegisterCosmosAddress.innerText = "RegisterCosmosAddress";
btnRegisterCosmosAddress.addEventListener('click', (e) => {
    Connect.registerCosmosAddress("m/44'/118'/0'/0/0")
        .then(console.log)
        .catch(console.log);
});

const btnSignCosmosTransaction = document.createElement('button');
btnSignCosmosTransaction.innerText = "SignCosmosTransaction";
btnSignCosmosTransaction.addEventListener('click', (e) => {
    Connect.signCosmosTransaction({
        "path": "m/44'/118'/0'/0/0",
		"fee": {
			"amount": [{
				"amount": "750",
				"denom": "muon"
			}],
			"gas": "30000"
		},
		"msg": [{
			"type": "cosmos-sdk/MsgSend",
			"value": {
				"amount": [],
				"fromAddress": "cosmos1ajz9y0x3wekez7tz2td2j6l2dftn28v26dd992",
				"toAddress": "cosmos1yeckxz7tapz34kjwnjxvmxzurerquhtrmxmuxt"
			}
		}],
		"memo": "",
		"accountNumber": "1234567890",
		"chainId": "tendermint_test",
		"sequence": "1234567890",
		"preview": {
			"paymentDis": "",
			"toDis": "",
			"fromDis": "",
			"feeDis": "0.00075 atom"
		}
    })
        .then(console.log)
        .catch(console.log);
});

// document.appendChild(btn);
document.body.append(btn);
document.body.append(btnGetEthAddress);
document.body.append(btnRegisterEthAddress);
document.body.append(btnSignEthMessage);
document.body.append(btnSignEthTransaction);

document.body.append(document.createElement("br"));
document.body.append(btnGetBtcAddress);
document.body.append(btnRegisterBtcAddress);
document.body.append(btnGetBtcSegWitAddress);
document.body.append(btnRegisterBtcSegWitAddress);
document.body.append(btnGetXpub);
document.body.append(btnSignBtcTransaction);
document.body.append(btnSignBtcSegWitTransaction);

document.body.append(document.createElement("br"));
document.body.append(btnSignUsdtTransaction);
document.body.append(btnSignUsdtSegWitTransaction);

document.body.append(document.createElement("br"));
document.body.append(btnGetEosPubKey);
document.body.append(btnRegisterEosPubKey);
document.body.append(btnSignEosMessage);
document.body.append(btnSignEosTransaction);

document.body.append(document.createElement("br"));
document.body.append(btnGetCosmosAddress);
document.body.append(btnRegisterCosmosAddress);
document.body.append(btnSignCosmosTransaction);