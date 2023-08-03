import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  readonly _energyType = 'stamina';
  private static _createdArchetypeInstances = 0;
  
  constructor(_nameWarrior: string) {
    super(_nameWarrior);
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}