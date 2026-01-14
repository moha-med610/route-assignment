import {
  addSupplierService,
  ChangeContactNumberService,
  findSupplierService,
} from "./suppliers.service.js";

export const ChangeContactNumberController = async (req, res) => {
  await ChangeContactNumberService();
  return res.status(202).json({
    msg: "Contact Number Changed Successfully",
  });
};

export const addSupplierController = async (req, res) => {
  await addSupplierService();
  return res.status(201).json({
    msg: "Supplier Added Successfully",
  });
};

export const findSupplierController = async (req, res) => {
  const [supplier] = await findSupplierService();
  return res.status(200).json({
    msg: "Supplier Founded Successfully",
    supplier,
  });
};
