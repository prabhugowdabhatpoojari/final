var Election = artifacts.require("./Election.sol");
var name="Ram/Mithul/Suma/Ajith/Prathap/"
module.exports = function(deployer) {
	deployer.deploy(Election,name);
};