export default class BubbleSort {
    /**
     *
     * @param {Array} list
     */
    constructor(list) {
        this.list = list;
	}

    sort() {
        let list = this.list,
            n = list.length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (list[j] > list[j+1]) {
                    this.swapItemsInList(j, j + 1);
                }
            }
        }
    }

    /**
     *
     * @param {Number} currentIndex
     * @param {Number} nextIndex
     */
    swapItemsInList(currentIndex, nextIndex) {
        let list = this.list,
            temp;

        temp = list[currentIndex];
        list[currentIndex] = list[nextIndex];
        list[nextIndex] = temp;
    }

    /**
     *
     * @returns {Array}
     */
    getList() {
        return this.list;
    }
}


