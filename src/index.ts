import * as Koa from 'koa'

const app = new Koa()

app.use(async (ctx: any) => {
    ctx.body = '<h1>Bunnies</h1>'
})

app.listen(9001)