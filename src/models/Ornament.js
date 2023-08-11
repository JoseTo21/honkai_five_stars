const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Ornament = sequelize.define("ornament", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  hability: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Ornament;
