import 'dart:io';

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
      var quantityStr = stdin.readLineSync() ?? '';
      var quantity = int.tryParse(quantityStr);

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
      var quantityStr = stdin.readLineSync() ?? '';
      var quantity = int.tryParse(quantityStr);

      if (riceInserted) {
        if (quantity != null && quantity <= capacity - riceQuantity && quantity <= capacity) {
          waterQuantity = quantity;
          waterInserted = true;
          print('Water has been added.');
        } else {
          print('Not enough space or insufficient capacity for water with the current rice quantity.');
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