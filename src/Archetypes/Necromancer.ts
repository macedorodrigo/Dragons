import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  readonly _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;
  
  constructor(_nameNecromancer: string) {
    super(_nameNecromancer);
    this._energyType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}