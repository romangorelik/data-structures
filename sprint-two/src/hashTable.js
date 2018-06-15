
// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   if (this._storage.get(index) === undefined) {
//     this._storage.set(index, []);
//   }
//   this._storage.get(index)[k] = v;
  
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   console.log(this._storage.get(index)[k]);
//   return this._storage.get(index)[k];
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   delete this._storage.get(index)[k];
// };


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
      return;
    } 
  }

  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      delete this._storage.get(index)[i][0];
    } 
  }
};


// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var newHash = new HashTable();

//   if (this._storage[index] === undefined) {
//     this._storage.set(index, v);
//   } else if (this._storage.get(index) instanceof HashTable){
//     this._storage.get(index).insert(k, v);
//   } else {
//     var temp = this._storage.get(index);
//     this._storage.set(index, newHash);
//   }
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */