const { Turno } = require('../database/models')

const getTurnosByPrestador = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId
    const turnos = await Turno.findAll({where: {PrestadorId: prestadorId}})
    if(!turnos){
      return res.status(404).json({message: "No se encontraron turnos del prestador"})
    }
    return res.status(200).json(turnos)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};
const getTurnosByPrestadorAndEspecialidad = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId
    const especialidad = req.params.especialidad
    const turnos = await Turno.findAll({where: {PrestadorId: prestadorId, especialidad: especialidad}})
    if(!turnos){
      return res.status(404).json({message: "No se encontraron turnos del prestador"})
    }
    return res.status(200).json(turnos)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

const createSituacion = async (req, res) => {
  try {
     const turno = await Turno.create({...req.body})
        if(turno === Sequelize.ValidationError){
              return res.status(400).json(turno)
            }
        return res.status(201).json({turno})
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
}

module.exports = {
  getTurnosByPrestador,
  getTurnosByPrestadorAndEspecialidad,
  createSituacion
}