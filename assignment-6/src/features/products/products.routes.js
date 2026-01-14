import { Router } from "express";
import {
  addCategoryController,
  addNotNullController,
  addProductsController,
  deleteProductController,
  getProductHighStockController,
  getProductNeverBeenSoldController,
  removeCategoryController,
  updateProductController,
} from "./products.controller.js";

const router = Router();

const routes = {
  addCategory: "/add-category",
  removeCategory: "/remove-category",
  notNull: "/add-not-null",
  addProduct: "/add-product",
  updateProducts: "/update-product",
  deleteProduct: "/delete-product",
  productHighStock: "/product-high-stock",
  productNeverSold: "/product-never-sold",
};

// Add and remove Category
router.get(routes.addCategory, addCategoryController);
router.get(routes.removeCategory, removeCategoryController);

// Add not null on productName
router.get(routes.notNull, addNotNullController);

// Add Products
router.get(routes.addProduct, addProductsController);

// Update Product
router.get(routes.updateProducts, updateProductController);

// Delete Product
router.get(routes.deleteProduct, deleteProductController);

// Get Product High Stock
router.get(routes.productHighStock, getProductHighStockController);

// Get Product Never Sold
router.get(routes.productNeverSold, getProductNeverBeenSoldController);

export default router;
