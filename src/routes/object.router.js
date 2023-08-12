const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/object.controllers");
const express = require("express");

const routerObject = express.Router();

routerObject.route("/").get(getAll).post(create);

routerObject.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerObject;
