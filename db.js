/*var mysql = require('mysql');
//var names=["Abhishek","Aravind","Mithul","Samanth","Manjunath"];
var name=""
var names=[]
var fs = require('fs');
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
        console.log(names);
        call_deploy();
    });

    con.end(function(err){});
});
//var names=["abc","def","hola"];
function call_deploy(){
    for (var i=0;i<names.length;i++)
        name+=names[i]+"/";
    console.log(name);
    console.log("db");
    //export default name;
    //module.exports=name;

    fs.writeFile('names.txt', name, function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Write operation complete.');
});

}

*/

var mysql = require('mysql');
var fs = require('fs');
var names=[]
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
        console.log(names);
        call_deploy();
    });
    con.end(function(err){});
});

function call_deploy(){
    var name=""
    for (var i=0;i<names.length;i++)
        name+=names[i]+"/";
    console.log(name);
    var content="var Election = artifacts.require(\"./Election.sol\");"+
                "\nvar name=\""+name+"\""+
                "\nmodule.exports = function(deployer) {\n"+
                "\tdeployer.deploy(Election,name);\n};"
    migrate(content);
}

function migrate(content){
    fs.writeFile('migrations/2_deploy_contracts.js', content, function (err) {
        if (err) throw err;
    });
}