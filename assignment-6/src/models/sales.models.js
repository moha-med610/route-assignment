export const salesTable = async (db) => {
  await db.execute(`
        CREATE TABLE IF NOT EXISTS 
            sales(
                sale_id INT PRIMARY KEY AUTO_INCREMENT,
                product_id INT ,
                quantity_sold INT ,
                sale_date DATE 
            );
    `);
};
