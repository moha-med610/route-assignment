import {
  signUpService,
  createOrUpdateService,
  getUserByEmailService,
  getUserByIdService,
} from "./users.service.js";

export const signUpController = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await signUpService({ name, email, password, role });
  return res.status(201).json({
    msg: "User Added Successfully",
    user,
  });
};

export const createOrUpdateController = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const { id } = req.params;

  const user = await createOrUpdateService({ name, email, password, role, id });
  return res.status(202).json({
    msg: "User Created Or Update Successfully",
    user,
  });
};

export const getUserByEmailController = async (req, res, next) => {
  const { email } = req.query;
  const user = await getUserByEmailService({ email });
  return res.status(200).json({
    msg: "User Fetched Successfully",
    user,
  });
};

export const getUserByIdController = async (req, res, next) => {
  const { id } = req.params;
  const user = await getUserByIdService({ id });
  return res.status(200).json({
    msg: "User Fetched Successfully",
    user,
  });
};
