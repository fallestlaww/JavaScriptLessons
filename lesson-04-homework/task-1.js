function write(array) {
    console.log(array)
    console.log("---------------------")
}

function comparenumbers(number1, number2) {
    return number1 - number2
}

let numbersarray1 = [0, 495, 751, 938, 642, -923, 31, 366, 985, 518]
let numbersarray2 = [206, -173, -249, 88, 144, -307, 676, 744, 761, 769]
let numbersarray = numbersarray1.concat(numbersarray2)
write(numbersarray)

// sort
numbersarray.sort(comparenumbers)
write(numbersarray)

// reversed sort
numbersarray.reverse()
write(numbersarray)

// positive number array
let positivenumbers = numbersarray.filter(function (number) {
    return number >= 0
})
write(positivenumbers)

//negative number array
let negativenumbers = numbersarray.filter(function (number) {
    return number < 0
})
write(negativenumbers) 