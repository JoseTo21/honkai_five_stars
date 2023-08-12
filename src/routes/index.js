const express = require("express");
const routerArtifact = require("./artifact.router");
const routerCharacter = require("./character.router");
const routerClass = require("./class.router");
const routerEidolon = require("./eidolon.router");
const routerElement = require("./element.router");
const routerHability = require("./hability.router");
const routerObject = require("./object.router");
const routerOrnament = require("./ornament.router");
const routerStat = require("./stat.router");
const routerTrace = require("./trace.router");
const routerWeapon = require("./weapon.router");
const router = express.Router();

router.use("/artifacts", routerArtifact);
router.use("/characters", routerCharacter);
router.use("/classes", routerClass);
router.use("/eidolons", routerEidolon);
router.use("/elements", routerElement);
router.use("/habilities", routerHability);
router.use("/objects", routerObject);
router.use("/ornaments", routerOrnament);
router.use("/stats", routerStat);
router.use("/traces", routerTrace);
router.use("/weapons", routerWeapon);

module.exports = router;
