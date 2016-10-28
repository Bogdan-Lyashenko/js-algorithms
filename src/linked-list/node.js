import IdGenerator from './id-generator.js';

export default class Node {
    /**
     *
     * @param {Object} data
     */
	constructor(data) {
		this.data = data;
        this.id = data.id || IdGenerator.generate();
	}

    /**
     *
     * @param {Object} data
     * @param {Object} target
     */
    insert(data) {
        var nextNode = new Node(data),
            target = this;

        nextNode.next = target.next;
        target.next = nextNode;
    }

    /**
     *
     * @param {Object} target
     * @returns {boolean}
     */
    isEqual(target) {
        if (!target) {
            return false;
        }

        return this.id === target.id;
    }

    /**
     *
     * @returns {String}
     */
    getLogData() {
        return this.data.name;
    }
}
