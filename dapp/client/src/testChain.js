var chain = require('./chainIntegration')

var web3 = chain.web3

var pubKey = '0x6259ac218eed8caf47e26246d7e13c1df70165f2'

chain.addEmployee(pubKey, '0xcecc7c956a1707b22b81179ae67018f7f8ff57f7', "Ethereum Forever", "Chief Happiness Officer")
  .then(async function() {

  })
