'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Stylist,
        {
          foreignKey:"stylist_id"
        })
      Appointment.belongsTo(models.Client,
        {
          foreignKey:"client_id"
        })
      Appointment.belongsTo(models.Service,
        {
          foreignKey:"service_id"
        })  
    }
  }
  Appointment.init({
    stylist_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    comments: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};