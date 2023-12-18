"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiceCooker = void 0;
var readlineSync = require("readline-sync");
var RiceCooker = /** @class */ (function () {
    function RiceCooker() {
        this.isPlugged = false;
        this.powerOn = false;
        this.riceInserted = false;
        this.waterInserted = false;
        this.riceQuantity = 0;
        this.waterQuantity = 0;
        this.capacity = 900;
    }
    RiceCooker.prototype.plug = function () {
        if (this.isPlugged) {
            console.log("Rice Cooker is already plugged in.");
        }
        else {
            this.isPlugged = true;
            console.log("Rice Cooker plugged in.");
        }
    };
    RiceCooker.prototype.unplug = function () {
        if (!this.isPlugged) {
            console.log("The rice cooker is already unplugged.");
        }
        else {
            this.isPlugged = false;
            console.log("The rice cooker has been unplugged.");
        }
    };
    RiceCooker.prototype.turnOn = function () {
        if (this.powerOn) {
            console.log("The Rice Cooker is already on.");
        }
        else if (!this.isPlugged) {
            console.log("The rice cooker should be plugged before turning on.");
        }
        else if (!this.riceInserted) {
            console.log("You should insert rice.");
        }
        else if (!this.waterInserted) {
            console.log("You should insert water.");
        }
        else {
            this.powerOn = true;
            console.log("Rice Cooker turned on, start cooking.");
        }
    };
    RiceCooker.prototype.turnOff = function () {
        if (!this.powerOn) {
            console.log("The Rice Cooker is already off.");
        }
        else {
            this.powerOn = false;
            console.log("Rice Cooker turned off.");
        }
    };
    RiceCooker.prototype.addRice = function () {
        if (this.riceInserted) {
            console.log("Rice is already present.");
        }
        else {
            var quantityStr = readlineSync.question("Rice quantity: ");
            var quantity = parseInt(quantityStr, 10);
            if (this.waterInserted) {
                if (quantity <= this.waterQuantity && (quantity + this.riceQuantity) <= this.capacity) {
                    this.riceQuantity = quantity;
                    this.riceInserted = true;
                    console.log("Rice has been added.");
                }
                else {
                    console.log("Not enough space or insufficient water quantity.");
                }
            }
            else {
                if (quantity <= this.capacity) {
                    this.riceQuantity = quantity;
                    this.riceInserted = true;
                    console.log("Rice has been added.");
                }
                else {
                    console.log("Not enough space.");
                }
            }
        }
    };
    RiceCooker.prototype.addWater = function () {
        if (this.waterInserted) {
            console.log("Water is already present.");
        }
        else {
            var quantityStr = readlineSync.question("Water quantity: ");
            var quantity = parseInt(quantityStr, 10);
            if (this.riceInserted) {
                if (quantity <= this.capacity - this.riceQuantity && quantity <= this.capacity) {
                    this.waterQuantity = quantity;
                    this.waterInserted = true;
                    console.log("Water has been added.");
                }
                else {
                    console.log("Not enough space or insufficient capacity for water with current rice quantity.");
                }
            }
            else {
                if (quantity <= this.capacity) {
                    this.waterQuantity = quantity;
                    this.waterInserted = true;
                    console.log("Water has been added.");
                }
                else {
                    console.log("Not enough space.");
                }
            }
        }
    };
    RiceCooker.prototype.getStatus = function () {
        if (this.isPlugged) {
            console.log("Plugged.");
        }
        if (!this.isPlugged) {
            console.log("Unplugged. ");
        }
        if (this.powerOn) {
            console.log("ON.");
        }
        if (!this.powerOn) {
            console.log("OFF");
        }
        if (this.riceInserted) {
            console.log("Rice inserted: ".concat(this.riceQuantity));
        }
        if (this.waterInserted) {
            console.log("Water inserted: ".concat(this.waterInserted));
        }
    };
    return RiceCooker;
}());
exports.RiceCooker = RiceCooker;
