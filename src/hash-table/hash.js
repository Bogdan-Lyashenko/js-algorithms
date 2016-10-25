const DEFAULT_LIMIT = 5;

export default class Hash {
	constructor() {
		this.setLimit(DEFAULT_LIMIT);
	}

    /**
     *
     * @param {Number} max
     */
	setLimit(max) {
		this.limit = max;
	}

    /**
     *
     * @param {String} str
     * @returns {number}
     */
	getIntHashFromString(str) {		
		let hash = 0,
			max = this.limit;
		
		for (let i = 0; i < str.length; i++) {
			/*  Operator << shifts the bits of hash left by the number of bits specified (5).
			    Convert dec number to binary, shift on specified bits number and fill empty places with zeroes

			    Example: hash = 14 << 2, hash will have a value of 56:
			    14 is 00001110 in binary shifted left 2 bits - 00111000 is 56 in dec.
			*/
			hash = (hash << 5) + (str[i]).charCodeAt(0);
			
			/*  & - compares each bit of the first operand to the corresponding bit of the second operand.
			    If both bits are 1, result bit is set to 1. Otherwise, result bit is set to 0 (for each pairs).
                01001 & 00101 = 00001 (only last 1 is 1 for both numbers)

			    % - modulo after division,
			    5 / 2 = 4+1, 5 % 2 = 1
			*/
			hash = (hash & hash) % max;
		}
	  
		return hash;
	}
}