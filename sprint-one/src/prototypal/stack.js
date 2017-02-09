var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.currentSize = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  size: function() {
    return this.currentSize;
  },
  push: function(value) {
    this.storage[value] = value;
    return this.currentSize++;
  },
  pop: function() {
    var array = Object.keys(this.storage); //array is an array of current object keys [a, b]
    var toDelete = array[array.length - 1];
    this.currentSize === 0 ? 0 : this.currentSize--;
    delete this.storage[toDelete];
    return toDelete;
  }
};


