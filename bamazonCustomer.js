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

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  	console.log("Available For Purchase:")
  	for (i = 0; i < res.length; i++){
  		console.log(res[i].item_id + " " + res[i].product_name + " |" + " Department: "
  		+ res[i].department_name + " |" +" Price: " + res[i].price + " |" +" Inventory: "+ res[i].stock_quantity);
  	}

});

var run = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
      console.log("");
      inquirer.prompt([{
        name: "selectedid",
        type: "input",
        message: "What is the ID of the item you would like to buy?"
      }]).then(function(answer){
      connection.query("SELECT * FROM products WHERE ?", {item_id: answer.selectedid},
            function(err, res) {
              for (i=0; i < res.length; i++){
              console.log(res[i].item_id + " " + res[i].product_name + "|" + " Department: "
            + res[i].department_name + "|" +" Price: " + res[i].price + "|" +" Stock Quantity: "+ res[i].stock_quantity);
              }
            inquirer.prompt([{
        name: "units",
        type: "input",
        message: "How many units would you like to buy?"
      }]).then(function(howmany){
        if (howmany.units < res[0].stock_quantity) {
          var newAmount = res[0].stock_quantity - howmany.units;
          connection.query("UPDATE products SET ? WHERE ?", [{
            stock_quantity: newAmount
          },{
            item_id:answer.selectedid
          }], function(err, res) {});
          console.log("You purchased " + howmany.units + " " + res[0].product_name);
          console.log("There are " + newAmount + " left.")
        }
        else{
          console.log("Insufficient Quantity!")
        }

      });
    });
  });
});
}
run();