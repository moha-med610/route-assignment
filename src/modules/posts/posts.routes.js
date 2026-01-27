import { Router } from "express";
import {
  addPostController,
  deletePostController,
  getAllPostsAndCountNumberOfCommentsController,
  getAllPostWithUserAndCommentsController,
} from "./posts.controller.js";

const router = Router();

const routes = {
  details: "/details",
  commentCount: "/comment-count",
};

router.post("/", addPostController);

router.delete("/:id", deletePostController);

router.get(routes.details, getAllPostWithUserAndCommentsController);

router.get(routes.commentCount, getAllPostsAndCountNumberOfCommentsController);

export default router;
