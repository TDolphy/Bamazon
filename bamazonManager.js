var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Dolphy25",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
});


var start = function() {
  inquirer.prompt({
    name: "startChoice",
    type: "rawlist",
    message: "Choose from menu options: ",
    choices: ["View Products", "View Low Inventory", "Add Inventory", "Add New Item"]
  }).then(function(answer) {

    if (answer.postOrBid.toUpperCase() === "POST") {
      postAuction();
    }
    else {
      bidAuction();
    }
  });
};




start();