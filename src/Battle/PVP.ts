import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _playerTwo: Fighter;

  constructor(
    playerOne: Fighter,
    playerTwo: Fighter,
  ) {
    super(playerOne);
    this._playerTwo = playerTwo;
  }

  fight(): number {
    this.player.attack(this._playerTwo);
    if (this._playerTwo.lifePoints <= 0) {
      return 1; // O jogador 2 foi derrotado
    }
    
    this._playerTwo.attack(this.player);
    if (this.player.lifePoints <= 0) {
      return -1; // O jogador 1 foi derrotado
    }
    
    return this.fight(); // Continuar a luta
  }
}
