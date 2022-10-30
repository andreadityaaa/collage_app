'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mahasiswa.belongsToMany(models.MataKuliah, { through: "Krs" })
      // Mahasiswa.hasMany(models.MataKuliah)
    }
  };
  Mahasiswa.init({
    nim: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `NIM cannot be empty`
        }
      },
      unique: true
    },
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Nama cannot be empty`
        }
      }
    },
    tempatLahir: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Tempat Lahir cannot be empty`
        }
      }
    },
    tanggalLahir: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: `Tanggal Lahir cannot be empty`
        }
      }
    },
    alamat: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Alamat cannot be empty`
        }
      }
    },
    noHandphone: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `No Handphone cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};