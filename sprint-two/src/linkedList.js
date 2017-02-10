var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  // _.extend(list, Node);

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head === list.tail) {
      list.head.next = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    } 
    return list.tail.value;
    //return list.head === null ? list.head = list.tail : list.head.next = list.tail;
  };

  list.removeHead = function() {
    var toDelete = list.head.value;
    list.head = list.head.next;
    return toDelete;
    //return 'removeHead';
  };

  list.contains = function(target) {
    //start with the head
    var startingPoint = list.head;
    //check if node's value = target, return true

    var searchNode = function (startingPoint) {
      if (startingPoint.value === target) {
        return true;
      }
      //traverse through our data set 
      //node's next 
      var nextNode = startingPoint.next;
      if (nextNode === null && startingPoint.value !== target) {
        // IS null then return false
        return false;
      }
      // NOT null then call contains on node's next
      return searchNode(nextNode);
    };
    
    return searchNode(startingPoint);
  

  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
