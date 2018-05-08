import Promise from 'bluebird'
import crypto from 'crypto'

const cryptoAsync = Promise.promisifyAll(crypto)

class Encrypt {
	constructor(secret) {
		this.secret = secret
	}

    hmac(password) {
        return crypto.createHmac('sha256', this.secret).update(password).digest('hex')
    }

    token() {
        return new Promise((resolve, reject) => {
			cryptoAsync.randomBytesAsync(8)
				.then(buffer => resolve(this.hmac(buffer.toString('hex'))))
				.catch(err => reject(err))
        })
    }
}

export default Encrypt
