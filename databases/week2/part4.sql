CREATE SCHEMA `hw2_part4` ;

CREATE TABLE customer (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  phone INT NULL,
  PRIMARY KEY (id));


  CREATE TABLE product (
  id INT UNSIGNED NOT NULL,
  name VARCHAR(100),
  PRIMARY KEY (id));
  

 CREATE TABLE `order` (
  id INT UNSIGNED NOT NULL,
  customer_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
 FOREIGN KEY (customer_id)
    REFERENCES customer (id),
 FOREIGN KEY (product_id)
    REFERENCES product (id)
    ); 

  SET sql_mode = '';
  CREATE TABLE delivery (
  order_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  address VARCHAR(200) NULL,
  deliverytime TIMESTAMP,
 PRIMARY KEY (order_id, product_id),  
 FOREIGN KEY (order_id)
    REFERENCES `order` (id),
 FOREIGN KEY (product_id)
    REFERENCES product (id)
    );