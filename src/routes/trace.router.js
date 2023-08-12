const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/trace.controllers");
const express = require("express");

const routerTrace = express.Router();

routerTrace.route("/").get(getAll).post(create);

routerTrace.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerTrace;
