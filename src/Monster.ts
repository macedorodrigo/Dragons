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

  set updatingLife(totalLife: number) {
    this._lifePoints = totalLife;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    const totalLife = this._lifePoints - damage;
    if (totalLife > -1) {
      this.updatingLife = totalLife;
    }
    this.updatingLife = -1;
    return -1;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
