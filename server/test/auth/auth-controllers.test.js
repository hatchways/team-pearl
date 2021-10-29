const request = require("supertest");
const mongoose = require("mongoose");
const { app } = require("../../app");
const User = require("../../models/User");
const mongo_url = "mongodb://localhost:27017/test";

describe("Authentication routes test", () => {
  beforeAll(async () => {
    await User.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("can register user", async () => {
    const newUser = {
      username: "testUser1",
      email: "testUser1@email.com",
      password: "testUser1",
    };

    const response = await request(app).post("/auth/register").send(newUser);
    console.log(response.body);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("success");
  });
});
