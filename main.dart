import 'dart:io';
import 'riceCooker.dart';

// comment test

void main() {
  stdout.write('Is the electricity cut off? (1 for Yes, 2 for No)\n'
      '1- Yes\n'
      '2- No\n');

  var electricity = stdin.readLineSync();

  if (electricity?.compareTo('1') == 0) {
    print('Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro.');
  } else if (electricity?.compareTo('2') == 0) {
    var riceCooker = RiceCooker();
    userPrompt(riceCooker);
  } else {
    print('Choose a valid choice.');
  }
}

void userPrompt(RiceCooker riceCooker) {
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
        print('Invalid choice. Please enter a number between 1 and 8.');
        break;
    }
    if (userChoice != '8') {
      userPrompt(riceCooker);
    }
  }
}