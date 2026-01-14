export const productTable = async (db) => {
  await db.execute(`
        CREATE TABLE IF NOT EXISTS 
            products(
	            product_id INT PRIMARY KEY AUTO_INCREMENT,
                product_name TEXT ,
                price DECIMAL ,
                stock_quantity INT , 
                supplier_id INT 
            );
    `);
};
