var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  

  // your code here
  newTree.children = new Array();  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value) {

  this.children.push(Tree(value));
  console.log(this.children);
};

treeMethods.contains = function(target) {
  
  var result = false;
  var inspectChild = function(obj) {
    //if child's value === target then return true
    if (obj.value === target) {
      result = true;
    }
    //if not, then iterate through that element's children
    for (var i = 0; i < obj.children.length; i++ ) {
      inspectChild(obj.children[i]);
    }
  };

  for ( var i = 0; i < this.children.length; i++) {
    inspectChild(this.children[i]);
  }

  return result;

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
