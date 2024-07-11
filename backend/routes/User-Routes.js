const express = require("express");

const UserController = require("../controllers/User-Controller");

const router = express.Router();
router
  .get("/users", UserController.GetUsers)
  .get("/user/:id", UserController.GetUser)
  .post("/auth/signup", UserController.SignUp)
  .post("/auth/login", UserController.Login)
  .put("/user/:id", UserController.UpdateUser)
  .delete("/user/:id", UserController.DeleteUser);

module.exports = router;
