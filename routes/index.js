import express from 'express'
import db from '../db/db'

const router = express.Router()

router.get('/api/v1/getUsers', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'get users successfully',
    users: db
  })
})

router.post('/api/v1/login', (req, res) => {
  let { username, password } = req.body
  try {
    if (!username) {
      return res.status(400).send({
        success: 'false',
        message: 'username is required'
      })
    } else if (!password) {
      return res.status(400).send({
        success: 'false',
        message: 'password is required'
      })
    } else {
      db.map(users => {
        if (users.username === username && users.password === password) {
          return res.status(200).send({
            success: 'true',
            message: `${username} Login successfully!!`
          })
        }
      })
    }
  } catch (err) {
    res.status(500).end()
  }
})
module.exports = router
