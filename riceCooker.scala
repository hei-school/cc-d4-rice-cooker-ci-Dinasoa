import scala.io.StdIn.readLine

class RiceCooker {
    private var isPlugged: Boolean = false
    private var powerOn: Boolean = false
    private var riceInserted: Boolean = false
    private var waterInserted: Boolean = false
    private var riceQuantity: Int = 0
    private var waterQuantity: Int = 0
    private val capacity: Int = 900

    def plug(): Unit = {
        if (isPlugged) {
            println("Rice Cooker is already plugged in.")
        } else {
            isPlugged = true
            println("Rice Cooker plugged in.")
        }
    }

    def unplug(): Unit = {
        if (!isPlugged) {
            println("The rice cooker is already unplugged.")
        } else {
            isPlugged = false
            println("The rice cooker has been unplugged.")
        }
    }

    def turnOn(): Unit = {
        if (powerOn) {
            println("The Rice Cooker is already on.")
        } else if (!isPlugged) {
            println("The rice cooker should be plugged before turning on.")
        } else if (!riceInserted) {
            println("You should insert rice.")
        } else if (!waterInserted) {
            println("You should insert water.")
        } else {
            powerOn = true
            println("Rice Cooker turned on, start cooking.")
        }
    }

    def turnOff(): Unit = {
        if (!powerOn) {
            println("The Rice Cooker is already off.")
        } else {
            powerOn = false
            println("Rice Cooker turned off.")
        }
    }

    def addRice(): Unit = {
        if (riceInserted) {
            println("Rice is already present.")
        } else {
            val quantityStr = readLine("Rice quantity: ")
            val quantity = quantityStr.toInt

            if (waterInserted) {
                if (quantity <= waterQuantity && quantity + riceQuantity <= capacity) {
                    riceQuantity = quantity
                    riceInserted = true
                    println("Rice has been added.")
                } else {
                    println("Not enough space or insufficient water quantity.")
                }
            } else {
                if (quantity <= capacity) {
                    riceQuantity = quantity
                    riceInserted = true
                    println("Rice has been added.")
                } else {
                    println("Not enough space.")
                }
            }
        }
    }

    def addWater(): Unit = {
        if (waterInserted) {
            println("Water is already present.")
        } else {
            val quantityStr = readLine("Water quantity: ")
            val quantity = quantityStr.toInt

            if (riceInserted) {
                if (quantity <= capacity - riceQuantity && quantity <= capacity) {
                    waterQuantity = quantity
                    waterInserted = true
                    println("Water has been added.")
                } else {
                    println("Not enough space or insufficient capacity for water with current rice quantity.")
                }
            } else {
                if (quantity <= capacity) {
                    waterQuantity = quantity
                    waterInserted = true
                    println("Water has been added.")
                } else {
                    println("Not enough space.")
                }
            }
        }
    }

    def getStatus(): Unit = {
        if (isPlugged) {
            println("Plugged.")
        } else {
            println("Unplugged.")
        }

        if (powerOn) {
            println("ON.")
        } else {
            println("OFF.")
        }

        if (riceInserted) {
            println(s"Rice inserted: $riceQuantity")
        }

        if (waterInserted) {
            println(s"Water inserted: $waterQuantity")
        }
    }
}
