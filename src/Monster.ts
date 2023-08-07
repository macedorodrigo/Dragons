import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  setLifePoints(newLife: number): void {
    this._lifePoints = newLife;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    const totalLife = this._lifePoints - damage;
    this._lifePoints = totalLife > -1 ? totalLife : -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
