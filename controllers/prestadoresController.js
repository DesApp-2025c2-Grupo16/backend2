const {Prestador} = require('../database/models');
const {hash, compare} = require('bcrypt');

const validatePassword = async (req, res) => {
    try {
        const contraseñaEnviada  = req.body.contraseña
        const nombre = req.body.nombre

        let usuario = await Prestador.unscoped().findOne({
            where: { nombre: nombre },
            attributes: ["contraseña"]
        });
        
        if(!usuario){
            return res.status(404).json({message: "No se encontro el prestador indicado"})
        }

        const esValida = await compare(contraseñaEnviada, usuario.contraseña)
        if(!esValida){
            return res.status(401).json({message: "Contraseña Incorrecta"})
        }

        usuario = await Prestador.findOne({where: {nombre: nombre}})
        
        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const registrarUsuario = async (req, res) => {
    try {
        const {nombre, contraseña} = req.body
        let usuario = await Prestador.findOne({where: {nombre: nombre}})
        if(usuario){
            return res.status(400).json({message: "Ya existe ese usuario"})
        }
        const contraseñaHasheada = await hash(contraseña, 10)
        usuario = await Prestador.create({...req.body, contraseña: contraseñaHasheada})
        return res.status(201).json(usuario)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

module.exports = {
    validatePassword,
    registrarUsuario
}