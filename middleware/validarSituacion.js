const schemaSituacion = require('./schema/schemaSituacion')

const validarSituacion = (req, res, next) => {
    const {error} = schemaSituacion.validate(req.body, {abortEarly: false})
    if(error){
        return res.status(400).json({message: "datos invalidos", error: error})
    }
    next()
}
module.exports = validarSituacion