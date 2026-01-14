import {
  addRecordForSaleService,
  getAllSalesService,
  retrieveTotalQuantitySoldService,
} from "./sales.service.js";

export const addRecordForSaleController = async (req, res) => {
  await addRecordForSaleService();
  return res.status(200).json({
    msg: "Record Added Successfully",
  });
};

export const retrieveTotalQuantitySoldController = async (req, res) => {
  const [total] = await retrieveTotalQuantitySoldService();
  return res.status(200).json({
    msg: "",
    total,
  });
};

export const getAllSalesController = async (req, res) => {
  const [sales] = await getAllSalesService();
  return res.status(200).json({
    msg: "Fetched All Sale Successfully",
    sales,
  });
};
