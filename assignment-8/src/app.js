import express from "express";
import "dotenv/config";

import { connectDb } from "./db/db.connection.js";
import { createBooksCollection } from "./db/models/books.model.js";
import { createAuthorsCollection } from "./db/models/authors.model.js";
import { createLogsCollection } from "./db/models/logs.model.js";
import booksRouter from "./modules/books/books.routes.js";
import logsRouter from "./modules/logs/logs.routes.js";
import { notFoundHandler } from "./middlewares/notfound.js";

export const bootstrap = async () => {
  const app = express();
  app.use(express.json());

  const PORT = process.env.PORT || 3000;

  await createBooksCollection();
  await createLogsCollection();
  await createAuthorsCollection();

  // routes
  app.use("/books", booksRouter);
  app.use("/logs", logsRouter);

  // not Found handler
  app.use(notFoundHandler);

  app.listen(PORT, async () => {
    try {
      await connectDb();
      console.log(`Server is Running on http://localhost:${PORT}`);
    } catch (error) {
      console.log("Error To Start Server: ", error.message);
      process.exit(1);
    }
  });
};
