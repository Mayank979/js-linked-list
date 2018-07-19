function LinkedList(){
  this.root = null;

  this.addValue = (val) => {
    var n = new Node(val);
    if (this.root == null){
      this.root = n;
    } else {
      this.root.addNode(n);
    }
  }

  this.traverse = () => {
    this.root.visit();
  }

  this.search = (n) => {
    this.root.find(n);
  }

  this.reverse = () => {
     this.root = this.root.reverse();
  }
}
