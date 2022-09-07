import ApiProductos from '../services/ApiProductos.js'

class ControladorProductos {

    constructor() {
        this.apiProductos = new ApiProductos()
    }

    getAllProducts = async ctx => {
        try {
            ctx.response.status = 200
            ctx.body = await this.apiProductos.getAllProducts()

        } catch (error) {
            ctx.response.status = 500
            ctx.body = error
        }
    }

    getProductById = async ctx => {
        try {
            const id = ctx.params.id
            ctx.response.status = 200
            ctx.body = await this.apiProductos.getProductById(id)

        } catch (error) {
            ctx.response.status = 500
            ctx.body = error
        }
    }

    createProduct = async ctx => {
        try {
            const newProd = ctx.request.body
            ctx.response.status = 201
            ctx.body = await this.apiProductos.createProduct(newProd)

        } catch (error) {
            ctx.response.status = 500
            ctx.body = error
        }
    }

    editProductById = async ctx => {
        try {
            const id = ctx.params.id
            const newProd = ctx.request.body
            ctx.response.status = 201
            ctx.body = await this.apiProductos.editProductById(id, newProd)

        } catch (error) {
            ctx.response.status = 500
            ctx.body = error
        }
    }

    deleteProductById = async ctx => {
        try {
            const id = ctx.params.id
            ctx.response.status = 202
            ctx.body = await this.apiProductos.deleteProductById(id)

        } catch (error) {
            ctx.response.status = 500
            ctx.body = error
        }
    }
}

export default ControladorProductos