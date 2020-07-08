## BTC

### 1. 交易签名

 BTC 交易签名

```javascript
const result = await Connect.signBtcTransaction(params);	
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



### Example



### 2. SegWit 交易签名

BTC带隔离见证的交易签名

```javascript
const result = await Connect.signBtcSegWitTransaction(params);	
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

#### Result

* witnessTxData，string，带签名值的交易数据
* wtxHash，string，带签名值的交易数据hash
* txHash	，string，交易数据hash

###  5. 获取 XPub 

获取指定网络和路径的xpub编码

```javascript
const result = await Connect.getXPub(params);	
```

### Param

* network，string，网络类型

* path，string，path路径
* xpub，string，xpub数据

### Result

* xpub，string，xpub数据

###  6. 获取BTC地址

获取指定网络和路径的xpub编码

```javascript
const result = await Connect.getAddress(params);	
```

### Param

* network，string，网络类型

* path，string，path路径
* isSegWit bool 是否隔离见证地址

### Result

* address，string，地址

### 7. 注册BTC地址

在硬件钱包菜单我的钱包中显示指定路径的地址

```javascript
const result = await Connect.registerAddress(params);	
```

### Param

* network，string，网络类型

* path，string，path路径
* isSegWit bool 是否隔离见证地址

### Result

* address，string，地址

