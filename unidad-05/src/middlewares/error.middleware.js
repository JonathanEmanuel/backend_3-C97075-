export const errorMiddleware = ( err, req, res, next) => {
    const status = err.statusCode || 500;

    res.status(status).json({
        status:'error',
        message: err.message || 'Error del Servidor'
    })
}