const express = require('express')
const cors = require('cors')
//import express from "express";
//import cors from "cors";



// Rutas

const afiliadosRoutes= require( "./routes/afiliadosRoutes.js")
const situacionesRoutes= require( "./routes/situacionesRoutes.js")
const turnosRoutes= require( "./routes/turnosRoutes.js")
const historialRoutes= require( "./routes/historialRoutes.js")
//import db from "./database/models/index.js"

const db = require('./database/models') 

db.sequelize.sync({force: true})

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usamos las rutas
app.use("/afiliados", afiliadosRoutes);
app.use("/situaciones", situacionesRoutes);
app.use("/turnos", turnosRoutes);
app.use("/historial", historialRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
