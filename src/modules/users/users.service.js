import { userModel } from "../../db/models/users.model.js";
import { ServerError } from "../../utils/errors.js";

export const signUpService = async ({ name, email, password, role }) => {
  const checkEmailExist = await userModel.findOne({
    where: {
      email,
    },
  });

  if (checkEmailExist) {
    //   this object in utils folder
    throw new ServerError(400, "Email Already Exist");
  }
  const user = userModel.build({
    name,
    email,
    password,
    role,
  });
  await user.save();

  return user;
};

export const createOrUpdateService = async ({
  id,
  name,
  email,
  password,
  role,
}) => {
  const updateOrCreate = await userModel.upsert(
    {
      name,
      email,
      password,
      role,
    },
    {
      where: {
        id,
      },
    },
  );

  return updateOrCreate;
};

export const getUserByEmailService = async ({ email }) => {
  const findUserByEmail = await userModel.findOne({ where: { email } });

  if (!findUserByEmail) {
    throw new ServerError(404, "User Not Found");
  }
  return findUserByEmail;
};

export const getUserByIdService = async ({ id }) => {
  const findUserById = await userModel.findByPk(id);

  if (!findUserById) {
    throw new ServerError(404, "User Not Found");
  }
  return findUserById;
};
