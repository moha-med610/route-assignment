import { DataTypes as d, Model } from "sequelize";
import { sequelize } from "../db.connection.js";
import { userModel } from "./users.model.js";
import { PostsModel } from "./posts.model.js";

export class CommentsModel extends Model {}

CommentsModel.init(
  {
    content: {
      type: d.TEXT,
    },
    postId: {
      type: d.INTEGER,
      allowNull: false,
      field: "post_id",
    },
    userId: {
      type: d.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },
  { sequelize, modelName: "Comment" },
);

// users relation
userModel.hasMany(CommentsModel, {
  foreignKey: "userId",
});
CommentsModel.belongsTo(userModel, {
  foreignKey: "userId",
});

// posts relation
PostsModel.hasMany(CommentsModel, {
  foreignKey: "postId",
});
CommentsModel.belongsTo(PostsModel, {
  foreignKey: "postId",
});
