function Tree() {
    this.root = null;
}
Tree.prototype.display = function() {
    var visArea = document.getElementById("visArea");
    visArea.innerHTML = '';
    this.root.display();
}
Tree.prototype.traverse = function() {
    this.root.visit();
}
Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if(this.root == null) {
        this.root = n;
        this.root.x_num = 660;
        this.root.y_num = 200;
        this.root.x_coord = this.root.x_num + 'px';
        this.root.y_coord = this.root.y_num + 'px';
    }else {
        this.root.addNode(n);
    }
}
Tree.prototype.search = function(val) {
    var found = this.root.search(val);
    return found;
}