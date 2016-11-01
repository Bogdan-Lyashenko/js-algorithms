import BinarySearch from './binary-search.js';

class Example {
    constructor() {
        this.binarySearch = new BinarySearch([1, 4, 11, 15, 18, 21, 30, 46, 49]);
    }

    testSearch() {
        console.log(this.binarySearch.indexSearch(11));
        console.log(this.binarySearch.indexSearch(101));
        console.log(this.binarySearch.indexSearch(30));
    }
}

(new Example()).testSearch();

