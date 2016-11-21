import DepthFirstSearch from './depth-first-search.js';
import Node from './node.js';

class Example {

    /**
     * ----0---
     * --1---2-
     * -3-4---5
     * 6-------7
     *
     * @returns {Node}
     */
    getFirstExampleTree() {
        //level 0
        var root = new Node();

        //level 1
        root.addChildNode([new Node(), new Node()]);

        //level 2
        root.getChildAt(0).addChildNode([new Node(), new Node({name: 'goal node id#4'})]);
        root.getChildAt(1).addChildNode(new Node());

        //level 3
        root.getChildAt(0).getChildAt(0).addChildNode(new Node());
        root.getChildAt(1).getChildAt(0).addChildNode(new Node());

        return root;
    }

    testFirstExampleSearch() {
        let root = this.getFirstExampleTree();

        //goal node id#4
        var resultNode = DepthFirstSearch.search(root, {id: 4});
        console.log(resultNode);

        //other tests
        console.log(DepthFirstSearch.search(root, {id: 7}));
        console.log(DepthFirstSearch.search(root, {id: 7}));
        console.log(DepthFirstSearch.search(root, {id: 2}));
        console.log(DepthFirstSearch.search(root, {id: 8}));
    }
}

(new Example()).testFirstExampleSearch();

