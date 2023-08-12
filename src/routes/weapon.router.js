const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/weapon.controllers");
const express = require("express");

const routerWeapon = express.Router();

routerWeapon.route("/").get(getAll).post(create);

routerWeapon.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerWeapon;
