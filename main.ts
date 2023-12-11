import { RiceCooker } from "./riceCooker";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, (answer: string) => {
            resolve(answer.trim());
        });
    });
}

async function main() {
    const electricity = await questionAsync(`Is the electricity cut off? (1 for Yes, 2 for No)
        1- Yes
        2- No
    `);

    if (electricity === "1") {
        console.log("Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro.");
        rl.close();
    } else {
        await userPrompt();
    }
}

async function userPrompt() {
    const riceCooker = new RiceCooker();
    let userChoice = "";

    while (userChoice !== "7") {
        userChoice = await questionAsync(`RICE COOKER:
        1- Plug in
        2- Unplug
        3- Turn on
        4- Turn off
        5- Add rice
        6- Add water
        7- Quit
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
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please enter a number between 1 and 7.");
                break;
        }
    }
}

main();