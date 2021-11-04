// Adjacency Matrix
const adjMat = [
  [0, 0, 0], // 0 represents no connection, 1 presents connection
  [1, 0, 0], // Looks like A <- B <- C
  [0, 1, 0],
];

// Depth First Search

// Breadth First Search

const breadthFirstSearch = (startNode) => {
  const visitedNodes = new Set(); // Provides conditional just so we dont run an infinite loop
  const queue = [startNode]; // initialize the queue with the starting node
};
