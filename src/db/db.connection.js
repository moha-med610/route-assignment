import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("route", "my_user", "mohamed", {
  dialect: "mysql",
  host: "localhost",
});

export const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected To Database Successfully");

    await sequelize.sync({ alter: false, force: false });
  } catch (error) {
    console.log(`Error connect To Database : ${error}`);
  }
};
