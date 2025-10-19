'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Afiliado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Afiliado.init({
    numeroGrupoFamiliar: DataTypes.INTEGER,
    numeroIntegrate: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    parentesco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Afiliado',
  });
  return Afiliado;
};