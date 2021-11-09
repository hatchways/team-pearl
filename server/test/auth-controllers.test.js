const request = require("supertest");
const mongoose = require("mongoose");
const { app } = require("../app");
const User = require("../models/User");

const signedUpUser = {
  username: "testUser1",
  email: "testUser1@email.com",
  password: "testUser1",
};

describe("Authentication test", () => {
  beforeAll(async () => {
    await User.deleteMany({})
    await User.create(signedUpUser);
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  const user1 = {
    username: "testUser2",
    email: "testUser2@email.com",
    password: "testUser2",
  };
  const user2 = {
    username: "testUser2",
    email: "testUser12@email.com",
    password: "testUser2",
  };
  const invalidUserData = {
    username: 123,
    email: 123,
    password: false,
  };

  describe("/auth/register", () => {
    test("register user, return registered user, set cookies", async () => {
      const response = await request(app)
        .post("/auth/register")
        .send(user1)
        .expect("Content-Type", /json/)
        .expect(201);

      expect(response.body).toHaveProperty("success");
      expect(response.body.success.user.email).toEqual(user1.email);
      expect(response.headers["set-cookie"]).toBeTruthy();
    });

    test("return 400 when using existing email to register", async () => {
      const response = await request(app)
        .post("/auth/register")
        .send(user1)
        .expect("Content-Type", /json/)
        .expect(400);
      expect(response.body).toStrictEqual({
        error: "A user with that email already exists",
      });
    });

    test("return 400 when using existing username to register", async () => {
      const response = await request(app)
        .post("/auth/register")
        .send(user2)
        .expect("Content-Type", /json/)
        .expect(400);
      expect(response.body).toStrictEqual({
        error: "A user with that username already exists",
      });
    });

    test("return 400 when invalid user data", async () => {
      const response = await request(app)
        .post("/auth/register")
        .send(invalidUserData)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        errors: [
          {
            location: "body",
            msg: "Please enter a valid email address",
            param: "email",
            value: 123,
          },
          {
            location: "body",
            msg: "Please enter a password with 6 or more characters",
            param: "password",
            value: false,
          },
        ],
      });
    });
  });

  describe("/auth/login", () => {
    test("user can login", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send(signedUpUser)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body).toHaveProperty("success");
      expect(response.headers["set-cookie"]).toBeTruthy();
    });

    test("return 400 when invalid password", async () => {
      const wrongPassword = {
        email: "testUser2@email.com",
        password: "wrongpassword",
      };
      const response = await request(app)
        .post("/auth/login")
        .send(wrongPassword)
        .expect("Content-Type", /json/)
        .expect(401);

      expect(response.body).toStrictEqual({
        error: "Invalid email or password",
      });
    });
  });

  describe("GET /auth/user", () => {
    test("returns 401 when no token", async () => {
      const response = await request(app).get("/auth/user").expect(401);
      expect(response.text).toStrictEqual("No token, authorization denied");
    });

    test("returns 401 when invalid token", async () => {
      const response = await request(app)
        .get("/auth/user")
        .set("Cookie", "token=token")
        .expect(401);
      expect(response.text).toStrictEqual("Token is not valid");
    });
  });

  describe("GET /auth/logout", () => {
    test("clears cookie", async () => {
      await request(app).get("/auth/logout").expect(200);
    });
  });
});
