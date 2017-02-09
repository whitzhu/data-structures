var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    currentSize: 0,
    storage: {}
  };
  _.extend(obj, queueMethods);
  return obj; 
};

var queueMethods = {
  size: function() {
    return this.currentSize;
  },
  enqueue: function(value) {
    this.currentSize++;
    this.storage[value] = value;
  },
  dequeue: function() {
    var array = Object.keys(this.storage);
    this.currentSize === 0 ? 0 : this.currentSize--;
    var deleteProperty = array[0];
    delete this.storage[array[0]];
    return deleteProperty;
  }
};



