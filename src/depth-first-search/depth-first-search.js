import Stack from '../stack/stack.js';

export default class DepthFirstSearch {

    /**
     *
     * @param {Object} startNode
     * @param {Object} goalNode
     * @returns {Object|Null}
     */
    static search (startNode, goalNode) {
        let node,
            stack = new Stack();

        DepthFirstSearch.resetVisitedStatus(startNode);

        stack.push(startNode);
        while (!stack.isEmpty()) {
            node = stack.pop();

            if (node.isEqualToNode(goalNode)) {
                return node;
            }

            if (!node.getVisited()) {
                node.setVisited(true);

                node.getChildren().forEach((child)=> {
                    stack.push(child);
                });
            }
        }

        return null;
    }

    /**
     *
     * @param {Object|Array} node
     */
    static resetVisitedStatus(node) {
        node.setVisited(false);

        node.getChildren().forEach((child)=> {
            DepthFirstSearch.resetVisitedStatus(child);
        });
    }
}


