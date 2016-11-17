export default class DiffCalculator {
    /**
     * Requirement: i < j, a[j] - a[i] ~ MAX
     *
     * @param {Array} list
     * @returns {Number}
     */
    static calculateMaxDiffBetweenTwoWithOrder(list) {
        if (list.length < 2) {
            throw new Error('List should contains at least 2 elements');
        }

        let maxDiff = list[1] - list[0],
            minElement = list[0];

        for (let i = 1, length = list.length; i < length; i++) {
            if (list[i] - minElement > maxDiff) {
                maxDiff = list[i] - minElement;
            }

            if (list[i] < minElement) {
                minElement = list[i];
            }
        }

        return maxDiff;
    }

    /**
     *
     * @param {Array} list
     * @returns {Number}
     */
    static calculateMaxDiffBetweenAnyTwo(list) {
        if (list.length < 2) {
            throw new Error('List should contains at least 2 elements');
        }

        let min = list[0],
            max = list[1];

        if (min > max) {
            min = list[1];
            max = list[0];
        }

        if (list.length === 2) {
            return max - min;
        }

        for (let i = 2, length = list.length; i < length; i++) {
            if (list[i] > max) {
                max = list[i];
            }

            if (list[i] < min) {
                min = list[i];
            }
        }

        return max - min;
    }
}


