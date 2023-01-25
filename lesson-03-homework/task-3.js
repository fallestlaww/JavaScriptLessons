function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            console.log(arr.indexOf(value))
        } else {
            return -1;
        }
    }
}

var array = ["test1", "test2"]
let value = "test1"
find(array, value);