const IdGenerator = {
    /**
     *
     * @param {Number=} length
     * @returns {string}
     */
    generate(length = 30) {
        let str = '';

        for (let i = 0; i < Math.ceil(length / 5); i++) {
            str += Math.floor((1 + Math.random()) * 0x10000).toString(16);
        }

        return str.substr(0, length);
    }
};

export default IdGenerator;