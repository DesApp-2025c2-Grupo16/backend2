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
    await queryInterface.bulkInsert('Turnos', [
      {
        id:1,
        fecha: new Date(2025, 9, 28, 10, 0, 0, 0),
        descripcion: "Control",
        especialidad: "Traumatologia",
        AfiliadoId: 1,
        PrestadorId: 1
      },
      {
        id: 2,
        fecha: new Date(2025, 7, 14, 11, 45, 0, 0),
        descripcion: "Tomografia",
        especialidad: "Laboratorio",
        AfiliadoId: 1,
        PrestadorId: 1
      },
      {
        id: 3,
        fecha: new Date(2025, 6, 25, 14, 0, 0, 0),
        descripcion: "Rayos X",
        especialidad: "Laboratorio",
        AfiliadoId: 1,
        PrestadorId: 1
      },
      {
        id: 5,
        fecha: new Date(2025, 10, 10, 12, 30, 0, 0),
        descripcion: "Control de rutina",
        especialidad: "Clínica médica",
        AfiliadoId: 1,
        PrestadorId: 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Turnos', null, {});
  }
};
