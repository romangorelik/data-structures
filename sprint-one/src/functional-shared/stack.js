var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.counter++] = value;
  },

  pop: function () {
    if (this.counter > 0) {
      var temp = this.storage[--this.counter];
      delete this.storage[this.counter];
      return temp;
    }
  },

  size: function () {
    return this.counter;
  }
};
