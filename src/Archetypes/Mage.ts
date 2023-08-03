import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  readonly _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;
  
  constructor(_nameMage: string) {
    super(_nameMage);
    this._energyType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}