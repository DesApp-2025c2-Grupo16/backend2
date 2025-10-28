const express = require("express");
const {
  getTurnosByPrestador,
  getTurnosByPrestadorAndEspecialidad
} = require("../controllers/turnosController.js");

const router = express.Router();

router.get("/:prestadorId", getTurnosByPrestador);
router.get("/:prestadorId/:especialidad", getTurnosByPrestadorAndEspecialidad);

module.exports = router;
