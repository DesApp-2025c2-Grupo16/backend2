const { Nota, Turno, Prestador, Sequelize } = require("../database/models")

const getNotasByAfiliado = async (req, res) => {
  try {
    const afiliadoId = req.params.afiliadoId

    const pagina = parseInt(req.query.pagina)
    const tamaño = parseInt(req.query.tamaño)

    const {rows, count} = await Nota.findAndCountAll({
      where: {AfiliadoId: afiliadoId},
      limit: tamaño,
      offset: (pagina - 1) * tamaño 
    })
    const notas = rows
    if(!notas){
      return res.status(404).json({message: "No se encontraron notas del afiliado"})
    }
    return res.status(200).json({notas, count})
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

const getNotasByAfiliadoAndPrestador = async (req, res) => {
  try {
    const afiliadoId = req.params.afiliadoId
    const nombrePrestador = req.params.prestador

    const pagina = parseInt(req.query.pagina)
    const tamaño = parseInt(req.query.tamaño)

    const {rows, count} = await Nota.findAndCountAll({
      where: {AfiliadoId: afiliadoId, doctor: {[Sequelize.Op.like]: "%" + nombrePrestador + "%"}},
      limit: tamaño,
      offset: (pagina - 1) * tamaño 
    })
    const notas = rows
    if(!notas){
      return res.status(404).json({message: "No se encontraron notas del afiliado con el prestador"})
    }
    return res.status(200).json({notas, count})
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
    await nota.setTurno(turno)
    await nota.setAfiliado(turno.AfiliadoId)
    await nota.setPrestador(turno.prestadorId)
    return res.status(201).json(nota)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

const updateNota = async (req, res) => {
  try {
    const id = req.params.id
    await Nota.update(req.body, {where: {id: id}})
    const nota = await Nota.findByPk(id)
    return res.status(200).json(nota)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
}

module.exports = {
  getNotasByAfiliado,
  getNotasByAfiliadoAndPrestador,
  createNota,
  updateNota
}