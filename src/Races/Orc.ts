import Race from './Race';

export default class Orc extends Race {
  readonly _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    _orcName: string,
    _orcDexterity: number,
  ) {
    super(_orcName, _orcDexterity);
    this._maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}