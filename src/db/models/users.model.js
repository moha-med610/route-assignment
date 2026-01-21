import { DataTypes as d } from "sequelize";
import { sequelize } from "../db.connection.js";

export const userModel = sequelize.define("User", {
  name: {
    type: d.STRING,
  },
  email: {
    type: d.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: d.STRING,
    validate: {
      customPasswordLengthValidate(value) {
        if (value.length < 6) {
          throw new Error("Password Must be greater than 6");
        }
      },
    },
  },
  role: {
    type: d.ENUM("user", "admin"),
  },
});

const checkNameLength = (value) => {
  if (value.length <= 2) {
    throw new Error("name Must be greater than 2");
  }
};

userModel.beforeCreate((user) => {
  checkNameLength(user.name);
});
