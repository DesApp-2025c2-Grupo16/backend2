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
      Afiliado.hasMany(models.Nota)
      Afiliado.hasMany(models.Situacion, {as: 'situaciones'})
      Afiliado.hasMany(models.Reintegro)
      Afiliado.hasMany(models.Autorizacion)
      Afiliado.hasMany(models.Receta)
      Afiliado.hasMany(models.Turno)
    }
  }
  Afiliado.init({
    numeroGrupoFamiliar: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numeroIntegrate: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parentesco: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Afiliado',
  });
  return Afiliado;
};