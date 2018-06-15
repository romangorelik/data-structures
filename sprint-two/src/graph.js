

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = {value: value, edge : [] };
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return _.some(this.nodes, function(node) {
    return node.value === target;
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  var deleteVal = _.detect(this.nodes, function(node) {
    return node.value === target;
  });

  var deleteIndex = this.nodes.indexOf(deleteVal);

  this.nodes.splice(deleteIndex, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var from = _.find(this.nodes, function(node) {
    return node.value === fromNode;
  });

  var to = _.find(this.nodes, function(node) {
    return node.value === toNode;
  });

  return from.edge.includes(to);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var from = _.find(this.nodes, function(node) {
    return fromNode === node.value;
  });

  var to = _.find(this.nodes, function(node) {
    return toNode === node.value;
  });

  from.edge.push(to);
  to.edge.push(from);
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var from = _.find(this.nodes, function(node) {
    return fromNode === node.value;
  });

  var to = _.find(this.nodes, function(node) {
    return toNode === node.value;
  });

  var fromInd = from.edge.indexOf(to);
  var toInd = to.edge.indexOf(from);

  from.edge.splice(fromInd, 1);
  to.edge.splice(toInd, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


