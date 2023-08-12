const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/eidolon.controllers");
const express = require("express");

const routerEidolon = express.Router();

routerEidolon.route("/").get(getAll).post(create);

routerEidolon.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerEidolon;
