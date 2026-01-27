import {
  addPostService,
  deletePostService,
  getAllPostsAndCountNumberOfCommentsService,
  getAllPostWithUserAndCommentsService,
} from "./posts.service.js";

export const addPostController = async (req, res, next) => {
  const { title, content, userId } = req.body;

  const post = await addPostService({ title, content, userId });

  return res.status(201).json({
    msg: "Posts Added Successfully",
    post,
  });
};

export const deletePostController = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;

  const post = await deletePostService({ id, userId });

  return res.status(202).json({
    msg: "Post Deleted",
  });
};

export const getAllPostWithUserAndCommentsController = async (
  req,
  res,
  next,
) => {
  const posts = await getAllPostWithUserAndCommentsService();

  return res.status(200).json({
    msg: "Posts Fetched Successfully",
    posts,
  });
};

export const getAllPostsAndCountNumberOfCommentsController = async (
  req,
  res,
  next,
) => {
  const posts = await getAllPostsAndCountNumberOfCommentsService();

  return res.status(200).json({
    msg: "Posts Fetched Successfully",
    posts,
  });
};
