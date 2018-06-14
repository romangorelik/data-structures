var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var itemIndex = this._storage.indexOf(item);
  var tempVal = this._storage[itemIndex];
  this._storage.splice(itemIndex, 1);
  return tempVal; 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
