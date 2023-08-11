const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Trace = sequelize.define("trace", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lvl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Trace;
