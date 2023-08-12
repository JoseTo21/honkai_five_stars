const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/hability.controllers");
const express = require("express");

const routerHability = express.Router();

routerHability.route("/").get(getAll).post(create);

routerHability.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerHability;
