function makeBuffer() {
    let argu = []
    return {
        add: function (value) {
            argu.push(value);
        },
        show: function () {
            let argument = argu.join()
            if (argument.includes(",")) {
                argument = argument.replace(",", " ")
            }
            return console.log(argument)
        },
        clear: function () {
            return argu.length = 0;
        }
    }
}

let buffer = makeBuffer();
buffer.add("Javascript")
buffer.add("потрібно")
buffer.add("вчити")
buffer.show()
buffer.clear()
buffer.show()



function makeBufferNumber() {
    let argunumber = []
    return {
        add: function (value) {
            argunumber.push(value);
        },
        show: function () {
            let argumentnumber = argunumber.join()
            if (argumentnumber.includes(",")) {
                argumentnumber = argumentnumber.replace(",", " ")
            }
            return console.log(argumentnumber)
        },
        clear: function () {
            return argunumber.length = 0;
        }
    }
}

let buffernumbers = makeBufferNumber();
buffernumbers.add(0)
buffernumbers.add(1)
buffernumbers.add(0)
buffernumbers.show()
buffernumbers.clear()
buffernumbers.show()
