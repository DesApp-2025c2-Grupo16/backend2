'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autorizacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Autorizacion.belongsTo(models.Afiliado)
      Autorizacion.belongsTo(models.Prestador)
    }
  }
  Autorizacion.init({
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING,
    asunto: DataTypes.STRING,
    lugar: DataTypes.STRING,
    observacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autorizacion',
  });
  return Autorizacion;
};