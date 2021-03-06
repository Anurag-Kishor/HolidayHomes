const User = require("../models/User");
const UserService = require("../services/UserService");
const bcrypt = require("bcrypt");
const { response } = require("express");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    let user = new User();

    user.initModel(
      data.firstName,
      data.lastName,
      data.email,
      hashedPassword,
      data.addressLine1,
      data.addressLine2,
      "035d1f41-b799-4b42-95a3-64cb6ca5c4c0",
      data.phoneNumber
    );

    // console.log(traveler);
    const result = await UserService.createUser(user);
    // console.log("Imhere");
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    //console.log(id);
    // console.log(data);
    let user = new User();

    user.initModel(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.addressLine1,
      data.addressLine2,
      data.locationId,
      data.phoneNumber
    );

    const result = await UserService.updateUser(id, user);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers();
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserService.getUserById(id);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.pramams.id;
    const result = await UserService.deleteUser(id);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const checkIfUserIsHost = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserService.checkIfUserIsHost(id);

    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const makeHost = async (req, res) => {
  try {
    console.log("here");
    const userId = req.params.user_id;
    const result = await UserService.makeHost(userId);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  checkIfUserIsHost,
  makeHost,
};
