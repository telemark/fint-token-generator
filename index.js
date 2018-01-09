const rp = require('request-promise')
const { stringify } = require('querystring')

module.exports = async opts => {
  if (!opts) {
    throw Error('Missing required input: options')
  }
  if (!opts.url) {
    throw Error('Missing required input: url')
  }
  if (!opts.credentials) {
    throw Error('Missing required input: options.credentials')
  }
  if (!opts.credentials.auth) {
    throw Error('Missing required input: options.credentials.auth')
  }
  if (!opts.credentials.auth.username) {
    throw Error('Missing required input: username')
  }
  if (!opts.credentials.auth.password) {
    throw Error('Missing required input: password')
  }
  if (!opts.credentials.client) {
    throw Error('Missing required input: options.credentials.client')
  }
  if (!opts.credentials.client.client_id) {
    throw Error('Missing required input: client_id')
  }
  if (!opts.credentials.client.client_secret) {
    throw Error('Missing required input: client_secret')
  }

  const { url, credentials } = opts

  const httpOpts = {
    uri: url + '?' + stringify(credentials.client),
    method: 'POST',
    json: true,
    form: credentials.auth
  }

  try {
    const data = await rp(httpOpts)
    return data
  } catch (error) {
    throw error
  }
}
