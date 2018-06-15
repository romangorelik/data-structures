var BinarySearchTree = function(value) {
  var tree = Object.create(bnTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var bnTreeMethods = {};

bnTreeMethods.insert = function (value) {
  var child = BinarySearchTree(value);
  if (this.value === value) {
    return;
  }

  if (this.value > value) {
    if (this.left === null) {
      this.left = child;
    } else {
      this.left.insert(child.value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = child;
    } else {
      this.right.insert(child.value);
    }
  }
};

bnTreeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }

  if (this.value > target) {
    return this.left !== null && this.left.contains(target); 
  } else {
    return this.right !== null && this.right.contains(target);
  }
};



bnTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);  
  } 

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


