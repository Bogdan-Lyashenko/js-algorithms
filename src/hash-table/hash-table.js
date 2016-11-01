export default class HashTable {
    /**
     *
     * @param {Object} collisionResolver
     */
    constructor(collisionResolver) {
		this.collisionResolver = collisionResolver;
		this.storage = [];
	}

    /**
     *
     * @param {String} key
     * @param {Array} value
     */
	insertValue(key, value) {
		this.collisionResolver.insertValue(key, value, this.storage);
	}

    /**
     *
     * @param {String} key
     * @returns {*|Array}
     */
	getValue(key) {
		return this.collisionResolver.getValue(key, this.storage);
	}
}


