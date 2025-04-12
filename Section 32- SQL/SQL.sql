-- Create a table 
CREATE TABLE products (
  id INT NOT NULL,--id can't ne NULL
  name STRING,
  price MONEY,
  PRIMARY KEY (id)
  );

-- Insert records
INSERT INTO products values (1, 'Pen', 1.20) --insert in each column
INSERT INTO products (id, name, money) values (1, 'Pen', 1.20) -- insert in selected columns

--Read data from table
SELECT name, price FROM products
SELECT DISTINCT name FROM products
SELECT * FROM products where id = 1

