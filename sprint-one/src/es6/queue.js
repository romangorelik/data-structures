class Queue {
  constructor() {
    this.counter = 0;
    this.count2 = 0;
    this.count3 = 0;
    this.storage = {};
  };

  enqueue (value) {
    this.storage[this.count3++] = value;
    this.counter++;
  };

  dequeue () {
    if (this.counter > 0) {
      this.counter--;
      var temp = this.storage[this.count2];
      delete this.storage[this.count2];
      this.count2++;
      return temp;
    }
  };

  size () {
    return this.counter;
  };
}
