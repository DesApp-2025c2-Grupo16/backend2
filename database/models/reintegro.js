'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reintegro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reintegro.belongsTo(models.Afiliado)
      Reintegro.belongsTo(models.Prestador)//el que maneja la solicitud
      //relacion con prestador que atendio el turno
    }
  }
  Reintegro.init({
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING,
    asunto: DataTypes.STRING,
    especialidad: DataTypes.STRING,
    lugar: DataTypes.STRING,
    fechaFactura: DataTypes.DATE,
    cuitFacturado: DataTypes.STRING,
    valorFacturado: DataTypes.INTEGER,
    personaFacturada: DataTypes.STRING,
    formaDePago: DataTypes.STRING,
    cbu: DataTypes.INTEGER,
    observacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reintegro',
  });
  return Reintegro;
};