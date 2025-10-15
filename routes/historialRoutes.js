import express from "express";
import {
  getHistorialById,
  createHistorial,
  updateHistorial,
  deleteHistorial
} from "../controllers/historialController.js";

const router = express.Router();

router.get("/:id", getHistorialById);
router.post("/:id", createHistorial);
router.put("/:id", updateHistorial);
router.delete("/:id", deleteHistorial);

export default router;
