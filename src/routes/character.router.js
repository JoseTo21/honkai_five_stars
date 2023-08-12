const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/character.controllers");
const express = require("express");

const routerCharacter = express.Router();

routerCharacter.route("/").get(getAll).post(create);

routerCharacter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerCharacter;
