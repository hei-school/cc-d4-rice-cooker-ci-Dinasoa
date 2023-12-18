"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPrompt = exports.main = void 0;
var riceCooker_1 = require("./riceCooker");
var readline = require("readline-sync");
function main() {
    var electricity = readline.question("Is the electricity cut off? (1 for Yes, 2 for No)\n        1- Yes\n        2- No\n    ");
    if (electricity === "1") {
        console.log("Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro.");
    }
    else if (electricity === "2") {
        var riceCooker = new riceCooker_1.RiceCooker();
        userPrompt(riceCooker);
    }
    else {
        console.log("Choose a valid choice.");
    }
}
exports.main = main;
function userPrompt(riceCooker) {
    var userChoice = readline.question("RICE COOKER:\n        1- Plug in\n        2- Unplug\n        3- Turn on\n        4- Turn off\n        5- Add rice\n        6- Add water\n        7- Show status\n        8- Quit\n    ");
    switch (userChoice) {
        case "1":
            riceCooker.plug();
            break;
        case "2":
            riceCooker.unplug();
            break;
        case "3":
            riceCooker.turnOn();
            break;
        case "4":
            riceCooker.turnOff();
            break;
        case "5":
            riceCooker.addRice();
            break;
        case "6":
            riceCooker.addWater();
            break;
        case "7":
            riceCooker.getStatus();
            break;
        case "8":
            break;
        default:
            console.log("Invalid choice. Please enter a number between 1 and 8.");
            break;
    }
    if (userChoice !== "8") {
        userPrompt(riceCooker);
    }
}
exports.userPrompt = userPrompt;
main();
