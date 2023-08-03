import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  readonly _energyType = 'stamina';
  private static _createdArchetypeInstances = 0;
  
  constructor(_nameRanger: string) {
    super(_nameRanger);
    Ranger._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}