const error_500 = (error,req, res,next) => {
    return res.status(500).json({
        success : false,
        response : error,
        mesage : `Algo no va bien 💔`
    })
}

export default error_500