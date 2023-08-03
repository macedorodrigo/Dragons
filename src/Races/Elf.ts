import Race from './Race';

export default class Elf extends Race {
  readonly _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    private _elfName: string,
    private _elfDexterity: number,
  ) {
    super(_elfName, _elfDexterity);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}