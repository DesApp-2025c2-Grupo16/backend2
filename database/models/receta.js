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
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING,
    asunto: DataTypes.STRING,
    medicamento: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    presentacion: DataTypes.STRING,
    observacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receta',
  });
  return Receta;
};