import express from 'express'
import db from '../db/db'
import user from './user'

const router = express.Router()

router.get('/api/v1/getUsers', async (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'get users successfully',
    users: await user.GetUser()
  })
})

router.post('/api/v1/login', async (req, res) => {
  let { username, password } = req.body
  let result = await user.Login(username, password)
  if (result.code === 400) {
    return res.status(400).send(result.message)
  } else if (result.code === 500) {
    return res.status(500).send(result.message)
  } else if (result.code === 200) {
    return res.status(200).send()
  }
})

router.post('/api/v1/login2', (req, res) => {
  let { username, password } = req.body
  try {
    if (!username) {
      return res.status(400).json({
        status: 400,
        message: 'username is required'
      })
    } else if (!password) {
      return res.status(400).json({
        status: 400,
        message: 'password is required'
      })
    } else {
      db.map(users => {
        if (users.username === username && users.password === password) {
          return res.status(200).json({
            status: 200,
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
