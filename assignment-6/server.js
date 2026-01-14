import express from "express";
import { initTables } from "./src/config/initTable.config.js";
import productsRouts from "./src/features/products/products.routes.js";
import suppliersRoutes from "./src/features/suppliers/suppliers.routes.js";
import salesRoutes from "./src/features/sales/sales.routes.js";

// query permissions
/**
 * // ---- Create User ----
 * CREATE USER 'store_manager'@'localhost' IDENTIFIED BY '';
 *
 * // ---- Give Them SELECT, INSERT, UPDATE Permissions ----
 * GRANT
 *  SELECT,
 *  INSERT,
 *  UPDATE,
 *  DELETE
 * ON
 *  route.*
 * TO
 *  'store_manager'@'localhost';
 *
 *
 * // ---- Revoke UPDATE permission ----
 * REVOKE UPDATE
 * ON
 *  route.*
 * FROM
 *  'store_manager'@'localhost';
 *
 * // ---- Give Them DELETE Permissions ----
 * GRANT
 *  DELETE
 * ON
 *  route.sales
 * TO
 *  'store_manager'@'localhost';
 *
 */

export const server = async (app, port) => {
  app.use(express.json());

  app.use("/products", productsRouts);
  app.use("/suppliers", suppliersRoutes);
  app.use("/sales", salesRoutes);

  (async () => {
    await initTables();
    app.listen(port, async () => {
      console.log(`Server is Running on http://localhost:${port}`);
    });
  })();
};
