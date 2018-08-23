import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/index.js'
import { parse } from 'url'

//set up the express app
const APP = express()

//parse incoming requests data
APP.use(bodyParser.json())
APP.use(
  bodyParser.urlencoded({
    extended: false
  })
)
APP.use(router)

const PORT = 5000
APP.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
