import Http from "./index";

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

const btnEthAddress = document.createElement('button');
btnEthAddress.innerText = "ethAddress";
btnEthAddress.addEventListener('click', (e) => {
    Http.postData({
        "jsonrpc": "2.0",
        "method": "eth.getAddress",
        "params": {
            "path": IMKEY_ETH_PATH
        },
        "id": 1
    })
});

const btnEthSign = document.createElement('button');
btnEthSign.innerText = "ethSign";
btnEthSign.addEventListener('click', (e) => {
    Http.postData({
        "jsonrpc": "2.0",
        "method": "eth.signMessage",
        "params": {
            "data": "hi",
            "sender": "0x6031564e7b2F5cc33737807b2E58DaFF870B590b",
            "path": IMKEY_ETH_PATH
        },
        "id": 2
    })
});

// document.appendChild(btn);
document.body.append(btn);
document.body.append(btnEthAddress);
document.body.append(btnEthSign);
