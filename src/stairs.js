module.exports = Stairs;

function Stairs(rungs) {
  if (rungs <= 0) throw new Error("Rungs should be greater than 0");
  this.rungs = rungs;
}

function Node(distance) {
  this.left = null;
  this.right = null;
  this.distance = distance;
}

function Tree(distance) {
  var node = new Node(distance);
  this.root = node;
}

Stairs.prototype.countDifferentWaysToReachTop = function() {
  this.possibilitiesTree = new Tree(0);
  this.possibilitiesTree.insertNodesUntilRungsReached.call(this, this.possibilitiesTree.root);
  return this.possibilitiesTree.countLeafNodesMatchingDistance(this.possibilitiesTree.root);
};

Tree.prototype.insertNodesUntilRungsReached = function(currentNode) {
  if (currentNode.distance + 1 <= this.rungs) {
    var leftNode = new Node(currentNode.distance + 1);
    currentNode.left = leftNode;
    this.possibilitiesTree.insertNodesUntilRungsReached.call(this, leftNode);
  }

  if (currentNode.distance + 2 <= this.rungs) {
    var rightNode = new Node(currentNode.distance + 2);
    currentNode.right = rightNode;
    this.possibilitiesTree.insertNodesUntilRungsReached.call(this, rightNode);
  }
}

Tree.prototype.countLeafNodesMatchingDistance = function(currentNode) {
  if (currentNode == null) return 0;

  if (currentNode.left == null && currentNode.right == null) {
    return 1;
  }

  return this.countLeafNodesMatchingDistance(currentNode.left, this.rungs) +
        this.countLeafNodesMatchingDistance(currentNode.right, this.rungs);
}
