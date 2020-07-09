## BTC

### 1. 交易签名

 BTC 交易签名

```javascript
const result = await Connect.signBtcTransaction(params);	
```

#### Params

* `amount` - number，交易金额
* `fee` -  number，矿工费
* `to` -  string，收款地址
* `amount` -  number，交易金额
* `fee` - number，矿工费
* `changeAddressIndex` -  number， 找零地址索引
* `unspents` -  Utxo，未消耗UTXO列表
* `extraData` -  string，op return数据
* `network` -  string，网络类型
* `pathPrefix` -  string，path前缀

#### Result

* `txData` -  string，带签名值的交易数据
* `txHash` -  string，交易数据hash

### Error



### Example



### 2. SegWit 交易签名

BTC带隔离见证的交易签名

```javascript
const result = await Connect.signBtcSegWitTransaction(params);	
```

#### Param

* `to` - string， 收款地址
* `amount` - number， 交易金额
* `fee` - number， 旷工费
* `changeAddressIndex` - number， 找零地址索引
* `unspents` - Utxo， 未消耗UTXO列表
* `extraData` - string，op return数据
* `network` -  string，网络类型
* `pathPrefix` - string，path前缀

#### Result

* `witnessTxData` - string，带签名值的交易数据
* `wtxHash` - string，带签名值的交易数据hash
* `txHash`	，string，交易数据hash

### 3.USDT 交易签名

USDT 交易签名

```javascript
const result = await Connect.signUsdtTransaction(params);	
```

#### Param

* `to` - string， 收款地址
* `amount` - number， 交易金额
* `fee` - number， 旷工费
* `changeAddressIndex` - number， 找零地址索引
* `unspents` - Utxo， 未消耗UTXO列表
* `extraData` - string，op return数据
* `propertyId` - string，属性ID
* `network` - string，网络类型
* `pathPrefix` - string，path前缀

#### Return

* txData - string，带签名值的交易数据
* txHash - string，交易数据hash

### 4. USDT SegWit 交易签名

带隔离见证的USDT交易签名
```javascript
const result = await Connect.signUsdtSegWitTransaction(params);	
```

#### Param

* `to` - string， 收款地址
* `amount` - number， 交易金额
* `fee` - number， 旷工费
* `changeAddressIndex` - number， 找零地址索引
* `unspents` - Utxo， 未消耗UTXO列表
* `extraData` - string，op return数据
* `propertyId` - string，属性ID
* `network` - string，网络类型
* `pathPrefix` - string，path前缀

#### Result

* `witnessTxData` - string，带签名值的交易数据
* `wtxHash` - string，带签名值的交易数据hash
* `txHash` - string，交易数据hash

###  5. 获取 XPub 

获取指定网络和路径的xpub编码

```javascript
const result = await Connect.getXPub(params);	
```

### Param

* `network` - string，网络类型

* `path` - string，path路径

### Result

* `xpub` - string，xpub数据

###  6. 获取BTC地址

获取指定网络和路径的地址

```javascript
const result = await Connect.getBtcAddress(params);	
```

### Param

* `network` - string，网络类型

* `path` - string，path路径
* `isSegWit` boolean 是否隔离见证地址

### Result

* `address` - string，地址

### 7. 注册BTC地址

在硬件钱包菜单我的钱包中显示指定路径的地址

```javascript
const result = await Connect.registerBtcAddress(params);	
```

### Param

* `network` - string，网络类型

* `path` - string，path路径
* `isSegWit` - boolean 是否隔离见证地址

### Result

* `address` - string，地址



## ETH

### 1. 交易签名

 ETH 交易签名

```javascript
const result = await Connect.signEthTransaction(params);	
```

#### Params

* `nonce` - string，收款方账户nonce值
* `gasPrice` - string，gas价格
* `gasLimit` - string，gas限制
* `to` - string，收款地址
* `value` - string，转账金额
* `data` - string，数据
* `chainId` - string，链ID
* `path` - string，path路径
* `payment` - string，支付金额（屏幕显示）
* `receiver` - string，收款地址（屏幕显示）
* `sender` - string，付款地址
* `fee` - string，旷工费（屏幕显示）

