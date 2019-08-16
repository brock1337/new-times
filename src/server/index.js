import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import logger from 'koa-logger'
import router from '../routes/index'

const APP = new Koa()
const PORT = process.env.PORT || 3000

// Middlewares
APP.use(logger())
APP.use(cors({
  origin: '*'
}))
APP.use(bodyParser({
  enableTypes: ['json']
}))

// Routers
APP.use(router.routes())
APP.use(router.allowedMethods())

APP.listen(PORT, () => console.log(`Server listening on PORT --> ${PORT}`))
