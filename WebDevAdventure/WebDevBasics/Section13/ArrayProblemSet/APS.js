function printReverse(array) {
    for(var index = array.length-1; index>=0; index--) {
        console.log(array[index]);
    }
}

function isUniform(array) {
    for(var i = 1; i<array.length; i++) {
        if(array[0] !== array[i]) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var total = 0;
    array.forEach(element => {
        total += element;
    });
    return total;
}

function max(array) {
    var max = array[0]
    array.forEach(element => {
        if(max < element) {
            max = element;
        }
    })
    return max;
}