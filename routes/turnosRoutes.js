const express = require("express");
const {
  getTurnosByPrestador,
  getTurnosByPrestadorAndEspecialidad,
  createTurno,
  updateTurno,
  getTurnosByPrestadorAndFecha
} = require("../controllers/turnosController.js");

const router = express.Router();

router.get("/:prestadorId", getTurnosByPrestador);
router.get("/:prestadorId/:especialidad", getTurnosByPrestadorAndEspecialidad);
router.get("/:prestadorId/fecha/:fecha", getTurnosByPrestadorAndFecha)
router.post("/", createTurno)
router.patch("/:id", updateTurno)

module.exports = router;
