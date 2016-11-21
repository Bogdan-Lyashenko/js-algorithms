export default class Queue {
    constructor() {
        this.list = [];
	}

    /**
     *
     * @param {Object} item
     */
    push(item) {
        this.list.push(item);
    }

    /**
     *
     * @returns {Object}
     */
    pop() {
        if (!this.list.length) {
            return null;
        }

        let item = this.list[0];
        this.list = this.list.slice(1);

        return item;
    }

    /**
     *
     * @returns {boolean}
     */
    isEmpty() {
        return this.list.length === 0;
    }
}


