import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _adversary: (Fighter | SimpleFighter)[];

  constructor(
    player: Fighter,
    adversary: (Fighter | SimpleFighter)[], 
  ) {
    super(player);
    this._adversary = adversary;
  }

  fight(): number {
    this._adversary.forEach((adversary) => {
      this.player.attack(adversary);
      if (adversary.lifePoints <= 0) {
        this._adversary = this._adversary.filter((a) => a !== adversary);
      }
    });

    if (this._adversary.length === 0) {
      return 1;
    }

    this.player.attack(this.player);
    return this.player.lifePoints <= 0 ? -1 : this.fight();
  }
}
