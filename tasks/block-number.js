// Get current block number
const { task } = require("hardhat/config")

task("block-number", "Print the current block number").setAction(
    async (taskArg, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current Block Number: ${blockNumber}`)
    }
)

module.exports = {}
