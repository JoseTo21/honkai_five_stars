const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/element.controllers");
const express = require("express");

const routerElement = express.Router();

routerElement.route("/").get(getAll).post(create);

routerElement.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerElement;
