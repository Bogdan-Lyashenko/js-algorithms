export default class SumCalculator {
    /**
     *
     * @param {Array} list
     * @returns {Number}
     */
    static calculateMaxSumOfTwo(list) {
        if (list.length < 2) {
            throw new Error('List should contains at least 2 elements');
        }

        if (list.length === 2) {
            return list[0] + list[1];
        }

        let firstMax = list[0],
            secondMax = list[1];

        if (firstMax < secondMax) {
            firstMax = list[1];
            secondMax = list[0];
        }

        for (let i = 2, length = list.length; i < length; i++) {
            if (list[i] > firstMax) {
                secondMax = firstMax;
                firstMax = list[i];
            } else if (list[i] > secondMax) {
                secondMax = list[i];
            }
        }

        return firstMax + secondMax;
    }
}


