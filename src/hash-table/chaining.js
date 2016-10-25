import Hash from './hash.js';

export default class ChainingCollisionResolution {
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
		let index = this.hash.getIntHashFromString(key),
			innerIndex;
		
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
	getValue(key, storage) {
		let index = this.hash.getIntHashFromString(key),
			innerList;
			
		if (storage[index].length == 1) {
			return storage[index][0];	
		}
		
		innerList = storage[index];
		for (let i = 0, length = innerList.length; i < length; i++) {
			if (innerList[i][0] === key) {
				return innerList[i];
			}
		}
		
		return null;
	}
}
