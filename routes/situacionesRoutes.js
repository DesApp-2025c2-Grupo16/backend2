const express = require("express");
const {
  getSituacionesByAfiliado,
  getSituacionesByGrupoFamiliar,
  createSituacion,
  updateSituacion,
} = require("../controllers/situacionesController.js");
const validarSituacion = require('../middleware/validarSituacion.js')
const validarSituacionModificacion = require('../middleware/validarSituacionModificacion.js')

const router = express.Router();

router.get("/:afiliadoId", getSituacionesByAfiliado);
router.get("/grupoFamiliar/:nroGrupoFamiliar", getSituacionesByGrupoFamiliar);
router.post("/:afiliadoId", validarSituacion, createSituacion);
router.patch("/:id", validarSituacionModificacion, updateSituacion);

module.exports = router;
