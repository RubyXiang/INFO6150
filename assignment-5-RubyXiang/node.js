/**
 * A Node represents an HTML Element. A node can have a tag name,
 * a list of CSS classes and a list of children nodes.
 */
class Node {

    constructor(tag, children, classes, id) {
        // Tag name of the node.
        this.tag = tag;
        // Array of CSS class names (string) on this element.
        this.classes = classes;
        // Array of child nodes.
        this.children = children; // All children are of type Node
        // ID name of the node.
        this.id = id;
    }

    /**
     * Returns descendent nodes matching the selector. Selector can be
     * a tag name or a CSS class name.
     *
     * For example:
     *
     * 1.
     * <div>
     *   <span id="span-1"></span>
     *   <span id="span-2"></span>
     *   <div>
     *     <span id="span-3"></span>
     *   </div>
     * </div>
     * Selector `span` should return 3 span nodes in this order
     * span-1 -> span-2 -> span-3.
     *
     * 2.
     * <div>
     *   <span id="span-1" class="note"></span>
     *   <span id="span-2"></span>
     *   <div>
     *     <span id="span-3"></span>
     *   </div>
     * </div>
     * Selector `.note` should return one span node with `note` class.
     *
     * 3.
     * <div>
     *   <span id="span-1"></span>
     *   <span id="span-2"></span>
     *   <article>
     *     <div>
     *       <span id="span-3"></span>
     *     </div>
     *   </article>
     * </div>
     * Selector `div span` should return three span nodes in this order
     * span-1 -> span-2 -> span-3.
     *
     * @param {string} the selector string.
     * @returns {Array} Array of descendent nodes.
     * @public
     */
    search(selector) {
        try {
            if (selector == null) {
                throw "warning: selector can not be empty!";
            }
        } catch (err) {
            console.log(err);
            return null;
        }

        BFSTraverse(this, selector);

        function BFSTraverse(rootNodes, selector) {
            if (selector.split(" ").length === 1) {
                var nodes = [];
                if (rootNodes != null) {
                    var queue = [];
                    queue.unshift(rootNodes);
                    while (queue.length != 0) {
                        var item = queue.shift();
                        if (item.tag === selector || ("." + item.classes) === selector) {
                            nodes.push(item.id);
                        }
                        var children = item.children;
                        for (var i = 0; i < children.length; i++)
                            queue.push(children[i]);
                    }
                }
                console.log(nodes);
            } else {
                var arr = selector.split(" ");
                var nodes = [];
                var temp = [];
                if (rootNodes != null) {
                    var queue = [];
                    queue.unshift(rootNodes);
                    while (queue.length != 0) {
                        var item = queue.shift();
                        if (item.tag === arr[0]) {
                            for(var i = 0; i < item.children.length; i++){
                              if(item.children[i].tag === arr[1]){
                                nodes.push(item.children[i].id);
                              }
                            }
                        }
                      var children = item.children;
                        for (var i = 0; i < children.length; i++) {
                            queue.push(children[i]);
                        }
                    }
                }
                console.log(nodes);
            }
        }

    }

}

let p1 = new Node("p", [], "sub1-p1 note", "para-1");
let label1 = new Node("label", [], null, "lbl-1");
let section1 = new Node("section", [label1], null, "sec-1");
let span1 = new Node("span", [], "note", "span-1");
let span2 = new Node("span", [], null, "span-2");
let span3 = new Node("span", [], "sub1-span3", "span-3");
let span4 = new Node("span", [], "mania", "span-4");
let span5 = new Node("span", [], "note mania", "span-5");
let randomNode = new Node("span", [], "randomSpan", "span-6");
let divNode4 = new Node("div", [span4, span5], null, "div-4");
let divNode3 = new Node("div", [section1], "subContainer2", "div-3");
let divNode2 = new Node("div", [p1, span3], "subContainer1", "div-2");
let divNode1 = new Node("div", [span1, span2, divNode2, divNode3, divNode4], "mainContainer", "div-1");
let body = new Node("body", [divNode1, randomNode], null, "content");

// Testing
console.log("Started...");

// Test case 1 -
console.log("test case 1-");
divNode1.search("span");

// Test case 2 -
console.log("test case 2-");
divNode1.search(".note");

// Test case 3 -
console.log("test case 3-");
divNode1.search("label");

// Test case 4 -
console.log("test case 4-");
p1.search(".note");

// Test case 5 -
console.log("test case 5-");
divNode1.search("div");

// Test case 6 -
console.log("test case 6-");
randomNode.search("div");

// Test case 7 -
console.log("test case 7-");
divNode2.search("section");

// Test case 8 -
console.log("test case 8-");
body.search();

// Error conditions need to be handled
// invalid input need to be handled

// Test case 9 -
console.log("test case 9-");
body.search("section");

// Test case 10 -
console.log("test case 10-");
body.search("div span");
