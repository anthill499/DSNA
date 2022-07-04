import GraphNode from "./classes.js";

const ANode = new GraphNode(`A Node Data`);
const BNode = new GraphNode(`B Node Data`);
const CNode = new GraphNode(`C Node Data`);
const DNode = new GraphNode(`D Node Data`);
const ENode = new GraphNode(`E Node Data`);
const FNode = new GraphNode(`F Node Data`);
ANode.setVertices([BNode, CNode]);
BNode.setVertices([DNode]);
CNode.setVertices([ENode]);
ENode.setVertices([BNode]);
FNode.setVertices([DNode]);

const adjacencyMatrix = {
  ANode: ANode.vertices,
  BNode: BNode.vertices,
  CNode: CNode.vertices,
  ENode: ENode.vertices,
  FNode: FNode.vertices,
};

console.log(adjacencyMatrix);
// Depth First Search

// Breadth First Search

const breadthFirstSearch = (startNode) => {
  const visitedNodes = new Set(); // Provides conditional just so we dont run an infinite loop
  const queue = [startNode]; // initialize the queue with the starting node
};
