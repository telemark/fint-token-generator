[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/fint-token-generator.svg)](https://greenkeeper.io/)

# fint-token-generator

## Use with cli

```bash
npm i -g fint-token-generator
fint-token-generator -c 6e1cf7b4-b107-42b3-9435-8fda70726c6a -C 6y4FUuP9BfAXeVqguNKT0ofToIwN5RdB1PaUvx_nCMiQbH9NeGq3pp0jQB9zOQ0APOxEbodzJXp-8RVux6318A -u pwfatut -p pwfatut
```

| Option              | Description               |
| ------------------- | ------------------------- |
| -v, --version       | Output the version number |
| -h, --help          | Display help              |
| -c, --client-id     | OAuth2 client id          |
| -C, --client-secret | OAuth2 client secret      |
| -p, --password      | Password                  |
| -U, --url           | OAuth2 url (optional)     |
| -u, --username      | username                  |

## Use node as node module

Install fint-token-generator

```bash
npm i fint-token-generator
```

```js
const fintTokenGenerator = require('fint-token-generator')

const options = {
  url: 'https://namidp01.rogfk.no/nidp/oauth/nam/token',
  credentials: {
    client: {
      client_id: '6e1cf7b4-b107-42b3-9435-8fda70726c6a',
      client_secret: '6y4FUuP9BfAXeVqguNKT0ofToIwN5RdB1PaUvx_nCMiQbH9NeGq3pp0jQB9zOQ0APOxEbodzJXp-8RVux6318A'
    },
    auth: {
      username: 'pwfatut',
      password: 'pwfatut',
      grant_type: 'password'
    }
  }
}

fintTokenGenerator(options)
  .then(token => {
    console.log(token)
  }).catch(error => {
    console.error(error)
  })
```

## Get token and data

See [tst.js](tst.js)


