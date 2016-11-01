import LinkedList from './linked-list.js';

class Example {
    constructor() {
        this.list = new LinkedList({name: 'head'});
    }

    testNodesAdding() {
        this.list.appendToTail({name: 'second', id: 123});
        this.list.appendToTail({name: 'third'});
        this.list.appendFirst({name: 'new head'});

        this.list.logList();

        return this;
    }

    testNodesRemoving() {
        this.list.delete({id: 123});

        console.log('---------------');
        this.list.logList();
    }
}

(new Example()).testNodesAdding().testNodesRemoving();

