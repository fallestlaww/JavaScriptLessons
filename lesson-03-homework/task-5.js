let string = "my-short-string"
function camelize(str) {
    var array = str.split("-");
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1);

    }
    return array.join("");
}

console.log(camelize(string));