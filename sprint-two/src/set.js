var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return _.reduce(this._storage, function(result, element) {
    return result || element === item;
  }, false);

};

setPrototype.remove = function(item) {
  for ( var key in this._storage ) {
    if ( this._storage[key] === item ) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add O(1)
 * contains O(n)
 * remove O(n)
 */
