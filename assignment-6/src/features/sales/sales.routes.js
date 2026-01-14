import { Router } from "express";
import {
  addRecordForSaleController,
  getAllSalesController,
  retrieveTotalQuantitySoldController,
} from "./sales.controller.js";

const router = Router();

const routes = {
  addRecordSale: "/add-record",
  retrieveTotalQuantity: "/total-sale",
  getAllSale: "/get-all-sale",
};
// Add Record Sale
router.get(routes.addRecordSale, addRecordForSaleController);

// Retrieve Total Quantity
router.get(routes.retrieveTotalQuantity, retrieveTotalQuantitySoldController);

// Get All Sale
router.get(routes.getAllSale, getAllSalesController);

export default router;
