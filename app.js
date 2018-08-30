import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/route.js'
import cors from './src/middlewares/cors'
import preflight from './src/middlewares/preflight'

//set up the express app
const APP = express()

//parse incoming requests data
APP.use(bodyParser.json())
APP.use(
  bodyParser.urlencoded({
    extended: false
  })
)
APP.use(cors, preflight)
APP.use(router)

const PORT = 5000
APP.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
