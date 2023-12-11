import scala.io.StdIn.readLine

object Main extends App {
  val electricity = readLine("Is the electricity cut off? (1 for Yes, 2 for No)\n1- Yes\n2- No\n")

  if (electricity == "1") {
    println("Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro.")
  } else if (electricity == "2") {
    val riceCooker = new RiceCooker
    userPrompt(riceCooker)
  } else {
    println("Choose a valid choice.")
  }

  
  def userPrompt(riceCooker: RiceCooker): Unit = {
    var userChoice = ""

      do {
        userChoice = readLine(
          """RICE COOKER:
            |1- Plug in
            |2- Unplug
            |3- Turn on
            |4- Turn off
            |5- Add rice
            |6- Add water
            |7- Show status
            |8- Quit
            |""".stripMargin
        )

        if (userChoice != "8") {
          userChoice match {
            case "1" => riceCooker.plug()
            case "2" => riceCooker.unplug()
            case "3" => riceCooker.turnOn()
            case "4" => riceCooker.turnOff()
            case "5" => riceCooker.addRice()
            case "6" => riceCooker.addWater()
            case "7" => riceCooker.getStatus()
            case _   => println("Invalid choice. Please enter a number between 1 and 8.")
          }
        }
      } while (userChoice != "8")
  }
}