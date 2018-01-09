const rp = require('request-promise')
const { stringify } = require('querystring')

module.exports = async opts => {
  if (!opts) {
    throw Error('Missing required input: options')
  }
  if (!opts.url) {
    throw Error('Missing required input: options.url')
  }
  if (!opts.credentials) {
    throw Error('Missing required input: options.credentials')
  }
  if (!opts.credentials.auth) {
    throw Error('Missing required input: options.credentials.auth')
  }
  if (!opts.credentials.client) {
    throw Error('Missing required input: options.credentials.client')
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
