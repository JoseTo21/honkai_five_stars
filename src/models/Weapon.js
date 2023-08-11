const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Weapon = sequelize.define("weapon", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  atk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  def: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxHp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxAtk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxDef: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hability: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  maxHability: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Weapon;
