import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private playerTwo: Fighter;

  constructor(
    playerOne: Fighter,
    playerTwo: Fighter,
  ) {
    super(playerOne);
    this.playerTwo = playerTwo;
  }

  fight(): number {
    this.player.attack(this.playerTwo);
    if (this.playerTwo.lifePoints <= 0) {
      return 1;
    }

    this.player.attack(this.player);
    return this.player.lifePoints <= 0 ? -1 : this.fight();
  }
}
