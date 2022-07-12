function displayArray(arr) {
    var visArea = document.getElementById('visArea');
    visArea.innerHTML = '';
    var wrapper = document.createElement('div');
    wrapper.classList.add('arrayWrapper');
    for(var i = 0; i<arr.length; i++){
        var elem = document.createElement('div');
        elem.classList.add('squareWrapper');
        wrapper.append(elem);
        var indx = document.createElement('p');
        indx.append(i);
        indx.classList.add('squareIndexText');
        elem.append(indx);
        var node = document.createElement('span');
        node.classList.add('squareNode');
        var val = document.createElement('span');
        val.classList.add('squareText');
        val.append(arr[i]);
        node.append(val);
        elem.append(node);
    }
    visArea.append(wrapper);
}