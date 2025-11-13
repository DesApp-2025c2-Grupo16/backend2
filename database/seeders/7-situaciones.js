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
    await queryInterface.bulkInsert('Situacions', [
      {
        id: 1,
        fechaInicio: new Date(2025, 10, 5),
        fechaFin: new Date(2025, 10, 21),
        descripcion: "Esguince",
        AfiliadoId: 1
      },
      {
        id: 2,
        fechaInicio: new Date(2025, 9, 4),
        fechaFin: new Date(2025, 11, 18),
        descripcion: "Apendicitis",
        AfiliadoId: 1
      },
      {
        id: 3,
        fechaInicio: new Date(2025, 6, 2),
        fechaFin: new Date(2026, 7, 13),
        descripcion: "Fractura de radio",
        AfiliadoId: 1
      },
      {
        id: 4,
        fechaInicio: new Date(2025, 7, 5),
        fechaFin: new Date(2025, 7, 21),
        descripcion: "Lumbalgia aguda",
        AfiliadoId: 2
      },
      {
        id: 5,
        fechaInicio: new Date(2025, 6, 2),
        fechaFin: new Date(2025, 6, 18),
        descripcion: "Neumonía",
        AfiliadoId: 2
      },
      {
        id: 6,
        fechaInicio: new Date(2025, 9, 22),
        fechaFin: new Date(2025, 11, 30),
        descripcion: "Sinusitis crónica",
        AfiliadoId: 3
      },
      {
        id: 7,
        fechaInicio: new Date(2025, 4, 23),
        fechaFin: new Date(2025, 5, 20),
        descripcion: "Gastritis erosiva",
        AfiliadoId: 3
      },
      {
        id: 8,
        fechaInicio: new Date(2025, 2, 5),
        fechaFin: new Date(2025, 6, 17),
        descripcion: "Hipertensión arterial",
        AfiliadoId: 4
      },
      {
        id: 9,
        fechaInicio: new Date(2025, 9, 12),
        fechaFin: new Date(2025, 9, 26),
        descripcion: "Bronquitis aguda",
        AfiliadoId: 4
      },
      {
        id: 10,
        fechaInicio: new Date(2025, 8, 26),
        fechaFin: new Date(2025, 10, 11),
        descripcion: "Tendinitis en hombro derecho",
        AfiliadoId: 4
      },
      {
        id: 11,
        fechaInicio: new Date(2025, 0, 8),
        fechaFin: new Date(2025, 0, 25),
        descripcion: "Migraña crónica",
        AfiliadoId: 5
      },
      {
        id: 12,
        fechaInicio: new Date(2025, 7, 25),
        fechaFin: new Date(2025, 8, 30),
        descripcion: "Lesión en menisco",
        AfiliadoId: 5
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
    await queryInterface.bulkDelete('Situacions', null, {});
  }
};
