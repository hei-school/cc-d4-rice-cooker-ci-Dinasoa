import { RiceCooker } from './riceCooker';

describe('RiceCooker', () => {
  let riceCooker: RiceCooker;

  beforeEach(() => {
    riceCooker = new RiceCooker();

  });

  test('should plug the Rice Cooker', () => {
    riceCooker.plug();
    expect(riceCooker.isPlugged).toBe(true);
  });

  test('should unplug the Rice Cooker', () => {
    riceCooker.isPlugged = true;
    riceCooker.unplug();
    expect(riceCooker.isPlugged).toBe(false);
  });

  test('should turn on Rice cooker', () => {
    riceCooker.powerOn = false; 
    riceCooker.isPlugged = true;
    riceCooker.riceInserted = true; 
    riceCooker.waterInserted = true;

    riceCooker.turnOn();
    expect(riceCooker.powerOn).toBe(true)
  });

  test('should turn off Rice cooker', () => {
    riceCooker.powerOn = true

    riceCooker.turnOff();

    expect(riceCooker.powerOn).toBe(false)
  });

});
