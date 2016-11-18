export default class BreadthFirstSearch {

    /**
     *
     * @param startNode
     * @param goalNode
     * @returns {Object|Null}
     */
    static search (startNode, goalNode) {
        let node,
            queue = [startNode];

        BreadthFirstSearch.resetVisitedStatus(startNode);

        startNode.setVisited(true);
        while (queue.length) {
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
     * @param {Object} root
     */
    static resetVisitedStatus(root) {
        let node,
            queue = [root];

        while (queue.length) {
            node = queue.pop();
            node.setVisited(false);

            node.getChildren().forEach((child)=> {
                if (child.getVisited()) {
                    queue.push(child);
                }
            });
        }
    }
}


