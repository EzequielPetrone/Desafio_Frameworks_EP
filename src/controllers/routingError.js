import logger from '../utils/logger.js'

const routingError = (ctx) => {
    
    logger.warn(`Fail Request ${ctx.request.method} a la ruta: ${ctx.request.originalUrl} (No implementada)`)

    ctx.response.status = 404;

    ctx.body = {
        status: 'Route Error',
        message: `Fail Request ${ctx.request.method} a la ruta: ${ctx.request.originalUrl} (No implementada)`
    }
}

export { routingError }