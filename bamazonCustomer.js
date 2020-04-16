// packages
var mysql = require("mysql")
var Table = require('cli-table')
var inquirer = require("inquirer")

// connection to server / db
var connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "orchanine",
    database: "bamazon"
});

connect.connect(function(err) {
    if (err) throw err;
    display();
});

// program
var display = function() {
    connect.query('select * from products', function (err, res){
        if (err) throw err;

        var displayTable = new Table({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity Stored']
        });
        for (var i = 0; i < res.length; i++) {
            displayTable.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }

        console.log(displayTable.toString());
    })
}