import express from "express";
const server = express();
const PORT = 3000;

// Add middleware to parse JSON data
server.use(express.json());

server.get("/", (req, res) => res.send("hello from backend to frontend!"));

server.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.send(cityName);
});

server.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
