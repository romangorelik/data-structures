var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.counter++] = value;
}

Stack.prototype.pop = function () {
  if (this.counter > 0) {
    var temp = this.storage[--this.counter];
    delete this.storage[this.counter];
    return temp;
  }
}

Stack.prototype.size = function () {
  return this.counter;
}

