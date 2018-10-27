var Salaries = artifacts.require("./Salaries.sol");
var SalariesSimple = artifacts.require("./SalariesSimple.sol");

var fs = require('fs')

let backup_location = '../client/src/'

module.exports = function(deployer, network, accounts) {

  if (network == "development") {

      deployer.deploy(Salaries, {from: accounts[0]}).then(function() {
          deployer.deploy(SalariesSimple, {from: accounts[0]}).then(function() {

          var addresses = Salaries.address + "\n"
                        + SalariesSimple.address

        //  backupAddresses(backup_location, 'addresses.txt', addresses.toString())

      })
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
