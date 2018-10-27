'use strict'
/* eslint-disable no-console */

var chain = require('./chainIntegration')

var web3 = chain.web3

var pubKey = '0x6259ac218eed8caf47e26246d7e13c1df70165f2'

chain.set(pubKey, 10).then(function() {

    chain.getValue().then(function(res) {

        console.log(res)

    })

})
