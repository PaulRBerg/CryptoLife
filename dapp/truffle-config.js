const dotenv = require("dotenv");
dotenv.config();

//const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env.MNEMONIC;

module.exports = {
	networks: {
		development: {
			host: "localhost",
			port: 8545,
			network_id: "*",
      from: "0x6259ac218eed8caf47e26246d7e13c1df70165f2",
      gas: 6000000
		},
		kovan: {
			provider: () => { return new HDWalletProvider(mnemonic, "https://kovan.infura.io/" + process.env.INFURA_API_KEY); },
			network_id: 42,
			gas: 7000000
		},
		rinkeby: {
			provider: () => { return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + process.env.INFURA_API_KEY); },
			network_id: 4,
			gas: 4700000
		},
	}


};
