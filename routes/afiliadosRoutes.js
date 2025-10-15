import express from "express";
import {
  getAfiliadoById,
  getGrupoFamiliar,
  createAfiliado,
  updateAfiliado,
  deleteAfiliado,
} from "../controllers/afiliadosController.js";

const router = express.Router();

router.get("/:id", getAfiliadoById);
router.get("/:id/grupo-familiar", getGrupoFamiliar);
router.post("/", createAfiliado);
router.put("/:id", updateAfiliado);
router.delete("/:id", deleteAfiliado);

export default router;
