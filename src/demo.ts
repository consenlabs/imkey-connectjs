import Http, { EthTransactionParam } from "./index";

const IMKEY_ETH_PATH = "m/44'/60'/0'/0/0";
const btn = document.createElement('button');
btn.innerText = "I'm imKey Connect";
btn.addEventListener('click', (e) => {
    Http.postData({
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
    Http.getEthAddress(IMKEY_ETH_PATH)
    .then(console.log)
    .catch(console.log);
});

const btnRegisterEthAddress = document.createElement('button');
btnRegisterEthAddress.innerText = "RegisterEthAddress";
btnRegisterEthAddress.addEventListener('click', (e) => {
    Http.registerEthAddress(IMKEY_ETH_PATH)
    .then(console.log)
    .catch(console.log);
});

const btnSignEthMessage = document.createElement('button');
btnSignEthMessage.innerText = "SignEthMessage";
btnSignEthMessage.addEventListener('click', (e) => {
    Http.signEthMessage("Hello world", "0x6031564e7b2F5cc33737807b2E58DaFF870B590b")
    .then(console.log)
    .catch(console.log);
});

const btnSignEthTransaction = document.createElement('button');
btnSignEthTransaction.innerText = "SignEthTransaction";
btnSignEthTransaction.addEventListener('click', (e) => {
    Http.signEthTransaction({
        data: "",
        gasLimit: "189000",
        gasPrice: "20000000008",
        nonce: "8",
        to: '0x3535353535353535353535353535353535353535',
        value: "512",
        chainId: "28",
        path:IMKEY_ETH_PATH,
        payment: "0.01 ETH",
        receiver: "0xE6F4142dfFA574D1d9f18770BF73814df07931F3",
        sender: "0x6031564e7b2F5cc33737807b2E58DaFF870B590b",
        fee: "0.0032 ether",
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
