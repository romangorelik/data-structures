var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.count2 = 0;
  someInstance.count3 = 0;
  someInstance.storage = {};


  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count3++] = value;
    this.counter++;
  },

  dequeue: function () {
    if (this.counter > 0) {
      this.counter--;
      var temp = this.storage[this.count2];
      delete this.storage[this.count2];
      this.count2++;
      return temp;
    }
  },

  size: function () {
    return this.counter;
  }
};


