const error_404 = (req, res,next)  => {
    return res.status(404).json({
        success : false,
        message: `La ruta ${req.url} no fue encontrada 🤷‍♂️`
    })
}

export default error_404