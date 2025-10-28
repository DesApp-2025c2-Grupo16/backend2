'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nota.belongsTo(models.Afiliado)
      Nota.belongsTo(models.Turno)
      Nota.belongsTo(models.Prestador)
    }
  }
  Nota.init({
    descripcion: DataTypes.STRING,
    motivo: DataTypes.STRING,
    doctor: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Nota',
  });
  return Nota;
};