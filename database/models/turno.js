'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Turno.hasOne(models.Nota)
      Turno.belongsTo(models.Afiliado)
      Turno.belongsTo(models.Prestador)
    }
  }
  Turno.init({
    fecha: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    especialidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Turno',
  });
  return Turno;
};