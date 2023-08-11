const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Artifac = sequelize.define("artifac", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  twoPc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fourPc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Artifac;
