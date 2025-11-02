const { Situacion, Afiliado, Sequelize } = require('../database/models')

const getSituacionesByAfiliado = async (req, res) => {
  try {
    const afiliadoId = req.params.afiliadoId
    const situaciones = await Situacion.findAll({where: {AfiliadoId: afiliadoId}})
    if(situaciones.length === 0){
      return res.status(404).json({message: "No se encontraron situaciones del afiliado"})
    }
    return res.status(200).json(situaciones)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

const getSituacionesByGrupoFamiliar = async (req, res) => {
  try {
    const nroGrupoFamiliar = req.params.nroGrupoFamiliar
    const grupoFamiliar = await Afiliado.findAll({
      where: {numeroGrupoFamiliar: nroGrupoFamiliar}, 
      include: {model: Situacion, as: 'situaciones'}
    })
    if(!grupoFamiliar){
      res.status(404).json({message: "No se encontraron afiliados del grupo familiar"})
    }
    let situaciones = []
    for(const afiliado of grupoFamiliar){
      for(const situacion of afiliado.situaciones){
        situaciones.push(situacion)
      }
    }
    return res.status(200).json(situaciones)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
}

const createSituacion = async (req, res) => {
  try {
    const afiliadoId = req.params.afiliadoId
    const afiliado = await Afiliado.findByPk(afiliadoId)
    if(!afiliado){
      return res.status(404).json({message: "No se encontro el afiliado"})
    }
    const situacion = await Situacion.create({...req.body})
    if(situacion === Sequelize.ValidationError){
      return res.status(400).json(situacion)
    }
    situacion.addAfiliado(afiliado)
    return res.status(201).json(situacion)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
  
};

const updateSituacion = async (req, res) => {
  try {
    const id = req.params.id  
    const situacion = await Situacion.findByPk(id)
    if(!situacion){
      return res.status(404).json({message: "No se encontro la situacion"})
    }
    const {fechaFin} = req.body
    situacion.fechaFin = fechaFin
    await situacion.save()
    return res.status(200).json(situacion)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

module.exports = {
  getSituacionesByAfiliado,
  getSituacionesByGrupoFamiliar,
  createSituacion,
  updateSituacion,
  deleteSituacion
}
