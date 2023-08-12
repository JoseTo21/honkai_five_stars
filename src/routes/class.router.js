const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/class.controllers");
const express = require("express");

const routerClass = express.Router();

routerClass.route("/").get(getAll).post(create);

routerClass.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerClass;
