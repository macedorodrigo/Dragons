import Race from './Race';

export default class Dwarf extends Race {
  readonly _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    private _dwarfName: string,
    private _dwarfDexterity: number,
  ) {
    super(_dwarfName, _dwarfDexterity);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}