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

export interface EosPubKey{
    publicKey:string;
}

export interface EosPreview{
    payment:string;
    to:string;
    from:string;
}

export interface EosTransactionParam {
    publicKeys : EosPubKey[];
    txData : string;
    chainId : string;
    path : string;
    preview: EosPreview;
}

export interface BtcTransactionParam {
    to : string;
    changeAddressIndex : number;
    amount : number;
    fee : number;
    extraData : string;
    payment : string;
    network : string;
    pathPrefix : string;
    utxo : Utxo[];
}

export interface UsdtTransactionParam {
    to : string;
    amount : number;
    fee : number;
    propertyId : number;
    payment : string;
    network : string;
    pathPrefix : string;
    utxo : Utxo[];
}

export interface Utxo {
    txHash : string;
    vout : number;
    amount : number;
    address : string;
    scriptPubkey : string;
    derivedPath : string;
    sequence : number;
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

    static getBtcAddress(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.getAddress",
                "params": {
                    "network":"MAINNET",
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

    static registerBtcAddress(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.registerAddress",
                "params": {
                    "network":"MAINNET",
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

    static getBtcSegwitAddress(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.getSegWitAddress",
                "params": {
                    "network":"MAINNET",
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

    static registerBtcSegwitAddress(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.registerSegWitAddress",
                "params": {
                    "network":"MAINNET",
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

    static getBtcXpub(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.getXpub",
                "params": {
                    "network":"MAINNET",
                    "path": path
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result.xpub);
                }
                console.log
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static signBtcTransaction(params:BtcTransactionParam):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.signTransaction",
                "params": params,
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static signBtcSegWitTransaction(params:BtcTransactionParam):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.signSegWitTransaction",
                "params": params,
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static signUsdtTransaction(params:UsdtTransactionParam):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.signUsdtTransaction",
                "params": params,
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static signUsdtSegWitTransaction(params:UsdtTransactionParam):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "btc.signUsdtSegWitTransaction",
                "params": params,
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static getEosPubKey(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eos.getPubKey",
                "params": {
                    "path": path
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result.pubkey);
                }
                console.log
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static registerEosPubKey(path: string) :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eos.registerPubKey",
                "params": {
                    "path": path
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result.pubkey);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static signEosMessage(data: string, isHex: boolean, path: string, publicKey: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eos.signMessage",
                "params": {
                    "data": data,
                    "isHex": isHex,
                    "path": path,
                    "publicKey": publicKey
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

    static signEosTransaction(param: EosTransactionParam) {
        return new Promise<EthResult>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eos.signTransaction",
                "params": param,
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve(ret.result);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }
}



