const User = require("../models/userModel");
const users = [];
const getUsers = async (req, res) => {
  try {
    const userList = await User.find({...req.query});
    return res.send(userList);
  } catch (e) {
    res.status(500);
    return res.send(e);
  }
};

const createUser = async (req, res) => {
  let user = req.body;
  const newUser = new User(user);
  const saved = await newUser.save(newUser);
  return res.send(saved);
};

const deleteUser = async (req, res) => {
  let userId = req.params.id;
  await User.deleteOne({ _id: userId });
  return res.send(`User with id: ${userId} deleted!`);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const user = await User.updateOne({ _id: id }, update);
  return res.send(user);
};
module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
