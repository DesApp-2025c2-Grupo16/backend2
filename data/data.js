module.exports = afiliados = [
  {
    nroAfiliado: "A1001",
    nombre: "Juan Pérez",
    dni: "25965235",
    situacionTerapeutica: {
      descripcion: "Discapacidad motriz",
      fechaInicio: "2023-05-10",
      fechaFin: "Indefinido",
    },
    turnos: [
      {
        fecha: "2025-09-15",
        especialidad: "Kinesiología",
        hora: "10:00",
        doctor: "Dr. Martín López",
        descripcion: "Sesión de rehabilitación de rodilla",
      },
      {
        fecha: "2025-10-02",
        especialidad: "Fisioterapia",
        doctor: "Dra. Carla Torres",
        descripcion: "Revisión del progreso terapéutico",
      },
    ],
    historiaClinica: [
      {
        fecha: "2024-01-12",
        motivo: "Control general",
        doctor: "Dr. Mario Suárez",
        nota: "Paciente en buen estado, continúa tratamiento motriz.",
      },
      {
        fecha: "2024-03-15",
        motivo: "Dolor en pierna derecha",
        doctor: "Dr. Martín López",
        nota: "Se recomienda fisioterapia 2 veces por semana.",
      },
    ],
    grupoFamiliar: [
      {
        nroAfiliado: "A1001-1",
        nombre: "Laura Pérez",
        dni: "40456213",
        clasificacion: "Esposo/a",
        situacionTerapeutica: {
          descripcion: "Tratamiento psicológico",
          fechaInicio: "2024-01-20",
          fechaFin: "2024-07-20",
        },
        turnos: [
          {
            fecha: "2025-10-02",
            especialidad: "Psicología",
            hora: "10:00",
            doctor: "Dra. Ana Gómez",
            descripcion: "Terapia cognitiva semanal.",
          },
        ],
        historiaClinica: [
          {
            fecha: "2024-02-10",
            motivo: "Estrés laboral",
            doctor: "Dra. Ana Gómez",
            nota: "Buena respuesta al tratamiento.",
          },
        ],
      },
      {
        nroAfiliado: "A1001-2",
        nombre: "Carlos Pérez",
        dni: "47256123",
        clasificacion: "Hijo/a",
        situacionTerapeutica: {
          descripcion: "Alergia crónica",
          fechaInicio: "2023-09-05",
          fechaFin: "Indefinido",
        },
        turnos: [
          {
            fecha: "2025-09-22",
            especialidad: "Alergología",
            hora: "10:00",
            doctor: "Dr. Ricardo Díaz",
            descripcion: "Revisión de alergia estacional.",
          },
        ],
        historiaClinica: [
          {
            fecha: "2024-03-22",
            motivo: "Revisión alergia",
            doctor: "Dr. Ricardo Díaz",
            nota: "Se mantiene el tratamiento antihistamínico.",
          },
        ],
      },
    ],
  },
  {
    nroAfiliado: "A1002",
    nombre: "María González",
    dni: "30854219",
    situacionTerapeutica: {
      descripcion: "Rehabilitación post quirúrgica",
      fechaInicio: "2024-02-01",
      fechaFin: "2024-06-01",
    },
    turnos: [
      {
        fecha: "2024-02-10",
        especialidad: "Traumatología",
        hora: "10:00",
        doctor: "Dr. Javier Herrera",
        descripcion: "Control post operación de rodilla.",
      },
      {
        fecha: "2024-03-01",
        especialidad: "Kinesiología",
        doctor: "Dra. Lucía Méndez",
        descripcion: "Inicio de sesiones de movilidad.",
      },
    ],
    historiaClinica: [
      {
        fecha: "2024-02-10",
        motivo: "Control post quirúrgico",
        doctor: "Dr. Javier Herrera",
        nota: "Cicatrización correcta, continuar con kinesiología.",
      },
    ],
    grupoFamiliar: [
      {
        nroAfiliado: "A1002-1",
        nombre: "Pedro González",
        dni: "41236578",
        clasificacion: "Esposo/a",
        situacionTerapeutica: {
          descripcion: "Control pediátrico",
          fechaInicio: "2023-12-01",
          fechaFin: "Indefinido",
        },
        turnos: [
          {
            fecha: "2024-03-10",
            especialidad: "Pediatría",
            hora: "10:00",
            doctor: "Dra. Sandra Ruiz",
            descripcion: "Control de crecimiento anual.",
          },
        ],
        historiaClinica: [
          {
            fecha: "2024-03-10",
            motivo: "Control general",
            doctor: "Dra. Sandra Ruiz",
            nota: "Buen desarrollo y crecimiento normal.",
          },
        ],
      },
    ],
  },
  {
    nroAfiliado: "A1003",
    nombre: "Sofía Martínez",
    dni: "27895623",
    situacionTerapeutica: {
      descripcion: "Tratamiento nutricional",
      fechaInicio: "2024-01-05",
      fechaFin: "2024-05-05",
    },
    turnos: [
      {
        fecha: "2024-02-01",
        especialidad: "Nutrición",
        hora: "10:00",
        doctor: "Lic. Paula Gómez",
        descripcion: "Plan alimentario personalizado.",
      },
    ],
    historiaClinica: [
      {
        fecha: "2024-02-01",
        motivo: "Inicio de plan",
        doctor: "Lic. Paula Gómez",
        nota: "Paciente con sobrepeso, se recomienda dieta hipocalórica.",
      },
    ],
    grupoFamiliar: [],
  },
  {
    nroAfiliado: "A1004",
    nombre: "Ricardo López",
    dni: "26987541",
    situacionTerapeutica: {
      descripcion: "Control cardiológico",
      fechaInicio: "2023-11-15",
      fechaFin: "Indefinido",
    },
    turnos: [
      {
        fecha: "2024-04-01",
        especialidad: "Cardiología",
        hora: "10:00",
        doctor: "Dr. Esteban Silva",
        descripcion: "Chequeo de rutina.",
      },
    ],
    historiaClinica: [
      {
        fecha: "2024-04-01",
        motivo: "Chequeo general",
        doctor: "Dr. Esteban Silva",
        nota: "Presión arterial controlada, continuar dieta baja en sodio.",
      },
    ],
    grupoFamiliar: [],
  },
];
