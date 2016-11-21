export default class Stack {
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

        let item = this.list[this.list.length - 1];
        this.list.length -= 1 ;

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


