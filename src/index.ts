const IMKEY_MANAGER_ENDPOINT = "http://localhost:8081/api/imkey"
const IMKEY_ETH_PATH = "m/44'/60'/0'/0/0";
let requestId = 0;

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
            .then(console.log)// parses response to JSON
    }
    
    static ethAddress() :Promise<string>{
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eth.getAddress",
                "params": {
                    "path": IMKEY_ETH_PATH
                },
                "id": requestId++
            }
            ).then((ret) => {
                if (ret.result == null) {
                    reject(ret.error);
                } else {
                    resolve([ret.result.address]);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static imKeySignMessage(dataToSign: string, address: string):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            Http.postData({
                "jsonrpc": "2.0",
                "method": "eth.signMessage",
                "params": {
                    "data": dataToSign,
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
}



