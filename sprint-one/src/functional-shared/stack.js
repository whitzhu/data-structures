var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = { 
    currentSize: 0,
    add: {}
  };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size: function() {
    return this.currentSize;
  },
  push: function(value) {
    this.add[value] = value;
    this.currentSize++;
  },
  pop: function() {
    this.currentSize === 0 ? 0 : this.currentSize--;
    var addedProperties = Object.keys(this.add);
    var deleteProperty = this.add[addedProperties[addedProperties.length - 1]];
    delete this.add[addedProperties[addedProperties.length - 1]];
    return deleteProperty;
  }
};


