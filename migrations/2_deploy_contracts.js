var Election = artifacts.require("./Election.sol");

/*var mysql = require('mysql');
var names=["Abhishek","Aravind","Mithul","Samanth","Manjunath"];
var name=""
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "electionsystem"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT FirstName FROM candidates", function (err, result, fields) {
        if (err) throw err;
  	    for(var i=0;i<result.length;i++)
  		  names.push(result[i].FirstName);
        //console.log(names);
        //call_deploy();
    });

    con.end(function(err){});
});
//var names=["abc","def","hola"];
function call_deploy(){
    for (var i=0;i<names.length;i++)
        name+=names[i]+"/";
    
}
//setTimeout(call_deploy,5000);*/
//call_deploy();
module.exports = function(deployer) {
        deployer.deploy(Election);
    };
 //console.log(name);