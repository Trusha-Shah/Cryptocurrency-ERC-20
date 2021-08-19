var TRHToken = artifacts.require("./TRHToken.sol");
var TRHTokenSale = artifacts.require("./TRHTokenSale.sol");

module.exports = function(deployer) {
	deployer.deploy(TRHToken, 1000000).then(function(){
		var tokenPrice = 1000000000000000;
		return deployer.deploy(TRHTokenSale, TRHToken.address, tokenPrice);
	});
};