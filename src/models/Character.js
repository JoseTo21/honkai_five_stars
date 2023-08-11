const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Character = sequelize.define("character", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Character;
