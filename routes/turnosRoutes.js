const express = require("express");
const {
  getTurnosByPrestador,
  getTurnosByPrestadorAndEspecialidad,
  createTurno,
  updateTurno
} = require("../controllers/turnosController.js");

const router = express.Router();

router.get("/:prestadorId", getTurnosByPrestador);
router.get("/:prestadorId/:especialidad", getTurnosByPrestadorAndEspecialidad);
router.post("/", createTurno)
router.patch("/:id", updateTurno)

module.exports = router;
