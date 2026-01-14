import { connectDatabase } from "../../config/db.config.js";

const db = await connectDatabase();

export const addCategoryService = async () => {
  return db.execute(`
        ALTER TABLE products ADD COLUMN category VARCHAR(50);
        `);
};

export const removeCategoryService = async () => {
  return db.execute(`
        ALTER TABLE products drop COLUMN category;
        `);
};

export const addNotNullService = async () => {
  return db.execute(`
        ALTER TABLE products MODIFY product_name TEXT NOT NULL;
    `);
};

export const addProductsService = async (data) => {
  return db.execute(`
        INSERT INTO products (product_name, price, stock_quantity) 
        VALUES (
            "Milk", 15.00, 50
        ), (
           "Bread", 10.00, 30  
        ), (
            "Eggs", 20.00, 40
        );
    `);
};

export const updateProductService = async () => {
  return db.execute(`
        UPDATE products SET price = 25 WHERE product_name = "Bread";
    `);
};

export const deleteProductService = async () => {
  return db.execute(`
        DELETE FROM products WHERE product_name = "Eggs";
    `);
};

export const getProductHighStockService = async () => {
  return db.execute(`
        SELECT * FROM products WHERE stock_quantity = (SELECT MAX(stock_quantity) FROM products);
    `);
};

export const getProductNeverBeenSoldService = async () => {
  return db.execute(`
        SELECT * FROM products WHERE product_id NOT IN (SELECT product_id FROM sales);
    `);
};
