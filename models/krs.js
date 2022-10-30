'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Krs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Krs.belongsTo(models.Mahasiswa)
      Krs.belongsTo(models.MataKuliah)
    }
  };
  Krs.init({
    mahasiswaId: DataTypes.INTEGER,
    mataKuliahId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Krs',
  });
  return Krs;
};