import { Router } from "express";
import { CreateLogsController } from "./logs.controller.js";

const router = Router();

router.post("/", CreateLogsController);

export default router;
