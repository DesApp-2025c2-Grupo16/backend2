const express = require("express");
const {
  getTurnosByPrestador,
  getTurnosByPrestadorAndEspecialidad,
  createSituacion
} = require("../controllers/turnosController.js");

const router = express.Router();

router.get("/:prestadorId", getTurnosByPrestador);
router.get("/:prestadorId/:especialidad", getTurnosByPrestadorAndEspecialidad);
router.post("/", createSituacion)

module.exports = router;
