# Hardhat-Simple-Storage

Contract Address(Goerli Testnet) : 0xEc27d0c4dcDd81C7e3AdaffEDb9535eA165cE294

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Nodejs](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/getting-started/install) or `npm`

# Usage

Deploy:

```
yarn hardhat run scripts/deploy.js
```

Deploy to Goerli Testnet: 

```
yarn hardhat run scripts/deploy.js --network goerli
```

## Testing

```
yarn hardhat test
```

### Test Coverage

```
yarn hardhat coverage
```

## Estimate gas

To estimate how much gas things cost by running:

```
yarn hardhat test
```

And it will added to a output file called `gas-report.txt`

## Learning Outcome

```
1. Learnt to configure & deploy contract using hardhat(both local and testnet)
2. Learnt to write task
3. Learnt to write test for contract
4. Estimate gas usage using hardhat-gas-reporter
5. Leant to use solidity-coverage
```
