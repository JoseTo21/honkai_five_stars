const Artifac = require("./Artifact");
const Character = require("./Character");
const Class = require("./Class");
const Eidolon = require("./Eidolon");
const Elementt = require("./Element");
const Hability = require("./Hability");
const Objects = require("./Object");
const Ornament = require("./Ornament");
const Stat = require("./Stat");
const Trace = require("./Trace");
const Weapon = require("./Weapon");

Character.belongsTo(Class);
Class.hasMany(Character);

Character.belongsTo(Elementt);
Elementt.hasMany(Character);

Trace.belongsTo(Character);
Character.hasMany(Trace);

Stat.belongsTo(Character);
Character.hasMany(Stat);

Hability.belongsTo(Character);
Character.hasMany(Hability);

Eidolon.belongsTo(Character);
Character.hasMany(Eidolon);

Weapon.belongsTo(Class);
Class.hasMany(Weapon);

Character.belongsToMany(Weapon, { through: "CharacterWeapon" });
Weapon.belongsToMany(Character, { through: "CharacterWeapon" });

Character.belongsToMany(Artifac, { through: "CharacterArtifac" });
Artifac.belongsToMany(Character, { through: "CharacterArtifac" });

Character.belongsToMany(Ornament, { through: "CharacterOrnament" });
Ornament.belongsToMany(Character, { through: "CharacterOrnament" });

Character.belongsToMany(Objects, { through: "CharacterObjects" });
Objects.belongsToMany(Character, { through: "CharacterObjects" });

Weapon.belongsToMany(Objects, { through: "CharacterWeapon" });
Objects.belongsToMany(Weapon, { through: "CharacterWeapon" });
