const schemaReintegro = require('./schema/schemaReintegro')

const validarReintegro = (req, res, next) => {
    const {error} = schemaReintegro.validate(req.body, {abortEarly: false})
    if(error){
        return res.status(400).json({message: "datos invalidos", error: error})
    }
    next()
}
module.exports = validarReintegro