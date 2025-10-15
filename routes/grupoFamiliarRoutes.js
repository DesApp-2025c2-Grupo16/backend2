import express from "express";
import { getGrupoFamiliar } from "../controllers/grupoFamiliarController.js";

const router = express.Router();

router.get("/:id/grupo-familiar", getGrupoFamiliar);

export default router;
