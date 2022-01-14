require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_RINKEBY_URL="J1NHzGP51AgMhhcji-0mM_O52CJYW3V1";
const RINKEBY_PRIVATE_KEY="31dd6922bc450fb9d110b2e905974565fc7c2e63c2e8cfee3b382e50dc917f20";
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_RINKEBY_URL}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
