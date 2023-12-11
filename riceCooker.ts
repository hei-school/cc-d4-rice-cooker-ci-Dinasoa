import * as readlineSync from 'readline-sync';

export class RiceCooker {
    private isPlugged: boolean;
    private powerOn: boolean;
    private riceInserted: boolean;
    private waterInserted: boolean;
    private riceQuantity: number;
    private waterQuantity: number;
    private capacity: number;

    constructor() {
        this.isPlugged = false;
        this.powerOn = false;
        this.riceInserted = false;
        this.waterInserted = false;
        this.riceQuantity = 0;
        this.waterQuantity = 0;
        this.capacity = 900;
    }
 
    plug(): void {
        if (this.isPlugged) {
            console.log("Rice Cooker is already plugged in.");
        } else {
            this.isPlugged = true;
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
        } else if (!this.riceInserted) {
            console.log("You should insert rice.");
        } else if (!this.waterInserted) {
            console.log("You should insert water.");
        } else {
            this.powerOn = true;
            console.log("Rice Cooker turned on, start cooking.");
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
            const quantityStr: string = readlineSync.question("Rice quantity: ");
            const quantity: number = parseInt(quantityStr, 10);
    
            if (this.waterInserted) {
                if (quantity <= this.waterQuantity && (quantity + this.riceQuantity) <= this.capacity) {
                    this.riceQuantity = quantity;
                    this.riceInserted = true;
                    console.log("Rice has been added.");
                } else {
                    console.log("Not enough space or insufficient water quantity.");
                }
            } else {
                if (quantity <= this.capacity) {
                    this.riceQuantity = quantity;
                    this.riceInserted = true;
                    console.log("Rice has been added.");
                } else {
                    console.log("Not enough space.");
                }
            }
        }
    }

    addWater(): void {
        if (this.waterInserted) {
            console.log("Water is already present.");
        } else {
            const quantityStr: string = readlineSync.question("Water quantity: ");
            const quantity: number = parseInt(quantityStr, 10);
    
            if (this.riceInserted) {
                if (quantity <= this.capacity - this.riceQuantity && quantity <= this.capacity) {
                    this.waterQuantity = quantity;
                    this.waterInserted = true;
                    console.log("Water has been added.");
                } else {
                    console.log("Not enough space or insufficient capacity for water with current rice quantity.");
                }
            } else {
                if (quantity <= this.capacity) {
                    this.waterQuantity = quantity;
                    this.waterInserted = true;
                    console.log("Water has been added.");
                } else {
                    console.log("Not enough space.");
                }
            }
        }
    }

    getStatus(): void {
        if(this.isPlugged){
            console.log("Plugged.")
        } if (!this.isPlugged){
            console.log("Unplugged. ")
        } if(this.powerOn){
            console.log("ON.")
        } if(!this.powerOn) {
            console.log("OFF")
        } if(this.riceInserted){
            console.log(`Rice inserted: ${this.riceQuantity}`)
        } if (this.waterInserted){
            console.log(`Water inserted: ${this.waterInserted}`)
        }
    }

}
