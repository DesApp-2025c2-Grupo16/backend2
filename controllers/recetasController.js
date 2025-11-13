const { Receta, Prestador, Sequelize } = require('../database/models')

const getRecetasByPrestador = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const recetas = await Receta.findAll({where: {PrestadorId: prestadorId}})
        if(recetas.length === 0){
            return res.status(404).json({message: "No se encontraron recetas de este prestador"})
        }
        return res.status(200).json(recetas)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const getRecetasByPrestadorAndEstado = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const estado = req.params.estado
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const recetas = await Receta.findAll({where: {PrestadorId: prestadorId, estado: estado}})
        if(recetas.length === 0){
            return res.status(404).json({message: "No se encontraron recetas de este prestador con el estado indicado"})
        }
        return res.status(200).json(recetas)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const updateReceta = async (req, res) => {
    try {
        const id = req.params.id
        const receta = await Receta.findByPk(id)
        if(!receta){
            return res.status(404).json({message: "No se encontro la receta"})
        }
        const {estado, motivoEstado} = req.body
        reintegro.estado = estado
        reintegro.motivoEstado = motivoEstado
        await receta.save()
        return res.status(200).json(receta)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const createReceta = async (req,res) => {
    try {
        const receta = await Receta.create({...req.body})
        if(receta === Sequelize.ValidationError){
            return res.status(400).json(receta)
        }   
        return res.status(201).json(receta)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

module.exports = {
    getRecetasByPrestador,
    getRecetasByPrestadorAndEstado,
    updateReceta,
    createReceta
}