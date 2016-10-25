import Hash from './hash.js';

export default class OpenAddressingCollisionResolution {
    constructor() {
        this.hash = new Hash();
    }

    /**
     *
     * @param {String} key
     * @param {Array} value
     * @param {Array} storage
     */
    insertValue(key, value, storage) {
        let index = this.hash.getIntHashFromString(key);

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
    getValue(key, storage) {
        let index = this.hash.getIntHashFromString(key),
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
}