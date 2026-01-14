import { productTable } from "../models/products.models.js";
import { salesTable } from "../models/sales.models.js";
import { suppliersTable } from "../models/suppliers.models.js";
import { connectDatabase } from "./db.config.js";

export const initTables = async () => {
  try {
    const db = await connectDatabase();
    console.log("Database Connected Successfully");

    await productTable(db);
    await salesTable(db);
    await suppliersTable(db);
  } catch (error) {
    console.log(`Database Error: ${error}`);
  }
};
