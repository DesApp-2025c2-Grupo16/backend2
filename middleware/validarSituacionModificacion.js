const schemaSituacionModificacion = require('./schema/schemaSituacionModificacion')

const validarSituacionModificacion = (req, res, next) => {
    const {error} = schemaSituacionModificacion.validate(req.body)
    if(error){
        return res.status(400).json({message: "datos invalidos", error: error})
    }
    next()
}
module.exports = validarSituacionModificacion