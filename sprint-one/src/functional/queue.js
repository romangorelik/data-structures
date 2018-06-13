var Queue = function() {
  var someInstance = {};
  var counter = 0;
  var count2 = 0;
  var count3 = 0; 

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count3++] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      counter--;
      var temp = storage[count2];
      delete storage[count2];
      count2++;
      return temp;
    }
  };

  if (counter > 0) {
    var temp = storage[--counter];
    delete storage[counter];
    return temp;
  }

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

