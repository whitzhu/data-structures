var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentSize = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.currentSize;
};

Stack.prototype.push = function(value) {
  this.storage[value] = value;
  return this.currentSize++;
};

Stack.prototype.pop = function() {
  var array = Object.keys(this.storage);
  var toDelete = array[array.length - 1];
  delete this.storage[toDelete];
  this.currentSize === 0 ? 0 : this.currentSize--;
  return toDelete;
};
