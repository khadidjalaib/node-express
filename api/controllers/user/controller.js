const User = require("../../../models/user");

const getUsers = async (req, res) => {
  const users = await User.find({}); // trouve tous mes donnes
  res.status(200).send({
    message: "fetched succesfully",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  // const user = users.find((elem) => elem.id == id);
  const user = await User.findOne({ _id: id }); //findOne array avec un seul element

  if (!user) {
    return res.status(404).send({
      message: "user not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "fatched succesfully",
    data: user,
  });
};

const createUser = async (req, res) => {
  // const newUser = {
  //   id: users.length + 1,
  //   ...req.body,
  // };
  // users.push(newUser);
  try {
    const newUser = new User({
      ...req.body,
    });
    await newUser.save(); // sauvegarder les donnés dans notre page
    res.status(201).send({
      message: "user created succefullyy",
      data: newUser,
    });
  } catch (error) {
    console.log("message:", error.message);
    res.status(500).send({
      message: "server error",
      data: {},
    });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  // const index = users.findIndex((e) => e.id == id);
  // if (index < 0) {
  //   return res.status(404).send({ message: "user not found", data: {} });
  // }
  // users[index] = {
  //   id: users[index].id,
  //   ...req.body,
  // };
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "not found",
      data: {},
    });
  }
  const updatedUser = await User.updateOne(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).send({
    message: "User Updated Successfully",
    data: updatedUser,
  });
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  // const index = users.findInderx((elem) => elem.id == id);
  // if (index < 0) {
  //   return res.status(404).send({
  //     message: "user not found",
  //     data: {},
  //   });
  // }
  // users.splice(index, 1);

  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "not found",
      data: {},
    });
  }
  const deletedUser = await User.deleteOne({ _id: id });

  res.status(200).send({
    message: "user deleted succesfully",
    data: {},
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
