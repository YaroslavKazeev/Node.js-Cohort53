import express from "express";
const server = express();
const PORT = 3000;

server.get("/", (req, res) => res.send("hello from backend to frontend!"));

server.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
