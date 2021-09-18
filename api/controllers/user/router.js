const express = require("express");
const controller = require("./controller");
const userRouter = express.Router();

userRouter
  .get("/", controller.getUsers)
  .get("/:id", controller.getUserById)
  .get("/", controller.createUser)
  .get("/:id", controller.updateUser)
  .delete("/:id", controller.deleteUser);

module.exports = userRouter;
