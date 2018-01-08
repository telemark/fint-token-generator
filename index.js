const axios = require('axios')
// const { stringify } = require('querystring')
const config = require('./config')

async function getToken () {
  const payload = {
    username: config.USERNAME,
    password: config.PASSWORD,
    grant_type: 'password'
  }

  const httpInstance = axios.create({
    baseURL: config.IDP_ENDPOINT,
    method: 'post',
    params: {
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      scope: config.SCOPE
    },
    data: payload
  })

  httpInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  try {
    const { data } = await httpInstance.post()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

/*
async function getData (url, token) {
  const httpInstance = axios.create({
    baseURL: url
  })
  httpInstance.defaults.headers.common['Authorization'] = token
  httpInstance.defaults.headers.common['x-org-id'] = config.ORG_ID
  const { data } = await httpInstance.get(url)
  console.log(JSON.stringify(data, null, 2))
}
*/

getToken()
