import db from '../db/db'

export default {
  GetUser: async function (param) {
    let result = await db
    return result
  },
  Login: async function (username, password) {
    try {
      if (!username) {
        return {
          code: 400,
          success: 'false',
          message: 'username is required'
        }
      } else if (!password) {
        return {
          code: 400,
          success: 'false',
          message: 'password is required'
        }
      } else {
        let result = await db.filter((m) => {
          return m.username === username && m.password === password
        })
        if (result.length > 0) {
          return {
            code: 200,
            success: 'true',
            message: `${username} Login successfully!!`
          }
        } else {
          return {
            code: 401,
            success: 'false',
            message: `username or password is invalid`
          }
        }
      }
    } catch (err) {
      return {
        code: 500,
        success: 'false',
        message: err.message
      }
    }
  }
}
