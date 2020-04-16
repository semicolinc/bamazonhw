drop database if exists bamazon;
create database bamazon;

use bamazon;

create table products(
	item_id int	not	null auto_increment,
    primary key(item_id),
    product_name varchar(100) not null,
    department_name varchar(100) not null,
    price int default 0,
    stock_quantity int default 0
);

insert into products (product_name, department_name, price, stock_quantity)
values ("fish and chips", "western food", 10, 50)
		,("steak", "western food", 25, 15)
        ,("egg fried rice", "asian food", 1, 100)
        ,("fried liver", "asian food", 5, 10)
        ,("honey glazed duck", "western food", 20, 30)
        ,("hand-roll sushi", "asian food", 5, 50)
        ,("spam musubi", "asian food", 3, 55)
        ,("roasted oolong ice-cream", "asian food", 7, 40)
        ,("thai pineapple red curry", "asian food", 15, 30)
        ,("beef wellington", "western food", 25, 5)
        ,("scallop ceviche", "western food", 15, 40)
        ,("golden truffle pizza", "western food", 100, 5)
        ,("aged shark fin soup", "asian food", 150, 5);
        
select * from products;