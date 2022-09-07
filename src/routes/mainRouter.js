import Router from 'koa-router'

const mainRouter = new Router({
    prefix: '/'
})

mainRouter.get('/', async ctx => ctx.body = 'KOA APP developed by Ezequiel Petrone')

export default mainRouter