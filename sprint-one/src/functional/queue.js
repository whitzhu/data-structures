var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  someInstance.enqueue = function(value) {
    storage[value] = value;
    size++;
  };

  someInstance.dequeue = function() {
    size--;
    var addArray = Object.keys(storage);
    var popResult = storage[addArray[0]];
    delete storage[addArray[0]];
    return popResult;
  };

  someInstance.size = function() {
    return Math.max(size, 0);
  };

  return someInstance;
};
