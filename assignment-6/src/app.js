import express from "express";
import { server } from "../server.js";

const port = 3000;
const app = express();

server(app, port);
