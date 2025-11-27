'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turnos', [
      {
        id: 1,
        fecha: new Date(2025, 10, 10, 12 - 3, 0),
        descripcion: "Control",
        especialidad: "Traumatologia",
        estado: "Pendiente",
        AfiliadoId: 1,
        PrestadorId: 2
      },
      {
        id: 2,
        fecha: new Date(2025, 10, 10, 12 - 3, 30),
        descripcion: "Tomografia",
        especialidad: "Laboratorio",
        estado: "Pendiente",
        AfiliadoId: 2,
        PrestadorId: 2
      },
      {
        id: 3,
        fecha: new Date(2025, 10, 10, 13 - 3, 0),
        descripcion: "Rayos X",
        especialidad: "Laboratorio",
        estado: "Pendiente",
        AfiliadoId: 3,
        PrestadorId: 2
      },
      {
        id: 4,
        fecha: new Date(2025, 10, 10, 13 - 3, 30),
        descripcion: "Control de rutina",
        especialidad: "Clínica médica",
        estado: "Pendiente",
        AfiliadoId: 4,
        PrestadorId: 2
      },
      {
        id: 5,
        fecha: new Date(2025, 10, 10, 14 - 3, 0),
        descripcion: "Consulta de rutina",
        especialidad: "Clínica médica",
        estado: "Pendiente",
        AfiliadoId: 5,
        PrestadorId: 2
      },
      {
        id: 6,
        fecha: new Date(2025, 10, 10, 14 - 3, 30),
        descripcion: "Control cardiológico",
        especialidad: "Cardiología",
        estado: "Pendiente",
        AfiliadoId: 6,
        PrestadorId: 2
      },
      {
        id: 7,
        fecha: new Date(2025, 10, 10, 15 - 3, 0),
        descripcion: "Estudio oftalmológico",
        especialidad: "Oftalmología",
        estado: "Pendiente",
        AfiliadoId: 7,
        PrestadorId: 2
      },
      {
        id: 8,
        fecha: new Date(2025, 10, 10, 15 - 3, 30),
        descripcion: "Control urológico",
        especialidad: "Urología",
        estado: "Pendiente",
        AfiliadoId: 8,
        PrestadorId: 2
      },
      {
        id: 9,
        fecha: new Date(2025, 10, 10, 16 - 3, 0),
        descripcion: "Consulta dermatológica",
        especialidad: "Dermatología",
        estado: "Pendiente",
        AfiliadoId: 9,
        PrestadorId: 2
      },
      {
        id: 10,
        fecha: new Date(2025, 10, 10, 16 - 3, 30),
        descripcion: "Evaluación psiquiátrica",
        especialidad: "Psiquiatría",
        estado: "Pendiente",
        AfiliadoId: 10,
        PrestadorId: 2
      },
      {
      id: 11,
      fecha: new Date(2025, 10, 10, 17 - 3, 0), 
      descripcion: "Consulta clínica",
      especialidad: "Clínica Médica",
      estado: "Pendiente",
      AfiliadoId: 11,
      PrestadorId: 2
      },
      {
        id: 12,
        fecha: new Date(2025, 10, 10, 17 - 3, 30),
        descripcion: "Control pediátrico",
        especialidad: "Pediatría",
        estado: "Pendiente",
        AfiliadoId: 12,
        PrestadorId: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turnos', null, {});
  }
};
