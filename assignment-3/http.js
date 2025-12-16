import http from "http";
import fs from "fs/promises";
import { URL } from "url";

const PORT = 3000;
const FILE_PATH = "users.json";

const server = http.createServer(async (req, res) => {
  const { url, method } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  const sendJSON = (status, data) => {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };

  const data = await fs.readFile(FILE_PATH, "utf-8");
  let users = JSON.parse(data);

  const pathParts = pathname.split("/").filter(Boolean);
  const route = pathParts[0];
  const id = pathParts[1];

  if (route === "user" && method === "POST") {
    /**
     * 1- Create an API that adds a new user to your users stored in a JSON file.
     */
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", async () => {
      const newUser = JSON.parse(body);

      const emailExists = users.some((u) => u.email === newUser.email);
      if (emailExists)
        return sendJSON(400, { message: "Email already exists" });

      const id = users.length ? Math.max(...users.map((u) => Number(u.id))) : 0;
      newUser.id = Number(id + 1);

      users.push(newUser);
      await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2));
      sendJSON(201, { message: "User added", user: newUser });
    });
  } else if (route === "user" && method === "PATCH") {
    /**
     * 2- Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved from the URL.
     */
    if (!id) return sendJSON(400, { message: "User ID is required" });

    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", async () => {
      const updates = JSON.parse(body);
      const userIndex = users.findIndex((u) => u.id == id);
      if (userIndex === -1) return sendJSON(404, { message: "User not found" });

      if (updates.email) {
        const emailExists = users.some(
          (u, idx) => u.email === updates.email && idx !== userIndex
        );
        if (emailExists)
          return sendJSON(400, { message: "Email already exists" });
      }

      users[userIndex] = { ...users[userIndex], ...updates };
      await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2));
      sendJSON(200, { message: "User updated", user: users[userIndex] });
    });
  } else if (route === "user" && method === "DELETE") {
    /**
     * 3- Create an API that deletes a User by ID. The user id should be retrieved from the URL.
     */
    if (!id) return sendJSON(400, { message: "User ID is required" });

    const userIndex = users.findIndex((u) => u.id == id);
    if (userIndex === -1) return sendJSON(404, { message: "User not found" });

    const deletedUser = users.splice(userIndex, 1)[0];
    await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2));
    sendJSON(200, { message: "User deleted", user: deletedUser });
  } else if (route === "user" && method === "GET" && !id) {
    /**
     * 4- Create an API that gets all users from the JSON file.
     */
    sendJSON(200, users);
  } else if (route === "user" && method === "GET" && id) {
    /**
     * 5- Create an API that gets User by ID.
     */
    const user = users.find((u) => u.id == id);
    if (!user) return sendJSON(404, { message: "User not found" });
    sendJSON(200, user);
  } else {
    sendJSON(404, { message: "This URL is not found" });
  }
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
