

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (Array.isArray(bucket)) {
    //traverse through bucket 
    for ( var i = 0; i < bucket.length; i++) {
      //if duplicate in the tuple[0]
      if (bucket[i][0] === k ) {
        //replace tuple[1] === v
        bucket[i][1] = v;
      } else {
        //if no duplicate
        bucket.push([k, v]);
        //this._storage.set(index, bucket.push([k, v]));
      }
    }

  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //traverse through this storage
  var bucket = this._storage.get(index);
    //traverse through bucket
  for ( var i = 0; i < bucket.length; i++ ) {
    //if tuple[0] === k then return tuple[1]
    if ( bucket[i][0] === k ) {
      return bucket[i][1];
    }
  }  


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //traverse through this storage
  var bucket = this._storage.get(index);
  //traverse through bucket
  for ( var i = 0; i < bucket.length; i++ ) {
    //if tuple[0] === k then return tuple[1]
    if ( bucket[i][0] === k ) {
      bucket.splice(i, 1);
    }
  }  

};



/*
 * Complexity: What is the time complexity of the above functions?
 * overall: constant
 * insert: constant
 * retrieve: constant
 * remove: constant
 */


