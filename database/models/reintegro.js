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
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    asunto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaFactura: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cuitFacturado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valorFacturado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    personaFacturada: {
      type: DataTypes.STRING,
      allowNull: false
    },
    formaDePago: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cbu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    observacion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Reintegro',
  });
  return Reintegro;
};