const express = require("express");
const controller = require("./controller");
const hourMiddleware = require("../../../middlewares/hourMiddleware");
const userRouter = express.Router();

userRouter
  .get("/", hourMiddleware.verifyMorning, controller.getUsers)
  .get("/:id", controller.getUserById)
  .get("/", controller.createUser)
  .get("/:id", controller.updateUser)
  .delete("/:id", controller.deleteUser);

module.exports = userRouter;
