import GraphNode from "./classes.js";

const ANode = new GraphNode(`A Node Data`);
const BNode = new GraphNode(`B Node Data`);
const CNode = new GraphNode(`C Node Data`);
const DNode = new GraphNode(`D Node Data`);
const ENode = new GraphNode(`E Node Data`);
const FNode = new GraphNode(`F Node Data`);
ANode.setEdges([BNode, CNode]);
BNode.setEdges([DNode]);
CNode.setEdges([ENode]);
ENode.setEdges([BNode]);
FNode.setEdges([DNode]);

const adjList = {
  [JSON.stringify(ANode)]: ANode.edges,
  [JSON.stringify(BNode)]: BNode.edges,
  [JSON.stringify(CNode)]: CNode.edges,
  [JSON.stringify(DNode)]: DNode.edges,
  [JSON.stringify(ENode)]: ENode.edges,
  [JSON.stringify(FNode)]: FNode.edges,
};

/**
 * A -> C
 * |    |
 * v    v
 * B <- E
 * |
 * v
 * D <- F
 */
// console.log(adjList);

/*Depth First Search*/
console.log("DFS");
const depthFirstSearch = (source, graph, visited = new Set()) => {
  if (!visited.has(source)) {
    console.log(source.data);
  }
  visited.add(source);
  for (const vertice of graph[JSON.stringify(source)]) {
    depthFirstSearch(vertice, graph, visited);
  }
  return;
};
console.log(depthFirstSearch(ANode, adjList)); // A -> B -> D -> C -> E
console.log(depthFirstSearch(FNode, adjList)); // F -> D
console.log(depthFirstSearch(DNode, adjList)); // D
console.log(depthFirstSearch(BNode, adjList)); // B -> D

/** Breadth First Search */
console.log("BFS");
const breadthFirstSearch = (startNode, graph) => {
  const visitedNodes = new Set(); // Provides conditional just so we dont run an infinite loop
  const queue = [startNode]; // initialize the queue with the starting node
  while (queue.length > 0) {
    const currNode = queue.shift();
    const edges = graph[JSON.stringify(currNode)];
    for (let index = 0; index < edges.length; index++) {
      if (!visitedNodes.has(edges[index])) {
        queue.push(edges[index]);
      }
    }
    visitedNodes.add(currNode);
    console.log(currNode.data);
  }
  return "Finished";
};
console.log(breadthFirstSearch(ANode, adjList)); // A -> B -> D -> C -> E
console.log(breadthFirstSearch(FNode, adjList)); // F -> D
console.log(breadthFirstSearch(DNode, adjList)); // D
console.log(breadthFirstSearch(BNode, adjList)); // B -> D
