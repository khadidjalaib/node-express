const express = require("express");
const userRouter = require("./api/controllers/user/router");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
app.use(express.json());
app.use("/users", userRouter);
app.use(morgan("combined")); //pour afficher la requette reçue
app.use(helmet()); //securiser les reponse que on effectue

// const todos = [
//   {
//     id: 1,
//     task: "Do something",
//     completed: false,
//   },
//   {
//     id: 2,
//     task: "Do something else",
//     completed: true,
//   },
// ];
//get post patch delet(preciser la methode)
//https://jsonplaceholder.typicode.com/posts
//http://localhost:5000/users
//status
//100:informations
//200;tout va bien
//300:redirections
//400:erreur coté client(frontend)
//500: erreur coté serveur(backend)

// endpoint
// crud api
// **** users*******/

// app.get("/users", (req, res) => {
//   res.status(200).send({
//     message: "fatched succesfully",
//     data: users,
//   });
// });
// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users.find((elem) => elem.id == id);
//   if (!user) {
//     return res.status(404).send({
//       message: "user not found",
//       data: {},
//     });
//   }
//   res.status(200).send({
//     message: "fatched succesfully",
//     data: user,
//   });
// });

// // app.get("/users/1", (req, res) => {
// //   const user = users.find((elem) => elem.id == 1);
// //   res.status(200).send(user);
// // });
// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const index = users.findIndex((e) => e.id == id);
//   if (index < 0) {
//     return res.status(404).send({ message: "user not found", data: {} });
//   }
//   users[index] = {
//     id: users[index].id,
//     ...req.body,
//   };
//   res.status(200).send({
//     message: "User Updated Successfully",
//     data: users[index],
//   });
// });

// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     ...req.body,
//   };
//   users.push(newUser);
//   res.status(201).send(newUser);
//   console.log(req.body);
// });
// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const index = users.findInderx((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "user not found",
//       data: {},
//     });
//   }
//   users.splice(index, 1);
//   res.status(200).send({
//     message: "user deleted succesfully",
//     data: {},
//   });
// });

//*****todos ******/
// app.get("/todos", (req, res) => {
//   res.status(200).send({
//     message: "fetched succesfully",
//     data: todos,
//   });
// });
// app.get("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const todo = todos.find((elem) => elem.id == id);
//   if (!todo) {
//     return res.status(404).send({
//       message: "todo not found!!",
//       data: {},
//     });
//   }
//   res.status(200).send({
//     message: "fetched succesfully!!",
//     data: todo,
//   });
// });
// app.put("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = todos.findIndex((e) => e.id == id);
//   if (index < 0) {
//     return res.status(404).send({ message: "todo not found", data: {} });
//   }
//   todos[index] = {
//     id: todos[index].id,
//     ...req.body,
//   };
//   res.status(200).send({
//     message: "Todo Updated Successfully",
//     data: todos[index],
//   });
// });
// app.post("/todos", (req, res) => {
//   const newTodo = {
//     id: todos.length + 1,
//     ...req.body,
//   };
//   todos.push(newT0do);
//   res.status(201).send(newTodo);
//   console.log(req.body);
// });
// app.delete("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = todos.findIndex((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "todo not found",
//       data: {},
//     });
//   }
//   todos.splice(index, 1);
//   res.status(200).send({
//     message: "user deleted succesfully",
//     data: {},
//   });
// });
// //********methode1 */

// // app.patch("/todos/:id", (req, res) => {
// //   const id = req.params.id;
// //   const index = todos.findIndex((elem) => elem.id == id);
// //   if (index < 0) {
// //     return res.status(404).send({
// //       message: "todo not found",
// //       data: {},
// //     });
// //   }

// //   todos[index] = {
// //     ...todos[index],
// //     completed: req.body.completed,
// //   };
// //   res.status(200).send({
// //     message: "Todo Updated Successfully",
// //     data: {},
// //   });
// // });

// //*********methode 2 *****/
// app.patch("/todos/:id", (req, res) => {
//   const action = req.query.action;
//   const id = req.params.id;

//   const index = todos.findIndex((elem) => elem.id == id);
//   if (index < 0) {
//     return res.status(404).send({
//       message: "todo not found",
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
//   return res.status(202).send({
//     message: "Todo Updated Successfully",
//     data: todos[index],
//   });
// });

app.listen(5000, () => {
  console.log("listening on  http://localhost:5000");
});
