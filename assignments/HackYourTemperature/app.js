import { API_KEY } from "./sources/keys.js";
export function app(server) {
  // Add middleware to parse JSON data

  server.get("/", (req, res) => res.send("hello from backend to frontend!"));

  server.post("/weather", async (req, res) => {
    const cityName = req.body.cityName;
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        const temperature = data.main.temp / 10;
        res.json({ cityName, temperature });
      } else {
        throw new Error(`Error: ${data.message}, Status: ${data.cod}`);
      }
    } catch (error) {
      res
        .status(404)
        .json({ error: "City is not found or the API key is wrong" });
      console.log(error.message);
    }
  });
  // test text for making the request on Postman
  // {
  //   "cityName": "Amsterdam"
  // }
}
