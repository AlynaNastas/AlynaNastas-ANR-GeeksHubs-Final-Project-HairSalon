"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stylist.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      Stylist.hasMany(models.Appointment, {
        foreignKey: "stylist_id",
      });
    }
  }
  Stylist.init(
    {
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Stylist",
    }
  );
  return Stylist;
};
