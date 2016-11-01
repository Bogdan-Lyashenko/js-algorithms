import Queue from './queue.js';

class Example {
    constructor() {
        this.queue = new Queue();
    }

    testPush() {
        this.queue.push(1);
        this.queue.push(2);
        this.queue.push(3);

        return this;
    }

    testPop() {
        console.log(this.queue.pop());
        console.log(this.queue.pop());
    }
}

(new Example()).testPush().testPop();

