import express from "express";
import {
  getTurnosById,
  createTurno,
  updateTurno,
  deleteTurnos
} from "../controllers/turnosController.js";

const router = express.Router();

router.get("/:id", getTurnosById);
router.post("/:id", createTurno);
router.put("/:id", updateTurno);
router.delete("/:id", deleteTurnos);

export default router;
