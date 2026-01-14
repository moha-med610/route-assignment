import { connectDatabase } from "../../config/db.config.js";

const db = await connectDatabase();

export const addRecordForSaleService = async () => {
  return db.execute(`
        INSERT INTO sales (product_id, quantity_sold, sale_date) VALUES
        (1, 2, "2025-05-20");
    `);
};

export const retrieveTotalQuantitySoldService = async () => {
  return db.execute(`
        SELECT 
            p.product_name,
            p.price,
            COALESCE(SUM(s.quantity_sold), 0) AS total_quantity_sold
        FROM 
            products p
        LEFT JOIN 
            sales s 
        ON 
            p.product_id = s.product_id
        GROUP BY 
            p.product_id, p.product_name, p.price;
    `);
};

export const getAllSalesService = async () => {
  return db.execute(`
        SELECT 
            s.sale_date, 
            p.product_name
         FROM
            sales AS s
        LEFT JOIN 
            products AS p
        ON
            s.product_id = p.product_id;

    `);
};
