const schemaSolicitudModificacion = require('./schema/schemaSolicitudModificacion')

const validarSolicitudModificacion = (req, res, next) => {
    const {error} = schemaSolicitudModificacion.validate(req.body, {abortEarly: false})
    if(error){
        return res.status(400).json({message: "datos invalidos", error: error})
    }
    next()
}
module.exports = validarSolicitudModificacion