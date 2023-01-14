`use strict`

let login = "Admin";
let password = "TheMaster";

console.log("Who`s there?");
switch (login) {
    case "Admin": {
        console.log("Password?");
        switch (password) {
            case "TheMaster": {
                console.log("Welcome!")
            }
            case null: {
                console.log("Wrong password!")
            }
            default: {
                console.log("Canceled!")
            }
        }
    } break;
    case null: {
        console.log("I don`t know you");
    }
    default: {
        console.log("Canceled!");
    }
}