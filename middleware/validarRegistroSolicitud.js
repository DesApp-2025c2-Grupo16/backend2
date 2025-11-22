const schemaRegistroSolicitud = require('./schema/schemaRegistroSolicitud')

const validarRegistroSolicitud = (req, res, next) => {
    const {error} = schemaRegistroSolicitud.validate(req.body, {abortEarly: false})
    if(error){
        return res.status(400).json({message: "datos invalidos", error: error})
    }
    next()
}
module.exports = validarRegistroSolicitud