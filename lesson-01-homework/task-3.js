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
            } break;
            case null: {
                console.log("Wrong password!")
            } break;
            default: {
                console.log("Canceled!")
            } break;
        }
    } break;
    case null: {
        console.log("I don`t know you");
    } break;
    default: {
        console.log("Canceled!");
    }
}