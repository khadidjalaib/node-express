const express = require("express");
const controller = require("./controller");
const hourMiddleware = require("../../../middlewares/hourMiddleware");
const validator = require("../../../validators/user");
const userRouter = express.Router();

userRouter
  .get("/", controller.getUsers) //, hourMiddleware.verifyMorning
  .get("/:id", controller.getUserById)
  .post("/", validator.validatePost, controller.createUser)
  .put("/:id", validator.validatePut, controller.updateUser)
  .delete("/:id", controller.deleteUser);

module.exports = userRouter;
