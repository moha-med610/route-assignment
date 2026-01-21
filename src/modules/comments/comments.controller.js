import {
  addCommentsService,
  findOrCreateCommentsService,
  getCommentsDetailsService,
  getNewestCommentsService,
  searchCommentsService,
  updateCommentsService,
} from "./comments.service.js";

export const addCommentsController = async (req, res, next) => {
  const data = req.body.comments;
  const comments = await addCommentsService(data);

  return res.status(201).json({
    msg: "Comments Created",
    comments,
  });
};
export const updateCommentsController = async (req, res, next) => {
  const { commentId } = req.params;
  const { userId, content } = req.body;

  const comments = await updateCommentsService({ commentId, userId, content });

  return res.status(202).json({
    msg: "Comment Updated",
  });
};

export const findOrCreateCommentsController = async (req, res, next) => {
  const { content, userId, postId } = req.body;

  const comments = await findOrCreateCommentsService({
    content,
    userId,
    postId,
  });

  return res.status(202).json({
    msg: "comments find or created successfully",
    comments,
  });
};

export const searchCommentsController = async (req, res, next) => {
  const { word } = req.query;

  const comments = await searchCommentsService({ word });

  return res.status(200).json({
    msg: "Products Fetched Successfully",
    comments,
  });
};

export const getNewestCommentsController = async (req, res, next) => {
  const { postId } = req.params;

  const comments = await getNewestCommentsService({ postId });

  return res.status(200).json({
    msg: "Products Fetched Successfully",
    comments,
  });
};

export const getCommentsDetailsController = async (req, res, next) => {
  const { id } = req.params;

  const comments = await getCommentsDetailsService({ id });

  return res.status(200).json({
    msg: "Products Fetched Successfully",
    comments,
  });
};
