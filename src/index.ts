const IMKEY_MANAGER_ENDPOINT = "http://localhost:8081/api/imkey"
const IMKEY_ETH_PATH = "m/44'/60'/0'/0/0";
let requestId = 0;

export interface EthTransactionParam {
    nonce : string;
    gasPrice : string;
    gasLimit : string;
    to : string;
    value : string;
    data : string;
    chainId : string;
    path : string;
    payment : string;
    receiver : string;
    sender : string;
    fee : string;
}

export interface EthResult {
    txData : string;
    txHash : string;
}

export default class Http{

    static postData(data: object) {
        // Default options are marked with *
        return fetch(IMKEY_MANAGER_ENDPOINT, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => response.json())
            // .then(console.log)// parses response to JSON
    }
    
    static getEthAddress(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eth.getAddress",
                "params": {
                    "path": path
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result.address);
                }
                console.log
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static registerEthAddress(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eth.registerAddress",
                "params": {
                    "path": path
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result.address);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static signEthMessage(message: string, address: string):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eth.signMessage",
                "params": {
                    "data": message,
                    "sender": address,
                    "path": IMKEY_ETH_PATH
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result.signature);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static signEthTransaction(param: EthTransactionParam) {
        return new Promise<EthResult>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eth.signTransaction",
                "params": {
                    "transaction": {
                        "data": param.data,
                        "gasLimit": param.gasLimit,
                        "gasPrice": param.gasPrice,
                        "nonce": param.nonce,
                        "to": param.to,
                        "value": param.value,
                        "chainId": param.chainId,
                        "path": param.path
                    },
                    "preview": {
                        "payment": param.payment,
                        "receiver": param.receiver,
                        "sender": param.sender,
                        "fee": param.fee
                    }
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    // var txData = ret.result.txData;
                    // if(!ret.result.txData.startsWith("0x")){
                    //     txData = "0x" + txData;
                    // }

                    const signResult: EthResult = {
                        txData: ret.result.txData,
                        txHash: ret.result.txHash
                    };
                    resolve(signResult);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }
}



