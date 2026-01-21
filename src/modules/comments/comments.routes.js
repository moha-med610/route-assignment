import { Router } from "express";
import {
  addCommentsController,
  findOrCreateCommentsController,
  getCommentsDetailsController,
  getNewestCommentsController,
  searchCommentsController,
  updateCommentsController,
} from "./comments.controller.js";

const router = Router();

const routes = {
  findORCreate: "/find-or-create",
  search: "/search",
  newest: "/newest",
  details: "/details",
};

router.post("/", addCommentsController);

router.patch("/:commentId", updateCommentsController);

router.post(routes.findORCreate, findOrCreateCommentsController);

router.get(routes.search, searchCommentsController);

router.get(`${routes.newest}/:postId`, getNewestCommentsController);

router.get(`${routes.details}/:id`, getCommentsDetailsController);

export default router;
