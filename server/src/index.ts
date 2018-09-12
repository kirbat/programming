import * as Koa from 'koa'
import * as serve from 'koa-static'
import * as path from 'path'

const mount = require('koa-mount')
const app = new Koa()

app.use(mount('/assets', serve(path.join(__dirname, '..', '..', 'client', 'dist'))))

app.use(async (ctx: any) => {
    ctx.body = `
<html>
    <body>
        <div id="app"></div>
        <script src="/assets/bundle.js"></script>
    </body>
</html>
    `
})

app.listen(9001)