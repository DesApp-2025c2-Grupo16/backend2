const schemaAutorizacion = require('./schema/schemaAutorizacion')

const validarAutorizacion = (req, res, next) => {
    const {error} = schemaAutorizacion.validate(req.body, {abortEarly: false})
    if(error){
        return res.status(400).json({message: "datos invalidos", error: error})
    }
    next()
}
module.exports = validarAutorizacion