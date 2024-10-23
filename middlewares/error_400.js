const error_400 = (error, req,res, next) => {
    return res.status(400).json({
        succes : false,
        response : error,
        message : `la solicitud ${req.url} no es correcta 🦧, verifica la informacion o la sintaxis`
    })
}

export default error_400