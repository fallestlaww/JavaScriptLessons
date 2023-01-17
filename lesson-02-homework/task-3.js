function operation(number1, number2, operate) {
    var result = 0;
    try {
        if (typeof number1 != "number" && typeof number2 != "number") {
            throw new Error("Your number is not correct");
        } else {
            switch (operate) {
                case "+": {
                    result = number1 + number2;
                } break;
                case "-": {
                    result = number1 - number2;
                } break;
                case "*": {
                    result = number1 * number2;
                } break;
                case "/": {
                    if (number2 == 0) {
                        throw new Error("Can`t be divided by zero")
                    } else {
                        result = number1 / number2;
                    }
                } break;
                default: {
                    console.log("Please, choose correct operation")
                }
            }
        }
    }
    catch (error) {
        console.log("Error happened ----> " + error)
    }
    return result;
}

console.log(operation(1, 2, "+"));
console.log(operation(4, 6, "-"));
console.log(operation(4, 4, "*"));
console.log(operation(2, 5, "/"));
console.log(operation(2, 0, "/"));
console.log(operation(210, 4, "?"));