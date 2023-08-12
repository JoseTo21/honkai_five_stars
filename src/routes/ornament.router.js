const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/ornament.controllers");
const express = require("express");

const routerOrnament = express.Router();

routerOrnament.route("/").get(getAll).post(create);

routerOrnament.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerOrnament;
