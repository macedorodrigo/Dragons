import Race from './Race';

export default class Halfling extends Race {
  readonly _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    _halflingName: string,
    _halflingDexterity: number,
  ) {
    super(_halflingName, _halflingDexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}