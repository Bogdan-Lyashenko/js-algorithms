/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _openAddressing = __webpack_require__(2);
	
	var _openAddressing2 = _interopRequireDefault(_openAddressing);
	
	var _chaining = __webpack_require__(4);
	
	var _chaining2 = _interopRequireDefault(_chaining);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HashTable = function () {
	    /**
	     *
	     * @param {Object} collisionResolver
	     */
	    function HashTable(collisionResolver) {
	        _classCallCheck(this, HashTable);
	
	        this.collisionResolver = collisionResolver;
	        this.storage = [];
	    }
	
	    /**
	     *
	     * @param {String} key
	     * @param {Array} value
	     */
	
	
	    _createClass(HashTable, [{
	        key: 'insertValue',
	        value: function insertValue(key, value) {
	            this.collisionResolver.insertValue(key, value, this.storage);
	        }
	
	        /**
	         *
	         * @param {String} key
	         * @returns {*|Array}
	         */
	
	    }, {
	        key: 'getValue',
	        value: function getValue(key) {
	            return this.collisionResolver.getValue(key, this.storage);
	        }
	    }]);
	
	    return HashTable;
	}();
	
	var Example = function () {
	    function Example() {
	        _classCallCheck(this, Example);
	
	        this.chainingCollisionResolution = new _chaining2.default();
	        this.openAddressingCollisionResolution = new _openAddressing2.default();
	    }
	
	    _createClass(Example, [{
	        key: 'testChainingCollisionResolution',
	        value: function testChainingCollisionResolution() {
	            var hashTable = new HashTable(this.chainingCollisionResolution);
	
	            hashTable.insertValue('Bohdan1', ['Bohdan1', 21]);
	            hashTable.insertValue('Bohdan2', ['Bohdan2', 22]);
	            hashTable.insertValue('Bohdan3', ['Bohdan3', 23]);
	            hashTable.insertValue('Bohdan4', ['Bohdan4', 24]);
	            hashTable.insertValue('Bohdan5', ['Bohdan5', 25]);
	            hashTable.insertValue('Bohdan6', ['Bohdan6', 26]);
	            hashTable.insertValue('Bohdan7', ['Bohdan7', 27]);
	
	            console.dir(hashTable.storage);
	            console.log(hashTable.getValue('Bohdan6'));
	        }
	    }, {
	        key: 'testOpenAddressingCollisionResolution',
	        value: function testOpenAddressingCollisionResolution() {
	            var hashTable = new HashTable(this.openAddressingCollisionResolution);
	
	            hashTable.insertValue('Bohdan1', ['Bohdan1', 21]);
	            hashTable.insertValue('Bohdan2', ['Bohdan2', 22]);
	            hashTable.insertValue('Bohdan3', ['Bohdan3', 23]);
	            hashTable.insertValue('Bohdan4', ['Bohdan4', 24]);
	            hashTable.insertValue('Bohdan5', ['Bohdan5', 25]);
	            hashTable.insertValue('Bohdan6', ['Bohdan6', 26]);
	            hashTable.insertValue('Bohdan7', ['Bohdan7', 27]);
	
	            console.dir(hashTable.storage);
	            console.log(hashTable.getValue('Bohdan6'));
	        }
	    }]);
	
	    return Example;
	}();
	
	new Example().testChainingCollisionResolution();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hash = __webpack_require__(3);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OpenAddressingCollisionResolution = function () {
	    function OpenAddressingCollisionResolution() {
	        _classCallCheck(this, OpenAddressingCollisionResolution);
	
	        this.hash = new _hash2.default();
	    }
	
	    /**
	     *
	     * @param {String} key
	     * @param {Array} value
	     * @param {Array} storage
	     */
	
	
	    _createClass(OpenAddressingCollisionResolution, [{
	        key: 'insertValue',
	        value: function insertValue(key, value, storage) {
	            var index = this.hash.getIntHashFromString(key);
	
	            if (!storage[index]) {
	                storage[index] = value;
	                return;
	            }
	
	            while (storage[index]) {
	                index++;
	            }
	
	            storage[index] = value;
	        }
	
	        /**
	         *
	         * @param {String} key
	         * @param {Array} storage
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'getValue',
	        value: function getValue(key, storage) {
	            var index = this.hash.getIntHashFromString(key),
	                value = storage[index];
	
	            if (value[0] === key) {
	                return value;
	            }
	
	            while (value) {
	                index++;
	                value = storage[index];
	
	                if (value[0] === key) {
	                    return value;
	                }
	            }
	
	            return null;
	        }
	    }]);
	
	    return OpenAddressingCollisionResolution;
	}();
	
	exports.default = OpenAddressingCollisionResolution;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DEFAULT_LIMIT = 5;
	
	var Hash = function () {
		function Hash() {
			_classCallCheck(this, Hash);
	
			this.setLimit(DEFAULT_LIMIT);
		}
	
		/**
	  *
	  * @param {Number} max
	  */
	
	
		_createClass(Hash, [{
			key: "setLimit",
			value: function setLimit(max) {
				this.limit = max;
			}
	
			/**
	   *
	   * @param {String} str
	   * @returns {number}
	   */
	
		}, {
			key: "getIntHashFromString",
			value: function getIntHashFromString(str) {
				var hash = 0,
				    max = this.limit;
	
				for (var i = 0; i < str.length; i++) {
					/*  Operator << shifts the bits of hash left by the number of bits specified (5).
	        Convert dec number to binary, shift on specified bits number and fill empty places with zeroes
	    		    Example: hash = 14 << 2, hash will have a value of 56:
	        14 is 00001110 in binary shifted left 2 bits - 00111000 is 56 in dec.
	    */
					hash = (hash << 5) + str[i].charCodeAt(0);
	
					/*  & - compares each bit of the first operand to the corresponding bit of the second operand.
	        If both bits are 1, result bit is set to 1. Otherwise, result bit is set to 0 (for each pairs).
	                 01001 & 00101 = 00001 (only last 1 is 1 for both numbers)
	    		    % - modulo after division,
	        5 / 2 = 4+1, 5 % 2 = 1
	    */
					hash = (hash & hash) % max;
				}
	
				return hash;
			}
		}]);
	
		return Hash;
	}();
	
	exports.default = Hash;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hash = __webpack_require__(3);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ChainingCollisionResolution = function () {
		function ChainingCollisionResolution() {
			_classCallCheck(this, ChainingCollisionResolution);
	
			this.hash = new _hash2.default();
		}
	
		/**
	  *
	  * @param {String} key
	  * @param {Array} value
	  * @param {Array} storage
	  */
	
	
		_createClass(ChainingCollisionResolution, [{
			key: 'insertValue',
			value: function insertValue(key, value, storage) {
				var index = this.hash.getIntHashFromString(key),
				    innerIndex = void 0;
	
				if (!storage[index]) {
					storage[index] = [value];
					return;
				}
	
				innerIndex = storage[index].length;
				storage[index][innerIndex] = value;
			}
	
			/**
	   *
	   * @param {String} key
	   * @param {Array} storage
	   * @returns {Array}
	   */
	
		}, {
			key: 'getValue',
			value: function getValue(key, storage) {
				var index = this.hash.getIntHashFromString(key),
				    innerList = void 0;
	
				if (storage[index].length == 1) {
					return storage[index][0];
				}
	
				innerList = storage[index];
				for (var i = 0, length = innerList.length; i < length; i++) {
					if (innerList[i][0] === key) {
						return innerList[i];
					}
				}
	
				return null;
			}
		}]);
	
		return ChainingCollisionResolution;
	}();
	
	exports.default = ChainingCollisionResolution;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map