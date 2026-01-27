import { Router } from "express";
import {
  createOrUpdateController,
  getUserByEmailController,
  getUserByIdController,
  signUpController,
} from "./users.controller.js";

const router = Router();

const routes = {
  signup: "/signup",
  byEmail: "/by-email",
};

router.post(routes.signup, signUpController);

router.put("/:id", createOrUpdateController);

router.get(routes.byEmail, getUserByEmailController);

router.get("/:id", getUserByIdController);
export default router;
