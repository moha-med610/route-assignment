import { PostsModel } from "../../db/models/posts.model.js";
import { userModel } from "../../db/models/users.model.js";
import { CommentsModel } from "../../db/models/comments.model.js";
import { ServerError } from "../../utils/errors.js";
import { sequelize } from "../../db/db.connection.js";

export const addPostService = async ({ title, content, userId }) => {
  const findUser = await userModel.findByPk(userId);
  if (!findUser) {
    throw new ServerError(
      404,
      "This User Cannot create a post Because is Not Signup",
    );
  }
  const post = new PostsModel({ title, content, userId });
  await post.save();

  return post;
};

export const deletePostService = async ({ id, userId }) => {
  const findPost = await PostsModel.findByPk(id);
  if (!findPost) {
    throw new ServerError(404, "Post Not Found");
  }

  const checkPostIsOwnedByUser = await PostsModel.findOne({
    where: { userId, id },
  });
  if (!checkPostIsOwnedByUser) {
    throw new ServerError(401, "You are not authorized to delete this post");
  }

  await checkPostIsOwnedByUser.destroy();
  return checkPostIsOwnedByUser;
};

export const getAllPostWithUserAndCommentsService = async () => {
  const posts = await PostsModel.findAll({
    attributes: ["id", "title"],

    include: [
      { model: userModel, attributes: ["id", "name"] },
      { model: CommentsModel, attributes: ["id", "content"] },
    ],
  });
  return posts;
};

export const getAllPostsAndCountNumberOfCommentsService = async () => {
  const posts = await PostsModel.findAll({
    attributes: [
      "id",
      "title",

      [sequelize.fn("COUNT", sequelize.col("Comments.id")), "commentsCount"],
    ],
    include: [
      {
        model: CommentsModel,
        attributes: [],
      },
    ],

    group: ["Post.id"],
  });
  return posts;
};
