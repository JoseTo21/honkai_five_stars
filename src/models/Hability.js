const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Hability = sequelize.define("hability", {
  basicAtk: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  skill: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ultimate: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  talent: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  technique: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  maxBasicAtk: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  maxSkill: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  maxUltimate: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  maxTalent: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  maxTechnique: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Hability;
