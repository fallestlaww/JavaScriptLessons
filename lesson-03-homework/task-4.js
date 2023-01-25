function filterRange(array, a, b) {
    for (let index = 0; index < array.length; index++) {
        if (index >= a & index <= b) {
            var functionresult = [array[index]];
            console.log(functionresult)
        }
    }
}

var array = [11, 22, 4, 1, 5, 6, 100, 244, 500];
filterRange(array, 1, 4)