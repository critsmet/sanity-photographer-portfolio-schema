'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject = require('is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Data.
 *
 * This isn't an immutable record, it's just a thin wrapper around `Map` so that
 * we can allow for more convenient creation.
 *
 * @type {Object}
 */

var Data = {

  /**
   * Create a new `Data` with `attrs`.
   *
   * @param {Object|Data|Map} attrs
   * @return {Data} data
   */

  create: function create() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (_immutable.Map.isMap(attrs)) {
      return attrs;
    }

    if ((0, _isPlainObject2.default)(attrs)) {
      return new _immutable.Map(attrs);
    }

    throw new Error('`Data.create` only accepts objects or maps, but you passed it: ' + attrs);
  }
};

/**
 * Export.
 *
 * @type {Object}
 */

exports.default = Data;