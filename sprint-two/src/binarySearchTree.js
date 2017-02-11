var BinarySearchTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  //Which accepts a value and places in the tree in the correct position.
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

BinarySearchTree.prototype.contains = function(val) {
  //which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree

  var inspectRightNode = function(obj) {
    if ( obj.value === val ) {
      result = true;
    } else if ( obj.right !== undefined || obj.right !== null ) {
      inspectRightNode(obj.right.value);
    }
  };

  var inspectLeftNode = function(obj) {
    if ( obj.value === val ) {
      result = true;
    } else if ( obj.left !== undefined || obj.left !== null ) {
      inspectLeftNode(obj.left.value);
    }
  };

  debugger;
  var result = false;
  if ( this.value === val ) {
    result = true;
  } 
  if ( val > this.value ) {
    inspectRightNode(this.right);
  }
  if ( val < this.value ) {
    inspectLeftNode(this.left);
  }

  return result;


  /*
  //if this node value equals val
  if ( this.value === val ) { 
    //then return true
    trigger = true;
    return trigger;
  }
  //if val is greater than node value
  if ( val > this.value ) {
    //if node right exist
    if ( this.right !== undefined || this.right !== null ) {
      //then inspect node right
      this.contains.call(this.right, val);
    } 
    //if val is less than node value
  } else if ( val < this.value ) {
    //if node left exist
    if ( this.left !== undefined || this.right !== null ) {
      //then inspect node left
      this.contains.call(this.left, val);
    } 
  }
  */

};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  // which accepts a callback and executes it on every value contained in the tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
