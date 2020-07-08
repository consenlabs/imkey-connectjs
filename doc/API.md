## BTC

### 1. 交易签名

 BTC 交易签名

```javascript
const result = await Connect.signTransaction(params);	
```

#### Params

* `amount` number，交易金额
* `fee` number，矿工费
* `to` string，收款地址
* `amount` number，交易金额
* `fee` number 矿工费
* `changeAddressIndex` number， 找零地址索引
* `unspents` Utxo， 未消耗UTXO列表
* `extraData` string，op return数据
* `network` string，网络类型
* `pathPrefix` string，path前缀

#### Result

* `txData` string，带签名值的交易数据
* txHash string，交易数据hash

### Error



### 2. SegWit 交易签名

BTC带隔离见证的交易签名

```javascript
const result = await Connect.signSegWitTransaction(params);	
```

#### Param

* to，string， 收款地址
* amount，int64， 交易金额
* fee，int64， 旷工费
* changeAddressIndex，uint32， 找零地址索引
* unspents，Utxo， 未消耗UTXO列表
* extraData，string，op return数据
* network，string，网络类型
* pathPrefix，string，path前缀

#### Result

* witnessTxData，string，带签名值的交易数据
* wtxHash，string，带签名值的交易数据hash
* txHash	，string，交易数据hash

### 3.USDT 交易签名

USDT 交易签名

```javascript
const result = await Connect.signUsdtTransaction(params);	
```

#### Param

* to，string， 收款地址
* amount，int64， 交易金额
* fee，int64， 旷工费
* changeAddressIndex，uint32， 找零地址索引
* unspents，Utxo， 未消耗UTXO列表
* extraData，string，op return数据
* propertyId，string，属性ID
* network，string，网络类型
* pathPrefix，string，path前缀

#### Return

* txData，string，带签名值的交易数据
* txHash	，string，交易数据hash

### 4. USDT SegWit 交易签名

带隔离见证的USDT交易签名
```javascript
const result = await Connect.signUsdtSegWitTransaction(params);	
```

#### Param

* to，string， 收款地址
* amount，int64， 交易金额
* fee，int64， 旷工费
* changeAddressIndex，uint32， 找零地址索引
* unspents，Utxo， 未消耗UTXO列表
* extraData，string，op return数据
* propertyId，string，属性ID
* network，string，网络类型
* pathPrefix，string，path前缀

#### Return

* witnessTxData，string，带签名值的交易数据
* wtxHash，string，带签名值的交易数据hash
* txHash	，string，交易数据hash