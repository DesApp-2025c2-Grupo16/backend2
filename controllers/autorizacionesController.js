const { Autorizacion, Prestador, Sequelize } = require('../database/models')

const getAutorizacionesByPrestador = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const autorizaciones = await Autorizacion.findAll({where: {PrestadorId: prestadorId}})
        if(autorizaciones.length === 0){
            return res.status(404).json({message: "No se encontraron autorizaciones de este prestador"})
        }
        return res.status(200).json(autorizaciones)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const getAutorizacionesByPrestadorAndEstado = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const estado = req.params.estado
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const autorizaciones = await Autorizacion.findAll({where: {PrestadorId: prestadorId, estado: estado}})
        if(autorizaciones.length === 0){
            return res.status(404).json({message: "No se encontraron autorizaciones de este prestador con el estado indicado"})
        }
        return res.status(200).json(autorizaciones)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const updateAutorizacion = async (req, res) => {
    try {
        const id = req.params.id
        const autorizacion = await Autorizacion.findByPk(id)
        if(!autorizacion){
            return res.status(404).json({message: "No se encontro la autorizacion"})
        }
        const {estado, motivoEstado} = req.body
        autorizacion.estado = estado
        autorizacion.motivoEstado = motivoEstado
        await autorizacion.save()
        return res.status(200).json(autorizacion)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const createAutorizacion = async (req,res) => {
    try {
        const autorizacion = Autorizacion.create({...req.body})
        if(autorizacion === Sequelize.ValidationError){
            return res.status(400).json(autorizacion)
        }   
        return res.status(201).json(autorizacion)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

module.exports = {
    getAutorizacionesByPrestador,
    getAutorizacionesByPrestadorAndEstado,
    updateAutorizacion,
    createAutorizacion
}