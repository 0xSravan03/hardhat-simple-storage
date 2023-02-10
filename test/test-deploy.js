const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let ContractFactory, contract

    beforeEach(async function () {
        ContractFactory = await ethers.getContractFactory("SimpleStorage")
        contract = await ContractFactory.deploy()
        await contract.deployed()
    })

    it("Initial favorite number should be zero", async function () {
        const initialFavNumber = await contract.retrieve() //BigNumber result
        const expectedValue = "0"

        assert.equal(initialFavNumber.toString(), expectedValue)
        // expect(initialFavNumber.toString()).to.equal(expectedValue)
    })

    it("Should update when call store", async function () {
        const newValue = "100"
        const tx = await contract.store(newValue)
        await tx.wait(1)
        const updatedValue = await contract.retrieve()

        assert.equal(updatedValue.toString(), newValue)
    })
})
