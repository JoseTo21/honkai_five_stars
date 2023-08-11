const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Objects = sequelize.define("object", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  info: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  source: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Objects;
