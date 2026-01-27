import { DataTypes as d, Model } from "sequelize";
import { sequelize } from "../db.connection.js";
import { userModel } from "./users.model.js";

export class PostsModel extends Model {}

PostsModel.init(
  {
    title: {
      type: d.STRING,
    },
    content: {
      type: d.TEXT,
    },
    userId: {
      type: d.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },
  { sequelize, modelName: "Post", paranoid: true },
);

userModel.hasMany(PostsModel, {
  foreignKey: "userId",
});
PostsModel.belongsTo(userModel, {
  foreignKey: "userId",
});
