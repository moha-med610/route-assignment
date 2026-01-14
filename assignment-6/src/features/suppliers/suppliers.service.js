import { connectDatabase } from "../../config/db.config.js";

const db = await connectDatabase();

export const ChangeContactNumberService = async () => {
  return db.execute(`
        ALTER TABLE suppliers MODIFY COLUMN contact_number VARCHAR(15);
    `);
};

export const addSupplierService = async () => {
  return db.execute(`
        INSERT INTO suppliers(supplier_name, contact_number) VALUES 
        ("Fresh Foods", "01001234567")
    `);
};

export const findSupplierService = async () => {
  return db.execute(`
        SELECT * FROM suppliers WHERE supplier_name LIKE "f%";
    `);
};
