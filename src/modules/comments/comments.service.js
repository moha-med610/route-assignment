import { userModel } from "../../db/models/users.model.js";
import { PostsModel } from "../../db/models/posts.model.js";
import { CommentsModel } from "../../db/models/comments.model.js";
import { ServerError } from "../../utils/errors.js";
import { Op } from "sequelize";

export const addCommentsService = async (data) => {
  const comments = await CommentsModel.bulkCreate(data);
  return comments;
};

export const updateCommentsService = async ({ commentId, userId, content }) => {
  const findComment = await CommentsModel.findByPk(commentId);
  if (!findComment) {
    throw new ServerError(404, "Comments Not Found");
  }

  const comment = await CommentsModel.update(
    { userId, content },
    { where: { id: commentId } },
  );
  return comment;
};

export const findOrCreateCommentsService = async ({
  postId,
  userId,
  content,
}) => {
  const comments = await CommentsModel.findOrCreate({
    where: { postId, userId, content },
    defaults: { postId, userId, content },
  });

  return comments;
};

export const searchCommentsService = async ({ word }) => {
  const searchComments = await CommentsModel.findAndCountAll({
    where: {
      content: {
        [Op.like]: `%${word}%`,
      },
    },
  });

  return searchComments;
};

export const getNewestCommentsService = async ({ postId }) => {
  const comments = await CommentsModel.findAll({
    where: { postId },
    order: ["createdAt"],
  });

  return comments;
};

export const getCommentsDetailsService = async ({ id }) => {
  const comments = await CommentsModel.findAll({
    attributes: ["id", "content"],
    where: { id },
    include: [
      { model: userModel, attributes: ["id", "name", "email"] },
      { model: PostsModel, attributes: ["id", "title", "content"] },
    ],
  });
  return comments;
};
