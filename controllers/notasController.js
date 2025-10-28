const { Nota, Turno, Sequelize } = require("../database/models")

const getNotasByAfiliado = async (req, res) => {
  try {
    const afiliadoId = req.params.afiliadoId
    const notas = await Nota.findAll({where: {AfiliadoId: afiliadoId}})
    if(!notas){
      return res.status(404).json({message: "No se encontraron notas del afiliado"})
    }
    return res.status(200).json(notas)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

const getNotasByAfiliadoAndPrestador = async (req, res) => {
  try {
    const afiliadoId = req.params.afiliadoId
    const prestadorId = req.params.prestadorId
    const notas = await Nota.findAll({where: {AfiliadoId: afiliadoId, PrestadorId: prestadorId}})
    if(!notas){
      return res.status(404).json({message: "No se encontraron notas del afiliado con el prestador"})
    }
    return res.status(200).json(notas)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

const createNota = async (req, res) => {
  try {
    const turnoId = req.params.turnoId
    const turno = await Turno.findByPk(turnoId)
    if(!turno){
      return res.status(404).json({message: "No se encontro el turno indicado"})
    }
    const nota = await Nota.create({...req.body})
    if(nota === Sequelize.ValidationError){
      return res.status(400).json(nota)
    }
    await turno.addNota(nota)
    return res.status(201).json(nota)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

module.exports = {
  getNotasByAfiliado,
  getNotasByAfiliadoAndPrestador,
  createNota,
}