var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.currentSize = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  size: function() {
    return this.currentSize;
  },
  enqueue: function(value) {
    this.storage[value] = value;
    return this.currentSize++;
  }, 
  dequeue: function() {
    var array = Object.keys(this.storage);
    var toDelete = array[0];
    this.currentSize === 0 ? 0 : this.currentSize--;
    delete this.storage[array[0]];
    return toDelete;
  }
};


