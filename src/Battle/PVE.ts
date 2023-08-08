import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _adversary: (Fighter | SimpleFighter)[];
  private _player: Fighter;

  constructor(
    player: Fighter,
    adversary: (Fighter | SimpleFighter)[], 
  ) {
    super(player);
    this._adversary = adversary;
    this._player = player;
  }

  fight(): number {
    this._adversary.map((enemy) => {
      const enemyLife = enemy.receiveDamage(this._player.strength);
      const playerLife = this._player.receiveDamage(enemy.strength);
      return playerLife < enemyLife ? -1 : 1;
    });
    return super.fight();
  }
}