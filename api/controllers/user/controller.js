const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
  },
];

const getUsers = (req, res) => {
  res.status(200).send({
    message: "fatched succesfully",
    data: users,
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const user = users.find((elem) => elem.id == id);
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

const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).send(newUser);
  console.log(req.body);
};
const updateUser = (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((e) => e.id == id);
  if (index < 0) {
    return res.status(404).send({ message: "user not found", data: {} });
  }
  users[index] = {
    id: users[index].id,
    ...req.body,
  };
  res.status(200).send({
    message: "User Updated Successfully",
    data: users[index],
  });
};
const deleteUser = (req, res) => {
  const id = req.params.id;
  const index = users.findInderx((elem) => elem.id == id);
  if (index < 0) {
    return res.status(404).send({
      message: "user not found",
      data: {},
    });
  }
  users.splice(index, 1);
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
