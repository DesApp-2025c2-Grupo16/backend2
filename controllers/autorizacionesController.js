const { Autorizacion, Prestador, Sequelize } = require('../database/models')

const getAutorizacionById = async (req, res) => {
    try {
        const id = req.params.id
        const autorizacion = await Autorizacion.findByPk(id)
        if(!autorizacion){
            return res.status(404).json({message: "No se encontro la autorizacion"})
        }
        return res.status(200).json(autorizacion)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

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
        const estados = req.params.estados.split(',')

        const pagina = parseInt(req.query.pagina)
        const tamaño = parseInt(req.query.tamaño)

        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const {rows, count} = await Autorizacion.findAndCountAll({
            where: {
                [Sequelize.Op.or]: [ { PrestadorId: prestadorId }, { PrestadorId: null} ],
                estado: { [Sequelize.Op.in]: estados }
            },
            limit: tamaño,
            offset: (pagina - 1) * tamaño 
        })
        const autorizaciones = rows
        if(autorizaciones.length === 0){
            return res.status(404).json({message: "No se encontraron autorizaciones de este prestador con el estado indicado"})
        }
        return res.status(200).json({autorizaciones, count})
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
    getAutorizacionById,
    getAutorizacionesByPrestador,
    getAutorizacionesByPrestadorAndEstado,
    updateAutorizacion,
    createAutorizacion
}