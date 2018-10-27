var Web3 = require('web3');

var simpleStorageAbi = require('./contracts/SimpleStorage.js')

var fs = require('fs'), readline = require('readline');

var utils = require('ethereumjs-util')
var BigNumber = require('bignumber.js');

var addressesPath = './addresses.txt'

var web3

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

function getContractsAddresses(filePath) {

  var lines = []

  fs.readFileSync(filePath).toString().split('\n').forEach(function (line) { lines.push(line) })

  return lines

}

async function set(pubKey, value) {

  if (pubKey == undefined)
    {console.log("Please call with a correct key"); return}

  var addresses = getContractsAddresses(addressesPath)

  var storageContract = new web3.eth.Contract(simpleStorageAbi.simpleStorage.abi, addresses[0].toString());

  await storageContract.methods.set(value).send({from: pubKey.toString()}, function(err, result) {

    if (err != undefined) {console.log(err); return}

    console.log("You set the new value " + value)

  });

}

async function getValue() {

  var addresses = getContractsAddresses(addressesPath)

  var storageContract = new web3.eth.Contract(simpleStorageAbi.simpleStorage.abi, addresses[0].toString());

  var x

  await storageContract.methods.get().call(function(err, result) {

    if (err != undefined) {x = undefined; console.log(err)}

    else x = result

  });

  return x

}

module.exports = {

    web3,
    getContractsAddresses,
    set,
    getValue

}
