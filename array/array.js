function displayArray(arr) {
    var visArea = document.getElementById('visArea');
    visArea.innerHTML = '';
    var wrapper = document.createElement('div');
    wrapper.classList.add('arrayWrapper');
    for(var i = 0; i<arr.length; i++){
        var node = document.createElement('span');
        node.classList.add('squareNode');
        var val = document.createElement('span');
        val.classList.add('squareText');
        val.append(arr[i]);
        node.append(val);
        wrapper.append(node);
    }
    visArea.append(wrapper);
}