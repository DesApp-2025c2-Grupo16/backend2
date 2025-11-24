const express = require('express')
const cors = require('cors')
//import express from "express";
//import cors from "cors";



// Rutas

const afiliadosRoutes= require( "./routes/afiliadosRoutes.js")
const situacionesRoutes= require( "./routes/situacionesRoutes.js")
const turnosRoutes= require( "./routes/turnosRoutes.js")
const historialRoutes= require( "./routes/notasRoutes.js")
const autorizacionesRoutes = require('./routes/autorizacionesRoutes.js')
const recetasRoutes = require('./routes/recetasRoutes.js')
const reintegrosRoutes = require('./routes/reintegrosRoutes.js')
const registrosSolicitudesRoutes = require('./routes/registrosSolicitudesRoutes.js')
const prestadoresRoutes = require('./routes/prestadoresRoutes.js')

const db = require('./database/models') 

db.sequelize.sync({alter: true})

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usamos las rutas
app.use("/afiliados", afiliadosRoutes);
app.use("/situaciones", situacionesRoutes);
app.use("/turnos", turnosRoutes);
app.use("/notas", historialRoutes);
app.use('/autorizaciones', autorizacionesRoutes);
app.use('/recetas', recetasRoutes);
app.use('/reintegros', reintegrosRoutes);
app.use('/registrosSolicitudes', registrosSolicitudesRoutes);
app.use('/prestadores', prestadoresRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
