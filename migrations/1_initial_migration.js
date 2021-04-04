const CoinsambaToken = artifacts.require("CoinsambaToken");

module.exports = function (deployer) {
  deployer.deploy(CoinsambaToken);
};
