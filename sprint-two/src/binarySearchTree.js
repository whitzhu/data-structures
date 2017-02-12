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
  var result = false;
  if ( this.value === val ) {
    result = true;
  } 

  var inspectRightNode = function(obj) {
    if ( obj.value === val ) {
      result = true;
    } else if ( obj.right !== null ) {
      inspectRightNode(obj.right);
    } else if ( obj.right === null ) {
      return result;
    }
  };

  var inspectLeftNode = function(obj) {
    if ( obj.value === val ) {
      result = true;
    } else if ( obj.left !== null ) {
      inspectLeftNode(obj.left);
    } else if ( obj.left === null ) {
      return result;
    }
  };
   
  if ( val > this.value ) {
    inspectRightNode(this.right);
  }
  if ( val < this.value ) {
    inspectLeftNode(this.left);
  }

  return result;

};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  // which accepts a callback and executes it on every value contained in the tree
  func(this.value);

  var inspectRightNode = function(obj) {
    func(obj.value);
    if ( obj.right !== null ) {
      inspectRightNode(obj.right);
    }
    if ( obj.left !== null) {
      inspectLeftNode(obj.left);
    }
  };

  var inspectLeftNode = function(obj) {
    func(obj.value);
    if ( obj.right !== null ) {
      inspectRightNode(obj.right);
    }
    if ( obj.left !== null) {
      inspectLeftNode(obj.left);
    }
  };
 
  if ( this.right !== null ) {
    inspectRightNode(this.right);
  }
  if ( this.left !== null) {
    inspectLeftNode(this.left);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
