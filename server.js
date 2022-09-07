import Koa from 'koa';
import helmet from 'koa-helmet';
import koaBody from 'koa-body';
import mainRouter from './src/routes/mainRouter.js'; //Esto lo hago para luego setear que el get raíz tenga un msj de bienvenida
import RouterProductos from './src/routes/RouterProductos.js'; //Importo class RouterProductos from Routes
import { routingError } from './src/controllers/routingError.js' //importo function específica para manejar rutas no parametrizadas
import { PORT } from './src/config/config.js' //Importo variables de config
import logger from './src/utils/logger.js' //Importo logger que configuré

const app = new Koa(); //Instancio mi app Koa

app.use(helmet()); //Un pequeño seteo de seguridad

app.use(koaBody()); //Seteo para que lea bien todo lo que viene de los request

// app.use(koa.static('public')); //Seteo 'public' como static

app.use(mainRouter.routes()) //Sólo a modo prueba seteo un msj al get raíz

const routerProductos = new RouterProductos()

app.use(routerProductos.start()) //Seteo KOA Router a la Api de Productos

app.use(routingError); //Gestiono rutas no parametrizadas

//Pongo a escuchar al server
const server = app.listen(PORT, err => {
    if (!err) {
        logger.info(`Server running at PORT: ${server.address().port}`)
    }
});

//Server Error logging
server.on("error", error => logger.error('Error en el servidor: ' + error))