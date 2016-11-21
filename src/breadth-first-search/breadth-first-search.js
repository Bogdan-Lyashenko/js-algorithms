import Queue from '../queue/queue.js';

export default class BreadthFirstSearch {

    /**
     *
     * @param {Object} startNode
     * @param {Object} goalNode
     * @returns {Object|Null}
     */
    static search (startNode, goalNode) {
        let node,
            queue = new Queue();

        BreadthFirstSearch.resetVisitedStatus(startNode);

        queue.push(startNode);
        startNode.setVisited(true);

        while (!queue.isEmpty()) {
            node = queue.pop();

            if (node.isEqualToNode(goalNode)) {
                return node;
            }

            node.getChildren().forEach((child)=> {
                if (!child.getVisited()) {
                    queue.push(child);

                    child.setVisited(true);
                }
            });
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
            BreadthFirstSearch.resetVisitedStatus(child);
        });
    }
}


