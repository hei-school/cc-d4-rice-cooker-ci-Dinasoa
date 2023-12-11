import { RiceCooker } from "./riceCooker";
import * as readline from "readline-sync";

function main() {
    const electricity = readline.question(`Is the electricity cut off? (1 for Yes, 2 for No)
        1- Yes
        2- No
    `);

    if (electricity === "1") {
        console.log("Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro.");
    } else if (electricity === "2") {
        const riceCooker = new RiceCooker();
        userPrompt(riceCooker);
    } else {
        console.log("Choose a valid choice.");
    }
}

function userPrompt(riceCooker: RiceCooker): void {
    const userChoice = readline.question(`RICE COOKER:
        1- Plug in
        2- Unplug
        3- Turn on
        4- Turn off
        5- Add rice
        6- Add water
        7- Show status
        8- Quit
    `);

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

main();
