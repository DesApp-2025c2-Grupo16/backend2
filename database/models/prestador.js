'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prestador.hasMany(models.Receta)
      Prestador.hasMany(models.Reintegro)
      Prestador.hasMany(models.Autorizacion)
      Prestador.hasMany(models.Turno)
    }
  }
  Prestador.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prestador',
  });
  return Prestador;
};