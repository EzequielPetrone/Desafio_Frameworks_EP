
import Router from 'koa-router'

import ControladorProductos from '../controllers/ControladorProductos.js' //importo controller

class RouterProductos {

    constructor() {
        this.controladorProductos = new ControladorProductos()
    }

    start() {
        const routerProductos = new Router({
            prefix: '/api/productos'
        })

        routerProductos.get("/", this.controladorProductos.getAllProducts) //GET '/api/productos' -> devuelve todos los productos.

        routerProductos.get("/:id", this.controladorProductos.getProductById) //GET '/api/productos/:id' -> devuelve un producto según su id.

        routerProductos.post("/", this.controladorProductos.createProduct) //POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.

        routerProductos.put("/:id", this.controladorProductos.editProductById) //PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

        routerProductos.delete("/:id", this.controladorProductos.deleteProductById) //DELETE '/api/productos/:id' -> elimina un producto según su id.

        return routerProductos.routes()
    }
}

export default RouterProductos