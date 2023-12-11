import scala.io.StdIn.readLine

object Main extends App{
  var quit = false

  while (!quit) {
    val electricity = readLine(
      """Is the electricity cut off? (1 for Yes, 2 for No)
        |1- Yes
        |2- No
        |""".stripMargin
    )

    electricity match {
      case "1" =>
        println("Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro.")
        quit = true
      case "2" => userPrompt()
      case _ => println("Choose a valid choice.")
    }
  }

  def userPrompt(): Unit = {
    val riceCooker = new RiceCooker()
    var userChoice = ""

    while (userChoice != "8") {
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

      userChoice match {
        case "1" => riceCooker.plug()
        case "2" => riceCooker.unplug()
        case "3" => riceCooker.turnOn()
        case "4" => riceCooker.turnOff()
        case "5" => riceCooker.addRice()
        case "6" => riceCooker.addWater()
        case "7" => riceCooker.getStatus()
        case "8" =>
        case _ => println("Invalid choice. Please enter a number between 1 and 8.")
      }
    }
  }

  userPrompt()
}
