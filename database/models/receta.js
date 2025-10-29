'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receta.belongsTo(models.Afiliado)
      Receta.belongsTo(models.Prestador)
    }
  }
  Receta.init({
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
    medicamento: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    presentacion: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    observacion: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Receta',
    timestamps: false
  });
  return Receta;
};