#### Result

* `txData` - string，带签名值的交易数据
* `txHash` - string，交易数据hash

### 2. 消息签名

ETH 消息签名

```javascript
const result = await Connect.signEthMessage(params);	
```

#### Params

* `path` - string，path路径
* `message` - string，消息
* `sender` - string，发送方地址

#### Result

* `signature` - string，消息签名结果

###  3. 获取ETH地址

获取指定网络和路径的地址

```javascript
const result = await Connect.getEthAddress(params);	
```

### Param

* `path` - string，path路径

### Result

* `address` - string，地址

### 4. 注册ETH地址

在硬件钱包菜单我的钱包中显示指定路径的地址

```javascript
const result = await Connect.registerEthAddress(params);	
```

### Param

* `path` - string，path路径

### Result

* `address` - string，地址



## EOS

### 1. 交易签名

Eos 交易签名

```javascript
const result = await Connect.signEosTransaction(params);	
```

#### Params

* `path` - string，path路径
* `sign_datas` - EosSignData，数据
  * `EosSignData`
    * `txData` - string，交易数据
    * `publicKeys` - string，公钥
    * `chainId` - string，chain ID
    * `to` - string，收款地址
    * `from` - string，付款地址
    * `payment` - string，支付金额

#### Result

* `signs` - string，带签名值的交易数据
* `hash` - string，交易数据hash

### 2. 消息签名

EOS 消息签名

```javascript
const result = await Connect.signEosMessage(params);	
```

#### Params

* `path` - string，path路径
* `data` - string，消息
* `isHex` - bool，是否为hex

#### Result

* `signature` - string，消息签名结果

###  3. 获取EOS 公钥

获取指定网络和路径的公钥

```javascript
const result = await Connect.getEosPubKey(params);	
```

### Param

* `path` - string，path路径

### Result

* `pubkey` - string，公钥

### 4. 注册ETH地址

在硬件钱包菜单我的钱包中显示指定路径的公钥

```javascript
const result = await Connect.registerEosPubkey(params);	
```

### Param

* `network` - string，网络类型

* `path` - string，path路径

### Result

* `pubkey` - string，地址

## Cosmos

### 1. 交易签名

 EOS 交易签名

```javascript
const result = await Connect.signCosmosTransaction(params);	
```

#### Params

* `path` - string，path路径
* `pamentDisplay` -  string，金额（屏幕显示）
* `toDisplay` -  string，收款地址（屏幕显示）
* `fromDisplay` -  string，转出地址 （屏幕显示）
* `feeDisplay` -  string，矿工费 （屏幕显示）
* `signData`  -  SignData（签名数据）
  
  * `accountNumber`  -  string，
  
  * `chainId`  -  string，
  
  * `fee`  -  string，
  
  * `memo`  -  string，
  
  * `msgs` msg结构json字符串
  
    * 示例：
  
      ```json
      [
        {
          "type": "cosmos-sdk/MsgSend",
          "value": {
            "amount": [
            ],
            "from_address": "cosmos1ajz9y0x3wekez7tz2td2j6l2dftn28v26dd992",
            "to_address": "cosmos1yeckxz7tapz34kjwnjxvmxzurerquhtrmxmuxt"
          }
        }
      ]
      ```
  
  * `sequence`  -  string，

#### Result

* `txData` string，带签名值的交易数据
* `txHash` string，交易数据hash

###  2. 获取地址

获取指定网络和路径的地址

```javascript
const result = await Connect.getCosmosAddress(params);	
```

### Param

* `path` - string，path路径

### Result

* `address` - string，地址

### 4. 注册公钥

在硬件钱包菜单我的钱包中显示指定路径的地址

```javascript
const result = await Connect.registerCosmosAddress(params);	
```

### Param

* `path` - string，path路径

### Result

* `address` - string，地址



* `network` - string，网络类型

* `path` - string，path路径

### Result

* `address` - string，地址

