import express from "express";
import { connectToDb } from "./db/db.connection.js";
import "./db/models/users.model.js";
import "./db/models/posts.model.js";
import "./db/models/comments.model.js";
import userRouter from "./modules/users/users.routes.js";
import postsRouter from "./modules/posts/posts.routes.js";
import commentsRouter from "./modules/comments/comments.routes.js";
import { globalError } from "./middlewares/globalError.js";
import { notFoundPath } from "./middlewares/notFoundPath.js";

export const bootStrap = async () => {
  const app = express();
  const PORT = 3000;

  // middleware
  app.use(express.json());

  // Routes
  app.use("/users", userRouter);
  app.use("/posts", postsRouter);
  app.use("/comments", commentsRouter);

  // Global Error Middleware
  app.use(notFoundPath);
  app.use(globalError);

  // Server Listen
  app.listen(PORT, async () => {
    await connectToDb();
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
