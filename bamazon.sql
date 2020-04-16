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
values ("fish and chips", "western food", 10, 100)
		,("steak", "western food", 25, 70)
        ,("egg fried rice", "asian food", 1, 100)
        ,("fried liver", "asian food", 5, 140)
        ,("honey glazed duck", "western food", 20, 130)
        ,("hand-roll sushi", "asian food", 5, 150)
        ,("spam musubi", "asian food", 3, 155)
        ,("roasted oolong ice-cream", "asian food", 7, 140)
        ,("thai pineapple red curry", "asian food", 15, 130)
        ,("beef wellington", "western food", 25, 105)
        ,("scallop ceviche", "western food", 15, 140)
        ,("golden truffle pizza", "western food", 100, 55)
        ,("aged shark fin soup", "asian food", 150, 65);
        
select * from products;