import { db } from "../db.connection.js";

export const createAuthorsCollection = async () => {
  await db.collection("authors").insertOne({
    name: "Author 1",
    nationality: "British",
  });
};
