var IdCounter = 0;

export default class Node {
    /**
     *
     * @param {Object} nodeConfigData
     */
    constructor(nodeConfigData) {
        this.data = nodeConfigData;

        this.id = IdCounter++;
        this.children = [];
        this.setVisited(false);
    }

    /**
     *
     * @param {Boolean} isVisited
     */
    setVisited(isVisited) {
        this.isVisited = isVisited;
    }

    /**
     *
     * @returns {Boolean}
     */
    getVisited() {
        return this.isVisited;
    }

    /**
     *
     * @param {Object|Array} node
     */
    addChildNode(node) {
        if (!Array.isArray(node)) {
            this.children.push(node);
            return;
        }

        node.forEach((singleNode) => {
            this.children.push(singleNode);
        });
    }

    /**
     *
     * @returns {Array}
     */
    getChildren() {
        return this.children;
    }

    /**
     *
     * @param {Number} index
     * @returns {Object}
     */
    getChildAt(index) {
        return this.children[index];
    }

    /***
     *
     * @param {Object} node
     * @returns {boolean}
     */
    isEqualToNode(node) {
        return this.id === node.id;
    }
}


