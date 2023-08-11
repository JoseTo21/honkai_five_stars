const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Stat = sequelize.define("stat", {
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
  spd: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  taunt: {
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
  maxSpd: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxTaunt: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Stat;
