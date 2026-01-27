import { db } from "../db.connection.js";

export const createBooksCollection = async () => {
  await db.createCollection("books", {
    validator: {
      title: {
        $nin: [null, ""],
      },
    },
  });
};

export const createBooksIndex = async () => {
  await db.collection("books").createIndex({ title: 1 });
};
