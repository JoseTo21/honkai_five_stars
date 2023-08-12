const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/stat.controllers");
const express = require("express");

const routerStat = express.Router();

routerStat.route("/").get(getAll).post(create);

routerStat.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerStat;
