import express from "express";
import {
  getSituacionById,
  createSituacion,
  updateSituacion,
  deleteSituacion
} from "../controllers/situacionesController.js";

const router = express.Router();

router.get("/:id", getSituacionById);
router.post("/:id", createSituacion);
router.put("/:id", updateSituacion);
router.delete("/:id", deleteSituacion);

export default router;
