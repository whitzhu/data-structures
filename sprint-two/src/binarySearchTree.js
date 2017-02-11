var BinarySearchTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  //Which accepts a value and places in the tree in the correct position.
  debugger;

  // if value greater than current node 
  if ( val > this.value ) {
    // check availability of node right
      //if node right is empty
    if ( this.right === undefined || this.right === null ) {
      // node right = value
      this.right = new BinarySearchTree(val);
    //if node right is not empty
    } else {
      // recurse using node right
      this.insert.call(this.right, val);
    }
  }

  // if value less than current node 
  if ( val < this.value ) {
    // check availability of node left
    //if node left is empty
    if ( this.left === undefined || this.left === null ) {
      // node left = value
      this.left = new BinarySearchTree(val);
      //BinarySearchTree.call(window, val);
      //if node left is not empty
    } else {
      // recurse using node left
      this.insert.call(this.left, val);
    }
  }


};

BinarySearchTree.prototype.contains = function(value) {
  //which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  // which accepts a callback and executes it on every value contained in the tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
