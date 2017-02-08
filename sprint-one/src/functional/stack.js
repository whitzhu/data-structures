var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //Idea #1: set storage property as current size value
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    var pop;
    if (size > 0) {
      pop = storage[size - 1];
      size--;
      return pop; 
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
