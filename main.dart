import 'dart:io';

void main() {
  var quit = false;

  while (!quit) {
    stdout.write('Is the electricity cut off? (1 for Yes, 2 for No)\n'
        '1- Yes\n'
        '2- No\n');

    var electricity = stdin.readLineSync();

    if (electricity == '1') {
      print('Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro.');
      quit = true;
    } else if (electricity == '2') {
      userPrompt();
    } else {
      print('Choose a valid choice.');
    }
  }
}

void userPrompt() {
  var riceCooker = RiceCooker();
  var userChoice = '';

  while (userChoice != '8') {
    stdout.write('RICE COOKER:\n'
        '1- Plug in\n'
        '2- Unplug\n'
        '3- Turn on\n'
        '4- Turn off\n'
        '5- Add rice\n'
        '6- Add water\n'
        '7- Show status\n'
        '8- Quit\n');

    userChoice = stdin.readLineSync() ?? '';

    switch (userChoice) {
      case '1':
        riceCooker.plug();
        break;
      case '2':
        riceCooker.unplug();
        break;
      case '3':
        riceCooker.turnOn();
        break;
      case '4':
        riceCooker.turnOff();
        break;
      case '5':
        riceCooker.addRice();
        break;
      case '6':
        riceCooker.addWater();
        break;
      case '7':
        riceCooker.getStatus();
        break;
      case '8':
        break;
      default:
        print('Invalid choice. Please enter a number between 1 and 7.');
        break;
    }
  }
}

class RiceCooker {
  var isPlugged = false;
  var powerOn = false;
  var riceInserted = false;
  var waterInserted = false;
  var riceQuantity = 0;
  var waterQuantity = 0;
  final capacity = 900;

  void plug() {
    if (isPlugged) {
      print('Rice Cooker is already plugged in.');
    } else {
      isPlugged = true;
      print('Rice Cooker plugged in.');
    }
  }

  void unplug() {
    if (!isPlugged) {
      print('The rice cooker is already unplugged.');
    } else {
      isPlugged = false;
      print('The rice cooker has been unplugged.');
    }
  }

  void turnOn() {
    if (powerOn) {
      print('The Rice Cooker is already on.');
    } else if (!isPlugged) {
      print('The rice cooker should be plugged before turning on.');
    } else if (!riceInserted) {
      print('You should insert rice.');
    } else if (!waterInserted) {
      print('You should insert water.');
    } else {
      powerOn = true;
      print('Rice Cooker turned on, start cooking.');
    }
  }

  void turnOff() {
    if (!powerOn) {
      print('The Rice Cooker is already off.');
    } else {
      powerOn = false;
      print('Rice Cooker turned off.');
    }
  }

  void addRice() {
    if (riceInserted) {
      print('Rice is already present.');
    } else {
      stdout.write('Rice quantity: ');
      var quantityStr = stdin.readLineSync();
      var quantity = int.tryParse(quantityStr ?? '');

      if (waterInserted) {
        if (quantity != null && quantity <= waterQuantity && quantity + riceQuantity <= capacity) {
          riceQuantity = quantity;
          riceInserted = true;
          print('Rice has been added.');
        } else {
          print('Not enough space or insufficient water quantity.');
        }
      } else {
        if (quantity != null && quantity <= capacity) {
          riceQuantity = quantity;
          riceInserted = true;
          print('Rice has been added.');
        } else {
          print('Not enough space.');
        }
      }
    }
  }

  void addWater() {
    if (waterInserted) {
      print('Water is already present.');
    } else {
      stdout.write('Water quantity: ');
      var quantityStr = stdin.readLineSync();
      var quantity = int.tryParse(quantityStr ?? '');

      if (riceInserted) {
        if (quantity != null && quantity <= capacity - riceQuantity && quantity <= capacity) {
          waterQuantity = quantity;
          waterInserted = true;
          print('Water has been added.');
        } else {
          print('Not enough space or insufficient capacity for water with current rice quantity.');
        }
      } else {
        if (quantity != null && quantity <= capacity) {
          waterQuantity = quantity;
          waterInserted = true;
          print('Water has been added.');
        } else {
          print('Not enough space.');
        }
      }
    }
  }

  void getStatus() {
    if (isPlugged) {
      print('Plugged.');
    } else {
      print('Unplugged.');
    }

    if (powerOn) {
      print('ON.');
    } else {
      print('OFF.');
    }

    if (riceInserted) {
      print('Rice inserted: $riceQuantity');
    }

    if (waterInserted) {
      print('Water inserted: $waterQuantity');
    }
  }
}
