export class RiceCooker {
    private isPlugged: boolean;
    private powerOn: boolean;
    private riceInserted: boolean;
    private waterInserted: boolean;

    constructor() {
        this.isPlugged = false;
        this.powerOn = false;
        this.riceInserted = false;
        this.waterInserted = false;
    }

    plug(): void {
        if (this.isPlugged === true) {
            console.log(this.isPlugged)
            console.log("Rice Cooker is already plugged in.");
        } else if (this.isPlugged === false){
            this.isPlugged = true;
            console.log(this.isPlugged)
            console.log("Rice Cooker plugged in.");
        }
    }

    unplug(): void {
        if (!this.isPlugged) {
            console.log("The rice cooker is already unplugged.");
        } else {
            this.isPlugged = false;
            console.log("The rice cooker has been unplugged.");
        }
    }

    turnOn(): void {
        if (this.powerOn) {
            console.log("The Rice Cooker is already on.");
        } else if (!this.isPlugged) {
            console.log("The rice cooker should be plugged before turning on.");
        } else if(!this.riceInserted) {
            console.log("You should insert rice.")
        } else if (!this.waterInserted){
            console.log("You should insert water")
        }
        else {
            this.powerOn = true;
            console.log("Rice Cooker turned on.");
        }
    }

    turnOff(): void {
        if (!this.powerOn) {
            console.log("The Rice Cooker is already off.");
        } else {
            this.powerOn = false;
            console.log("Rice Cooker turned off.");
        }
    }

    addRice(): void {
        if (this.riceInserted) {
            console.log("Rice is already present.");
        } else {
            // TODO: Add logic to check max quantity of rice
            this.riceInserted = true;
            console.log("Rice has been added.");
        }
    }

    addWater(): void {
         if (this.waterInserted) {
            console.log("Water is already present.");
        } else {
            // TODO: Add logic to check max quantity of water
            this.waterInserted = true;
            console.log("Water has been added.");
        }
    }
}
