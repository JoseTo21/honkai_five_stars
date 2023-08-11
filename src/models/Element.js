const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Element = sequelize.define("element", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Element;
