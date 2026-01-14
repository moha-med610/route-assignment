import { Router } from "express";
import {
  addSupplierController,
  ChangeContactNumberController,
  findSupplierController,
} from "./suppliers.controller.js";

const router = Router();

const routes = {
  changeContactNumber: "/change-contact-number-type",
  addSupplier: "/add-supplier",
  findSupplier: "/find-supplier",
};

// Change Contact Number
router.get(routes.changeContactNumber, ChangeContactNumberController);

// Add Supplier
router.get(routes.addSupplier, addSupplierController);

// Find Supplier
router.get(routes.findSupplier, findSupplierController);

export default router;
