const express = require("express");
const {
  getAfiliadoById,
  getGrupoFamiliar,
  createAfiliado,
  updateAfiliado,
  deleteAfiliado,
} = require("../controllers/afiliadosController.js");

const router = express.Router();

router.get("/:id", getAfiliadoById);
router.get("/grupo-familiar/:nroGrupoFamiliar", getGrupoFamiliar);
router.post("/", createAfiliado);
router.put("/:id", updateAfiliado);
router.delete("/:id", deleteAfiliado);

module.exports = router;
