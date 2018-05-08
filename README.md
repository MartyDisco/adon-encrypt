# AdOn Encrypt

A simple HMAC and authentication token generator wrapper class on Node built-in module crypto, promisified with bluebird

## Installing

Using npm

```
npm install adon-encrypt
```

Using yarn

```
yarn add adon-encrypt
```

## Setup

Import ES6 module style

```
import Encrypt from 'adon-encrypt'
```

Or CommonJS style

```
const Encrypt = require('adon-encrypt')
```

Then provide a string to the class constructor

```
const encrypt = new Encrypt('secret')
```

## Useage

HMAC a user password before saving it to database or matching for login

```
encrypt.hmac(password)
```

Generate an authentication token for password reset or user sessions

```
encrypt.token()
    .then((token) => {
        // Do something with token / Chain promises
    })
    .catch((err) => {
        // Treat errors
    })
```

## Dependencies

* [bluebird](https://github.com/petkaantonov/bluebird) - A full featured promise library with unmatched performance

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
