import { ObjectId } from "mongodb";
import { db } from "../../db/db.connection.js";

export const CreateLogsService = async ({ bookId, action }) => {
  const logs = await db.collection("logs").insertOne({
    bookId: new ObjectId(bookId),
    action,
  });
  return logs;
};
