import express from "express";
import fs from "fs/promises";

const app = express();
const PORT = 3000;
const PATH = "/users";
app.use(express.json());

const readData = async () => {
  const file = await fs.readFile("./data.json", "utf-8");
  return JSON.parse(file);
};

const writeData = async (data) => {
  await fs.writeFile("./data.json", JSON.stringify(data, null, 2));
};

const data = await readData();
const id = (data[data.length - 1]?.id || 0) + 1;
/**
 * @Post
 * Create an API that adds a new user to your users stored in a JSON file.
 */
app.post(PATH, async (req, res) => {
  const { name, age, email } = req.body;

  const data = await readData();

  const emailExist = data.some((existEmail) => existEmail.email == email);
  if (emailExist) {
    return res.status(400).json({ msg: "Email Already exist" });
  }

  const newUser = {
    id,
    name,
    age,
    email,
    createdAt: new Date(Date.now()),
  };
  data.push(newUser);

  await writeData(data);

  return res.status(201).json({
    msg: "User Added Successfully",
    data: newUser,
  });
});

/**
 * @Patch
 * Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved from the params.
 * @param id
 */
app.patch(`${PATH}/:id`, async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const data = await readData();

  const findIndex = data.findIndex((u) => u.id == id);
  if (findIndex == -1) {
    return res.status(404).json({ msg: "User Not Found" });
  }

  const updatedUser = {
    name,
    age,
  };
  data[findIndex] = { ...data[findIndex], ...updatedUser };
  await writeData(data);

  return res
    .status(202)
    .json({ msg: "User Updated Successfully", data: data[findIndex] });
});

/**
 * @Delete
 * Create an API that deletes a User by ID. The user id should be retrieved from either the request body or optional params. (1
 * @param id
 */
app.delete(`${PATH}/:id`, async (req, res) => {
  const { id } = req.params;

  const data = await readData();

  const findIndex = data.findIndex((u) => u.id == id);
  if (findIndex == -1) {
    return res.status(404).json({ msg: "User Not Found" });
  }
  const deletedUser = data.splice(findIndex, 1);
  await writeData(data);

  return res
    .status(202)
    .json({ msg: "User Updated Successfully", user: deletedUser });
});

/**
 * @Get
 * Create an API that gets a user by their name. The name will be provided as a query parameter.
 * @query GetByName
 */
app.get(`${PATH}/getByName`, async (req, res) => {
  const { name } = req.query;

  const data = await readData();
  const findName = data.find((n) => n.name == name);
  if (!findName) {
    return res.status(404).json({
      msg: "User Not Found",
    });
  }
  return res
    .status(200)
    .json({ msg: "User Fetched Successfully", user: findName });
});

/**
 * @Get
 * Create an API that filters users by minimum age.
 * @query filter => minAge - maxAge
 */
app.get(`${PATH}/filter`, async (req, res) => {
  const { minAge, maxAge } = req.query;

  const data = await readData();

  const findFilter = data.filter((d) => {
    return d.age >= minAge && d.age <= maxAge;
  });
  if (findFilter.length == 0) {
    return res.status(404).json({ msg: "age not Found" });
  }

  res.status(200).json({ msg: "user fetched Successfully", data: findFilter });
});

/**
 * @Get
 * Create an API that gets all users from the JSON file.
 * @returns All Users
 */
app.get(PATH, async (req, res) => {
  res.status(200).json({ data });
});

/**
 * @Get
 * Create an API that gets User by ID.
 * @param id
 */
app.get(`${PATH}/:id`, async (req, res) => {
  const { id } = req.params;

  const data = await readData();

  const findUser = data.find((u) => u.id == id);
  if (!findUser) {
    return res.status(404).json({
      msg: "User Not Found",
    });
  }

  res.status(200).json({ msg: "User fetched Successfully", user: findUser });
});

/**
 * @startServer
 * Running server
 */
app.listen(PORT, () =>
  console.log(`Server is Running on http://localhost:${PORT}`)
);
