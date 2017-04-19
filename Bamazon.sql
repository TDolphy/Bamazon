CREATE database Bamazon;

USE Bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(6,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);
  
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pie","Food", 3.50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheese","Food", 5.75, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("White Socks","Retail", 2.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Socks","Retail", 4.50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Goggles","Retail", 10.50, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OLED TV","Electronics", 350.85, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo","Health", 4.99, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wine","Alcohol", 15.50, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Advil","Retail", 5.50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken","Food", 7.50, 6);