var depthMap = new Map();

Node.prototype.updateDepthMap = function() {
    if(depthMap.get(this.depth) != null) {
        depthMap.set(this.depth, depthMap.get(this.depth) + 1);
    } else {
        depthMap.set(this.depth, 1);
    }
}
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.depth = null;
    this.x_num = null;
    this.y_num = null;
    this.x_coord = null;
    this.y_coord = null;
}
Node.prototype.getDepth = function(par, depth) {
    if(par == null){
        return depth;
    } else {
        return par.getDepth(this.parent, ++depth);
    }
}
Node.prototype.addNode = function(n) {
    if(n.value < this.value) {
        if(this.left == null) {
            n.parent = this;
            n.depth = this.getDepth(this.parent, 1);
            n.updateDepthMap();
            n.x_num = this.x_num - 80;
            n.y_num = this.y_num + 50;
            n.x_coord = n.x_num + 'px';
            n.y_coord = n.y_num + 'px';
            this.left = n;
        } else {
            this.left.addNode(n);
        }
    } else if(n.value > this.value) {
        if(this.right == null){
            n.parent = this;
            n.depth = this.getDepth(this.parent, 1);
            n.updateDepthMap();
            n.x_num = this.x_num + 80;
            n.y_num = this.y_num + 50;
            n.x_coord = n.x_num + 'px';
            n.y_coord = n.y_num + 'px';
            this.right = n;
        }else{
            this.right.addNode(n);
        }
    }

}
Node.prototype.display = function() {
    var node = document.createElement("span");
    node.classList.add("circleNode");
    node.style.left = this.x_coord;
    node.style.top = this.y_coord;
    var text = document.createElement("span");
    text.classList.add("circleText");
    text.append(this.value);
    node.append(text);
    var visArea = document.getElementById("visArea");
    visArea.append(node);
    if(this.left != null){
        this.left.display();
    }
    console.log(this.value);
    if(this.right != null){
        this.right.display();
    }
}
Node.prototype.visit = function() {
    if(this.left != null){
        this.left.visit();
    }
    console.log(this.value);
    if(this.right != null){
        this.right.visit();
    }
}
Node.prototype.search = function(val) {
    if(this.value == val){
        return this;
    } else if(val < this.value && this.left != null){
        return this.left.search(val);
    } else if(val > this.value && this.right != null){
        return this.right.search(val);
    }
    return null;
}
