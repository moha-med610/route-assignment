import mysql from "mysql2/promise";

export const connectDatabase = async () => {
  const connect = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mohamed",
    database: "route",
  });
  return connect;
};
