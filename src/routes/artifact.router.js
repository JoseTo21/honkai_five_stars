const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/artifact.controllers");
const express = require("express");

const routerArtifact = express.Router();

routerArtifact.route("/").get(getAll).post(create);

routerArtifact.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerArtifact;
