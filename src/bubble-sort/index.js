import BubbleSort from './bubble-sort.js';

class Example {
    constructor() {
        this.bubbleSort = new BubbleSort([7, 4, 11, 5, 8, 1, 0, 6, 49]);
    }

    testSort() {
        this.bubbleSort.sort();
        console.log(this.bubbleSort.getList());
    }
}

(new Example()).testSort();

