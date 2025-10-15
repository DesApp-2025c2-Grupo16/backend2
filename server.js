import express from "express";
import cors from "cors";

// Rutas
import afiliadosRoutes from "./routes/afiliadosRoutes.js";
import situacionesRoutes from "./routes/situacionesRoutes.js";
import turnosRoutes from "./routes/turnosRoutes.js";
import grupoFamiliarRoutes from "./routes/grupoFamiliarRoutes.js";
import historialRoutes from "./routes/historialRoutes.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usamos las rutas
app.use("/afiliados", afiliadosRoutes);
app.use("/situaciones", situacionesRoutes);
app.use("/turnos", turnosRoutes);
app.use("/afiliados", grupoFamiliarRoutes);
app.use("/historial", historialRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
