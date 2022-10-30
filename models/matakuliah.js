'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MataKuliah.belongsToMany(models.Mahasiswa, { through: "Krs" })
      // MataKuliah.hasMany(models.Mahasiswa)
    }
  };
  MataKuliah.init({
    kodeMataKuliah: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `Kode Mata Kuliah cannot be empty`
        }
      },
      unique: true
    },
    namaMataKuliah: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Nama Mata Kuliah cannot be empty`
        }
      }
    },
    sks: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `SKS cannot be empty`
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Status cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'MataKuliah',
  });
  return MataKuliah;
};