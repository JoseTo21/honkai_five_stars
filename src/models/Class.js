const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Class = sequelize.define("class", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Class;
