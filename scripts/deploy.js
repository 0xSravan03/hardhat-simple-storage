const { ethers, run, network } = require("hardhat")
require("dotenv").config()

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying Contract......")
    const contract = await SimpleStorageFactory.deploy()
    await contract.deployed()
    console.log(`Contract Address: ${contract.address}`)

    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await contract.deployTransaction.wait(6)
        await verify(contract.address, [])
    }

    // Interacting with contract
    const currentValue = await contract.retrieve()
    console.log(`Current favorite Number: ${currentValue}`)

    const txResponse = await contract.store("300")
    await txResponse.wait(1)
    const updatedValue = await contract.retrieve()
    console.log(`Updated favorite Number: ${updatedValue}`)
}

// contract auto verification (works in etherscan)
async function verify(contractAddress, args) {
    console.log("Verifying Contract.....")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified")
        } else {
            console.log(error)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
