// Graph Node class

export default class GraphNode {
  constructor(data, vertices = []) {
    this.vertices = vertices;
    this.data = data;
  }

  // Hello
  setVertices = (val) => {
    this.vertices = val;
  };

  setData = (data) => {
    this.data = data;
  };
}
