'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cryptoAsync = _bluebird2.default.promisifyAll(_crypto2.default);

var Encrypt = function () {
    function Encrypt(secret) {
        _classCallCheck(this, Encrypt);

        this.secret = secret;
    }

    _createClass(Encrypt, [{
        key: 'hmac',
        value: function hmac(password) {
            return _crypto2.default.createHmac('sha256', this.secret).update(password).digest('hex');
        }
    }, {
        key: 'token',
        value: function token() {
            var _this = this;

            return new _bluebird2.default(function (resolve, reject) {
                cryptoAsync.randomBytesAsync(8).then(function (buffer) {
                    return resolve(_this.hmac(buffer.toString('hex')));
                }).catch(function (err) {
                    return reject(err);
                });
            });
        }
    }]);

    return Encrypt;
}();

exports.default = Encrypt;
module.exports = exports['default'];
