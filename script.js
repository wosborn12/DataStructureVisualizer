function construct(){
    if(document.getElementById('tree').checked){
        constructTree();
    }
    if(document.getElementById('array').checked){
        constructArray();
    }
}
function constructArray() {
    var nodes = [];
    for(var i = 1; i<=document.getElementById('sizeSlider').value; ++i){
        nodes[i-1] = Math.floor(Math.random()*100);
    }
    displayArray(nodes);
}
function constructTree() {
    tree = new Tree();
    for(var i = 1; i<=document.getElementById('sizeSlider').value; i++){
        tree.addValue(Math.floor(Math.random()*100));
    }
    console.log(tree);
    tree.traverse();
    tree.display();
    console.log(depthMap);
    for(var i = 0; i<=depthMap.size; ++i){
        console.log(i + ' ' + depthMap.get(i));
    }
}