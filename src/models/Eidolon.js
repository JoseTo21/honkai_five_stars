const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Eidolon = sequelize.define("eidolon", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  characteristics: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Eidolon;
