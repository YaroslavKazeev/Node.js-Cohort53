import { app } from "../app.js";
import supertest from "supertest";

// Create a test server instance
const request = supertest(app);

describe("POST /weather", () => {
  it("should return temperature for a valid city", async () => {
    const response = await request
      .post("/weather")
      .send({ cityName: "Amsterdam" });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("cityName");
    expect(response.body).toHaveProperty("temperature");
    expect(typeof response.body.temperature).toBe("number");
  });

  it("should return 404 error when cityName is not provided", async () => {
    const response = await request.post("/weather").send({});

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty(
      "error",
      "City is not found or the API key is wrong"
    );
  });

  it("should return 404 error when cityName is gibberish", async () => {
    const response = await request
      .post("/weather")
      .send({ cityName: "XyZ123!@#" });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty(
      "error",
      "City is not found or the API key is wrong"
    );
  });
});
