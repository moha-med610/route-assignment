import {
  addCategoryService,
  addNotNullService,
  addProductsService,
  deleteProductService,
  getProductHighStockService,
  getProductNeverBeenSoldService,
  removeCategoryService,
  updateProductService,
} from "./products.service.js";

export const addCategoryController = async (req, res) => {
  await addCategoryService();
  return res.status(201).json({
    msg: "Category Added Successfully",
  });
};

export const removeCategoryController = async (req, res) => {
  await removeCategoryService();
  return res.status(202).json({
    msg: "Category removed Successfully",
  });
};

export const addNotNullController = async (req, res) => {
  await addNotNullService();
  return res.status(201).json({
    msg: "Added Not Null on Product Name Successfully",
  });
};

export const addProductsController = async (req, res) => {
  await addProductsService();
  return res.status(201).json({
    msg: "products Added Successfully",
  });
};

export const updateProductController = async (req, res) => {
  await updateProductService();
  return res.status(202).json({
    msg: "products Updated Successfully",
  });
};

export const deleteProductController = async (req, res) => {
  await deleteProductService();
  return res.status(202).json({
    msg: "products Deleted Successfully",
  });
};

export const getProductHighStockController = async (req, res) => {
  const [product] = await getProductHighStockService();

  return res.status(200).json({
    msg: "products Fetched Successfully",
    product,
  });
};

export const getProductNeverBeenSoldController = async (req, res) => {
  const [product] = await getProductNeverBeenSoldService();
  return res.status(200).json({
    msg: "products Fetched Successfully",
    product,
  });
};
