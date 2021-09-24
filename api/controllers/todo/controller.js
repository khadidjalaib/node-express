const Todo = require("../../../models/todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find({}); // trouve tous les donnes
  res.status(200).send({
    message: "fetched succesfully",
    data: todos,
  });
};

const getTodoById = async (req, res) => {
  const id = req.params.id;
  // const todo = todos.find((elem) => elem.id == id);
  const todo = await Todo.findOne({ _id: id }); //findOne array avec un seul element

  if (!todo) {
    return res.status(404).send({
      message: "todo not found",
      data: {},
    });
  }

  res.status(200).send({
    message: "Fetched successfully",
    data: todo,
  });
};

const createTodo = async (req, res) => {
  const newTodo = new Todo({
    ...req.body,
  });
  await newTodo.save(); // sauvegarder les donnés dans notre page
  res.status(201).send(newTodo);
  console.log(req.body);
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ _id: id });

  if (!todo) {
    return res.status(404).send({
      message: "error not found",
      data: {},
    });
  }
  const updatedTodo = await Todo.updateOne(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).send({
    message: "todo updated successfully",
    data: todo,
  });
};

// const patchTodo = async (req, res) => {
//   const action = req.query.action;
//   const id = req.params.id;
//   const index = todos.findIndex((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "User not found",
//       data: {},
//     });
//   }
//   switch (action) {
//     case "done":
//       todos[index] = {
//         ...todos[index],
//         completed: true,
//       };
//       break;
//     case "undone":
//       todos[index] = {
//         ...todos[index],
//         completed: false,
//       };
//       break;
//     default:
//       break;
//   }
//   res.status(200).send({
//     message: "Todo patched successfully",
//     data: todos[index],
//   });
// };

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "error not found",
      data: {},
    });
  }
  const deletedTodo = await Todo.deletOne({ _id: id });

  res.status(200).send({
    message: "todo deleted successfully",
    data: {},
  });
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  //spatchTodo,
  deleteTodo,
};
