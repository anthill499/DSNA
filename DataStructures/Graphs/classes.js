// Graph Node class

export default class GraphNode {
  constructor(data, edges = []) {
    this.data = data;
    this.edges = edges;
    this.id = JSON.stringify(Math.ceil(Math.random() * 10000000));
  }

  // Hello
  setEdges = (val) => {
    this.edges = val;
  };

  setData = (data) => {
    this.data = data;
  };

  returnSelf = () => this;
}
