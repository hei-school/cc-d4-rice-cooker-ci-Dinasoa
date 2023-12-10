class RiceCooker {
    private status: string;
    private capacity: number;
    private pot: string;
    private container: string;
    private cooking: boolean;
  
    constructor() {
      this.status = "off";
      this.capacity = 0;
      this.pot = "";
      this.container = "";
      this.cooking = false;
    }
  
    turnOn() {
      if (this.status === "off") {
        this.status = "on";
        console.log("Rice cooker is now ON.");
      } else {
        console.log("Rice cooker is already ON.");
      }
    }
  
    turnOff() {
      if (this.status === "on") {
        this.status = "off";
        console.log("Rice cooker is now OFF.");
      } else {
        console.log("Rice cooker is already OFF.");
      }
    }
  
    addRice(type: string, quantity: number) {
      if (this.status === "on") {
        this.pot = type;
        this.capacity = quantity;
        console.log(`Added ${quantity} cups of ${type} to the pot.`);
      } else {
        console.log("Please turn on the rice cooker first.");
      }
    }
  
    addWater(quantity: number) {
      if (this.status === "on") {
        console.log(`Added ${quantity} cups of water to the pot.`);
      } else {
        console.log("Please turn on the rice cooker first.");
      }
    }
  
    startCooking() {
      if (this.status === "on" && this.pot !== "" && this.capacity > 0) {
        this.cooking = true;
        console.log("Cooking started.");
        this.calculateWater();
      } else {
        console.log("Please ensure the rice cooker is ON and rice is added.");
      }
    }
  
    calculateWater() {
      // Logic to calculate water based on rice type
      let waterRatio = 0;
  
      switch (this.pot) {
        case "long grain white rice":
          waterRatio = 1.75;
          break;
        case "medium grain white rice":
        case "short grain white rice":
        case "basmati or jasmine rice":
          waterRatio = 1.5;
          break;
        case "long grain brown rice":
          waterRatio = 2.25;
          break;
        case "parboiled rice":
          waterRatio = 2;
          break;
        case "quinoa":
          waterRatio = 2;
          break;
        default:
          break;
      }
  
      const waterQuantity = this.capacity * waterRatio;
      console.log(`Add ${waterQuantity} cups of water to the pot.`);
    }
  }
  
export const rice = () => {
  // Example usage:
  let rice = new RiceCooker();
  rice.turnOn();
  rice.addRice("long grain white rice", 1);
  rice.addWater(1);
  rice.startCooking();
  rice.turnOff();
}

rice()
  