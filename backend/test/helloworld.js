const HelloWorldContract = artifacts.require('./HelloWorld.sol')

contract('HelloWorldContract', accounts => {
    const myAccount = accounts[0]

    it("should assert true", async () => {
        const contract = await HelloWorldContract.deployed()
        const result = await contract.receiveEthers.call({
            from: myAccount,
            value: 5,
        })
        console.log(result[0].toNumber(),result[1])
        assert.isTrue(true)
    })
})