function Node(n){
  this.val = n;
  this.next = null;

  this.addNode = (n) => {
    if(this.next == null){
      this.next = n;
    } else {
      this.next.addNode(n);
    }
  }

  this.visit = () => {
    console.log(this.val);
    console.log("|");
    if (this.next != null){
      this.next.visit();
  }

  }

  this.find = (n) => {
    if (this.val == n){
      console.log("Element found");
    } else if(this.next != null){
      this.next.find(n);
    }

  }

}
