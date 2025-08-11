import { app } from "./app.js";
import express from "express";
const server = express();
server.use(express.json());
const PORT = 3000;

app(server);

server.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
