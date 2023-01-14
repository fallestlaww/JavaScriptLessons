`use strict`

let login = "Admin";
let password = "TheMaster";

console.log("Who`s there?");
if (login == "Admin") {
    console.log("Password?");
    if (password == "TheMaster") {
        console.log("Welcome!");
    } else if (password == null) {
        console.log("Wrong password!");
    } else {
        console.log("Canceled!");
    }
} else if (login == null) {
    console.log("I don`t know you");
} else {
    console.log("Canceled!");
}