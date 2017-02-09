var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentSize = 0;
  this.storage = {};
};


Queue.prototype.size = function() {
  return this.currentSize;
};

Queue.prototype.enqueue = function(value) {
  this.storage[value] = value;
  return this.currentSize++;
};

Queue.prototype.dequeue = function() {
  var array = Object.keys(this.storage);
  var toDelete = array[0];
  this.currentSize === 0 ? 0 : this.currentSize--;
  delete this.storage[toDelete];
  return toDelete;
};