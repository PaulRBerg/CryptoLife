var SimpleStorage = artifacts.require("./SimpleStorage.sol");

var fs = require('fs')

let backup_location = '../client/src/'

module.exports = function(deployer, network, accounts) {

  if (network == "development") {

    deployer.deploy(SimpleStorage, {from: accounts[0]}).then(function() {

        var addresses = SimpleStorage.address

        console.log("sadfhg")

      //  backupAddresses(backup_location, 'addresses.txt', addresses.toString())

    })

  } else if (network == "kovan") {



  }

  function backupAddresses(path, name, content) {

      var buffered = new Buffer(content);

      fs.open(path + name, 'w', function(err, fd) {
        if (err) {
            throw 'could not open file: ' + err;
        }

      fs.write(fd, buffered, 0, buffered, null, function(err) {
          if (err) throw 'error writing file: ' + err;
          fs.close(fd, function() {});
      });

      });
  }

};
