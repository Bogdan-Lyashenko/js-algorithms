import Node from './node.js';

class LinkedList {
    /**
     *
     * @param {Object} data
     */
    constructor(data) {
        this.head = new Node(data);
    }

    /**
     *
     * @param {Object} data
     */
    appendFirst(data) {
        var newHead = new Node(data);

        newHead.next = this.head;
        this.head = newHead;
    }

    /**
     *
     * @param {Object} data
     */
    appendToTail(data) {
        let currentTailNode = this.getTailNode();
        currentTailNode.next = new Node(data);
    }

    /**
     *
     * @returns {Object}
     */
    getTailNode() {
        var node = this.head;

        while (node.next) {
            node = node.next;
        }

        return node;
    }

    /**
     *
     * @param {Object} data
     * @returns {Object=}
     */
    findNode(data) {
        var pointer = this.head,
            prevNode = null;

        while (pointer) {
            if (pointer.isEqual(data)) {
                pointer.extension = {prevNode};
                return pointer;
            }

            prevNode = pointer;
            pointer = pointer.next;
        }

        return null;
    }

    /**
     *
     * @param {Object} data
     * @returns {Object=}
     */
    delete(data) {
        var node = this.findNode(data);

        if (!node) {
            return;
        }

        if (!node.extension.prevNode) {
            this.head = node.next;
            return;
        }

        node.extension.prevNode.next = node.next;
    }

    logList() {
        var node = this.head;

        while (node) {
            console.log(node.getLogData());
            node = node.next;
        }
    }
}

class Example {
    constructor() {
        this.list = new LinkedList({name: 'head'});
    }

    testNodesAdding() {
        this.list.appendToTail({name: 'second', id: 123});
        this.list.appendToTail({name: 'third'});

        this.list.appendFirst({name: 'new head'});

        this.list.logList();
        console.log('---------------');

        return this;
    }

    testNodesRemoving() {
        this.list.delete({id: 123});

        this.list.logList();
    }
}

(new Example()).testNodesAdding().testNodesRemoving();

