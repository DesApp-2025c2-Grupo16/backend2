const express = require("express");
const {
  getSituacionesByAfiliado,
  getSituacionesByGrupoFamiliar,
  createSituacion,
  updateSituacion,
  deleteSituacion
} = require("../controllers/situacionesController.js");
const validarSituacion = require('../middleware/validarSituacion.js')

const router = express.Router();

router.get("/:afiliadoId", getSituacionesByAfiliado);
router.get("/grupoFamiliar/:nroGrupoFamiliar", getSituacionesByGrupoFamiliar);
router.post("/", validarSituacion, createSituacion);
router.put("/:id", validarSituacion, updateSituacion);
router.delete("/:id", deleteSituacion);

module.exports = router;
