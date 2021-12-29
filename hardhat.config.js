require("@nomiclabs/hardhat-waffle");
require('./helpers/faucet')
require('dotenv').config()

//Localhost setup
const localhost = {
  hardhat: {
    chainId: 1337,
  }
}

//Ropsten setup
const { ALCHEMY_API_KEY, ROPSTEN_PRIVATE_KEY } = process.env;
const ropsten = {
  ropsten: {
    url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    accounts: [`${ROPSTEN_PRIVATE_KEY}`]
  }
}

const network = process.env.NETWORK_ENV === 'ropsten' ? ropsten : localhost;

module.exports = {
  solidity: "0.8.4",
  //solidity: "0.7.3",
  networks: network
};
