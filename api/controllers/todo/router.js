const express = require("express");
const controller = require("./controller");
const validator = require("../../../validators/todo");
const todoRouter = express.Router();

todoRouter
  .get("/", controller.getTodos) //, hourMiddleware.verifyMorning
  .get("/:id", controller.getTodoById)
  .post("/", validator.validatePost, controller.createTodo)
  .put("/:id", validator.validatePut, controller.updateTodo)
  .delete("/:id", controller.deleteTodo);

module.exports = todoRouter;
