'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Afiliados', [
        {
          id: 1,
          numeroGrupoFamiliar: 1001,
          numeroIntegrante: 1,
          nombre: "Juan",
          apellido: "Perez",
          parentesco: "titular"
        },
        {
          id: 2,
          numeroGrupoFamiliar: 1001,
          numeroIntegrante: 2,
          nombre: "Carla",
          apellido: "Perez",
          parentesco: "conyuge"
        },
        {
          id: 3,
          numeroGrupoFamiliar: 1001,
          numeroIntegrante: 3,
          nombre: "Andrea",
          apellido: "Perez",
          parentesco: "hijo/a"
        },
        {
          id: 4,
          numeroGrupoFamiliar: 1002,
          numeroIntegrante: 1,
          nombre: "Silvia",
          apellido: "Rodriguez",
          parentesco: "titular"
        },
        {
          id: 5,
          numeroGrupoFamiliar: 1002,
          numeroIntegrante: 2,
          nombre: "Pedro",
          apellido: "Rodriguez",
          parentesco: "hijo/a"
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
