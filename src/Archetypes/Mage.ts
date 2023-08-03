import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  readonly _energyType = 'mana';
  private static _createdArchetypeInstances = 0;
  
  constructor(_nameMage: string) {
    super(_nameMage);
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}