const Salaries = artifacts.require("./Salaries.sol");

contract("Salaries", accounts => {

	let salariesInstance;

	beforeEach(async () => {

			salariesInstance = await Salaries.new({from: accounts[0]})

	})

	it("Should add an employee account", async () => {

		salariesInstance = await Salaries.deployed();

		await salariesInstance.addEmployee(accounts[1], "Alicia Drake", "Lead Engineer");

		const employee = await salariesInstance.employees(accounts[1]);

		assert.equal(employee[0], "Alicia Drake", "The employee's name Alicia Drake was not stored.");
		assert.equal(employee[1], "Lead Engineer", "The employee's role Lead Engineer was not stored.");

	});

	//WARNING: every time we checkpoint in tests, a block is skipped; so in the endm in tests, the employee won't get all the money

	it("Simulate salary accumulation", async() => {

		const interval = "10"

		await salariesInstance.addEmployee(accounts[1], "Alicia Drake", "Lead Engineer")

		await salariesInstance.startSalary(
			accounts[1],
			web3.eth.blockNumber + 1,
			web3.eth.blockNumber + 11,
			web3.toWei("0.1", "ether"),
			interval,
			{
				from: accounts[0],
				value: web3.toWei("1", "ether")
			}
		)

		const currentBilling = await salariesInstance.currentBilling(accounts[1])

		const rate = await salariesInstance.getRate(accounts[1])

		for (var i = 0; i < 13; i++) {

			console.log("Delta is " + await salariesInstance.blockDelta(accounts[1]))

			console.log("Current billing " + await salariesInstance.currentBilling(accounts[1]))

			increaseBlockHeight(1)

		}

	});

	it("Simulate salary checkpointing", async() => {

		const interval = "10"

		await salariesInstance.addEmployee(accounts[1], "Alicia Drake", "Lead Engineer")

		await salariesInstance.startSalary(
			accounts[1],
			web3.eth.blockNumber + 1,
			web3.eth.blockNumber + 11,
			web3.toWei("0.1", "ether"),
			interval,
			{
				from: accounts[0],
				value: web3.toWei("1", "ether")
			}
		)

		increaseBlockHeight(5)

		console.log("Delta before checkpoint is " + await salariesInstance.blockDelta(accounts[1]))

		var currentBilling = await salariesInstance.currentBilling(accounts[1])

		assert.equal(currentBilling.toString(),  web3.toWei("0.5", "ether"))

		await salariesInstance.checkpoint(accounts[1], {from: accounts[1]})

		console.log("Delta after checkpoint is " + await salariesInstance.blockDelta(accounts[1]))

		currentBilling = await salariesInstance.currentBilling(accounts[1])

		assert.equal(currentBilling.toString(),  0)

		console.log("\n")

		for (var i = 0; i < 7; i++) {

			console.log("Delta is " + await salariesInstance.blockDelta(accounts[1]))

			console.log("Current billing " + await salariesInstance.currentBilling(accounts[1]))

			increaseBlockHeight(1)

		}

	})

});

const increaseBlockHeight = async count => {
	for (let i = 0; i < count; ++i) {
		await web3.eth.sendTransaction({
			from: web3.eth.accounts[0],
			to: web3.eth.accounts[9],
			value: "1000"
		})
	}
};
