var Queue = function() {
  this.counter = 0;
  this.count2 = 0;
  this.count3 = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.count3++] = value;
  this.counter++;
};

Queue.prototype.dequeue = function () {
  if (this.counter > 0) {
    this.counter--;
    var temp = this.storage[this.count2];
    delete this.storage[this.count2];
    this.count2++;
    return temp;
  }
};

Queue.prototype.size = function () {
  return this.counter;
};


