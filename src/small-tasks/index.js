import SumCalculator from './sum-calculator.js';
import DiffCalculator from './diff-calculator.js';

class Example {
    testMaxSumOfTwo() {
        console.log('#TestMaxSumOfTwo start.');

        console.assert(5 === SumCalculator.calculateMaxSumOfTwo([1,2,3]));
        console.assert(11 === SumCalculator.calculateMaxSumOfTwo([5,6]));

        let result = SumCalculator.calculateMaxSumOfTwo([45,5,3,4,1]);
        console.log(result);
        console.assert(50 === result);

        try {
            SumCalculator.calculateMaxSumOfTwo([45]);
        } catch (e) {
            console.error(e.message);
        }
        console.log('#TestMaxSumOfTwo end.');

        return this;
    }

    testMaxDiffBetweenTwo() {
        console.log('#Test MaxDiffBetweenTwo start.');
        console.assert(4 === DiffCalculator.calculateMaxDiffBetweenTwoWithOrder([1,2,5]));
        console.assert(9 === DiffCalculator.calculateMaxDiffBetweenTwoWithOrder([45,5,6,14,2]));

        console.assert(1 === DiffCalculator.calculateMaxDiffBetweenAnyTwo([5,6]));
        console.assert(43 === DiffCalculator.calculateMaxDiffBetweenAnyTwo([45,5,6,14,2]));

        try {
            DiffCalculator.calculateMaxDiffBetweenTwoWithOrder([45]);
        } catch (e) {
            console.error(e.message);
        }
        console.log('#Test MaxDiffBetweenTwo end.');

        return this;
    }

}

(new Example()).testMaxSumOfTwo().testMaxDiffBetweenTwo();

