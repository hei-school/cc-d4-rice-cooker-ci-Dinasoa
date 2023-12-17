// rice_cooker_test.dart

import 'package:test/test.dart';
import 'rice_cooker.dart';

void main() {
  group('RiceCooker', () {
    late RiceCooker riceCooker;

    setUp(() {
      riceCooker = RiceCooker();
    });

    test('should plug the Rice Cooker', () {
      riceCooker.plug();
      expect(riceCooker.isPlugged, true);
    });

    test('should unplug the Rice Cooker', () {
      riceCooker.isPlugged = true;
      riceCooker.unplug();
      expect(riceCooker.isPlugged, false);
    });

    test('should turn on Rice cooker', () {
      riceCooker.powerOn = false;
      riceCooker.isPlugged = true;
      riceCooker.riceInserted = true;
      riceCooker.waterInserted = true;

      riceCooker.turnOn();
      expect(riceCooker.powerOn, true);
    });

    test('should turn off Rice cooker', () {
      riceCooker.powerOn = true;

      riceCooker.turnOff();

      expect(riceCooker.powerOn, false);
    });
  });
}
