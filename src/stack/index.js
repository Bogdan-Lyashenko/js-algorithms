import Stack from './stack.js';

class Example {
    constructor() {
        this.stack = new Stack();
    }

    testPush() {
        this.stack.push(1);
        this.stack.push(2);
        this.stack.push(3);

        return this;
    }

    testPop() {
        console.log(this.stack.pop());
        console.log(this.stack.pop());
    }
}

(new Example()).testPush().testPop();

