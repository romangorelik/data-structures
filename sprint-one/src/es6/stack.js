class Stack {
  constructor() {
    this.storage = {};
    this.counter = 0;
  }


  push(value) {
    this.storage[this.counter++] = value;
  };

  pop() {
    if (this.counter > 0) {
      var temp = this.storage[--this.counter];
      delete this.storage[this.counter];
      return temp;
    }
  };

  size () {
    return this.counter;
  }
}