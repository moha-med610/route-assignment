import { db } from "../db.connection.js";

export const createLogsCollection = async () => {
  await db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });
};
