'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Krs", {
      fields: ["mahasiswaId"],
      type: "foreign key",
      name: "fkey_mahasiswaId",
      references : {
        table: "Mahasiswas",
        field: "id"
      },
      onDelete : "CASCADE",
      onUpdate : "CASCADE"
    })
    .then(()=> {
      return queryInterface.addConstraint("Krs", {
        fields: ["mataKuliahId"],
        type: "foreign key",
        name: "fkey_mataKuliahId",
        references : {
          table: "MataKuliahs",
          field: "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Krs", "fkey_mahasiswaId")
    .then(() => {
      return queryInterface.removeConstraint("Krs", "fkey_mataKuliahId")
    })
  }
};
