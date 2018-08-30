import user from '../routes/user'
var assert = require('assert')

describe('Array', function () {
  it('Get user', async function () {
    let data = await user.GetUser()
    assert.equal(data[0].id, 1)
    assert.equal(data[0].username, 'Martina')
  })
  it('Login fail', async function () {
    let result = await user.Login('Martina', '1223')
    assert.equal(result.code, 401)
    assert.equal(result.message, 'username or password is invalid')
  })
  it('Login success', async function () {
    let result = await user.Login('Martina', '1214')
    assert.equal(result.code, 200)
  })
})
