var Web3 = require('web3');

var salariesAbi = require('./contracts/Salaries.js')

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

async function addEmployee(pubKey, address, name, role) {

  if (pubKey == undefined)
    {console.log("Please call with a correct key"); return}

  var addresses = getContractsAddresses(addressesPath)

  var salaries = new web3.eth.Contract(salariesAbi.salaries.abi, addresses[0].toString());

  await salaries.methods.addEmployee(address, name, role).send({from: pubKey.toString()}, function(err, result) {

    if (err != undefined) {console.log(err); return}

    console.log("You added a new employee")

  });

}

async function removeEmployee(pubKey, address) {

  if (pubKey == undefined)
    {console.log("Please call with a correct key"); return}

  var addresses = getContractsAddresses(addressesPath)

  var salaries = new web3.eth.Contract(salariesAbi.salaries.abi, addresses[0].toString());

  await salaries.methods.removeEmployee(address).send({from: pubKey.toString()}, function(err, result) {

    if (err != undefined) {console.log(err); return}

    console.log("You removed an employee")

  });

}

async function startSalary(pubKey, employee, startBlock, closeBlock, price, interval, msgValue) {

  if (pubKey == undefined)
    {console.log("Please call with a correct key"); return}

  var addresses = getContractsAddresses(addressesPath)

  var salaries = new web3.eth.Contract(salariesAbi.salaries.abi, addresses[0].toString());

  await salaries.methods.startSalary(employee, startBlock, closeBlock, price, interval)
    .send({from: pubKey.toString(), value: msgValue}, function(err, result) {

    if (err != undefined) {console.log(err); return}

    console.log("You set a salary for " + employee)

  });

}

async function stopSalary(pubKey, employee) {

  if (pubKey == undefined)
    {console.log("Please call with a correct key"); return}

  var addresses = getContractsAddresses(addressesPath)

  var salaries = new web3.eth.Contract(salariesAbi.salaries.abi, addresses[0].toString());

  await salaries.methods.stopSalary(employee)
    .send({from: pubKey.toString()}, function(err, result) {

    if (err != undefined) {console.log(err); return}

    console.log("You stopped a salary for " + employee)

  });

}

async function redeem(pubKey, employee) {

  if (pubKey == undefined)
    {console.log("Please call with a correct key"); return}

  var addresses = getContractsAddresses(addressesPath)

  var salaries = new web3.eth.Contract(salariesAbi.salaries.abi, addresses[0].toString());

  await salaries.methods.redeem(employee)
    .send({from: pubKey.toString()}, function(err, result) {

    if (err != undefined) {console.log(err); return}

    console.log("You redeemed a salary for " + employee)

  });

}

async function currentBilling(employee) {

  var addresses = getContractsAddresses(addressesPath)

  var salaries = new web3.eth.Contract(salariesAbi.salaries.abi, addresses[0].toString());

  var x

  await salaries.methods.currentBilling(employee).call(function(err, result) {

    if (err != undefined) {x = undefined; console.log(err)}

    else x = result

  });

  return x

}

async function stateOf(employee) {

  var addresses = getContractsAddresses(addressesPath)

  var salaries = new web3.eth.Contract(salariesAbi.salaries.abi, addresses[0].toString());

  var x

  await salaries.methods.stateOf(employee).call(function(err, result) {

    if (err != undefined) {x = undefined; console.log(err)}

    else x = result

  });

  return x

}

module.exports = {

    web3,
    getContractsAddresses,
    stateOf,
    currentBilling,
    redeem,
    stopSalary,
    startSalary,
    removeEmployee,
    addEmployee

}
