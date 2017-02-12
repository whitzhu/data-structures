

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

/*Our Code
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (Array.isArray(bucket)) {
    //traverse through bucket 
    for ( var i = 0; i < bucket.length; i++) {
      //if duplicate in the tuple[0]
      var tuple = bucket[i];
      if (tuple[0] === k ) {
        //replace tuple[1] === v
        tuple[1] = v;
      } else {
        //if no duplicate
        bucket.push([k, v]);
        this._size++;
        //this._storage.set(index, bucket.push([k, v]));
      }
    }
  } else {
    this._storage.set(index, [[k, v]]);
    this._size++;
  }

  if ( (this._size / this._limit >= 0.75) ) {
    this.hashMigration( this._limit * 2 );
  } 
};
*/

//Fred's Code
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if ( !bucket ) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var found = false;
  for ( var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k ) {
      tuple[1] = v;
      found = true;
      break;
    }
  }
  if ( !found ) {
    bucket.push([k, v]); 
    this._size++;
    if ( this._size > this._limit * 0.75 ) {
      this.hashMigration(this._limit * 2 );
    }
  }
};


//Our Code
//There something wrong with retrieve.... no bucket
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //traverse through this storage
  var bucket = this._storage.get(index) || [];
    //traverse through bucket
  for ( var i = 0; i < bucket.length; i++ ) {
    //if tuple[0] === k then return tuple[1]
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      return tuple[1];
    }
  }
  return undefined;  
};

/*Our Code
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //traverse through this storage
  var bucket = this._storage.get(index);
  //traverse through bucket
  for ( var i = 0; i < bucket.length; i++ ) {
    //if tuple[0] === k then return tuple[1]
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      bucket.splice(i, 1);
      this._size--;
      if ( (this._size / this._limit < 0.25 ) && this.limit >= 8) {
        this.hashMigration( this._limit / 2 );
      }
      return tuple[1];      
    }
  } 
  return undefined; 
};
*/

//Fred's code
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if ( !bucket ) {
    return null; 
  }

  for ( var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if ( tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      if ( this._size < this._limit * 0.25 ) {
        //this._resize( this._limit / 2 );
        this.hashMigration( this._limit / 2 );
      }
      return tuple[1];
    }
  }
  return undefined;
};



HashTable.prototype.hashMigration = function(newLimit) {
  //call each of bucket of the storage
  
 
  debugger;
  var oldStorage = Object.assign({}, this._storage);
  this._storage = LimitedArray(newLimit);
  this._size = 0;
  this._limit = newLimit;

  oldStorage.each( function(value) {
    console.log('value', value);
    if ( value !== undefined) {
      for ( var i = 0; value.length; i++ ) {
        var tuple = value[i];
        console.log('tuple', tuple);
        this.insert(tuple[0], tuple[1]);
      }
    }
  }.bind(this));   
};


/*
 * Complexity: What is the time complexity of the above functions?
 * overall: constant
 * insert: constant
 * retrieve: constant
 * remove: constant
 */


