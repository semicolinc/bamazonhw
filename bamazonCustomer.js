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
    connect.query('select * from products', function (err, ans){
        if (err) throw err;

        var displayTable = new Table({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity Stored']
        });
        for (let i = 0; i < ans.length; i++) {
            displayTable.push([ans[i].item_id, ans[i].product_name, ans[i].department_name, ans[i].price, ans[i].stock_quantity]);
        }

        console.log(displayTable.toString());
        purchaseItems(ans);
    })
}

//created qualifiers to define parameters for orders
function purchaseItems(ans) {
    inquirer.prompt([
        {
            name: "choice",
            type: "input",
            message: "ID of desired product for purchase: "
        }
    ]).then(function (output){
        var possible = false;
        for (let j = 0; j < ans.length; j++){
            if (ans[j].item_id == output.choice) {
                var possible = true;
                let user_item = output.choice;
                let uitem_id = j;
                inquirer.prompt({
                    name: "quant",
                    type: "input",
                    message: "Enter quantity of units desired: "
                }).then(function (q){
                    if ((ans[uitem_id].stock_quantity - q.quant) >= 0) {
                        connect.query("update products set stock_quantity='" + (ans[uitem_id].stock_quantity - q.quant) + "'where item_id='" + user_item + "'", function (res){
                            console.log("Nom nom! You have purchased " + output.quant + " items with id: " + ans[uitem_id].product_name + ". Remaining stock: " + ans[uitem_id].stock_quantity);
                            // looping after set time.
                            setTimeout(display, 20000);
                        })
                    }
                    else {
                        console.log("Not enough inventory for request.");
                        purchaseItems(ans);
                    }
                })
            }
        }
        //if no id matches one in the existing database
        if (possible == false) {
            console.log("ID number does not exist.")
            purchaseItems(ans);
        }
    }).catch (function (error) {
        console.log(error);
    });
}

