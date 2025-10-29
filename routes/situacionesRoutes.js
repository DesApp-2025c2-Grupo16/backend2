const express = require("express");
const {
  getSituacionesByAfiliado,
  getSituacionesByGrupoFamiliar,
  createSituacion,
  updateSituacion,
  deleteSituacion
} = require("../controllers/situacionesController.js");

const router = express.Router();

router.get("/:afiliadoId", getSituacionesByAfiliado);
router.get("/grupoFamiliar/:nroGrupoFamiliar", getSituacionesByGrupoFamiliar);
router.post("/", createSituacion);
router.put("/:id", updateSituacion);
router.delete("/:id", deleteSituacion);

module.exports = router;
