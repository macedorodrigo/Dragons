import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _playerTwo: Fighter;
  private _playerOne: Fighter;

  constructor(
    playerOne: Fighter,
    playerTwo: Fighter,
  ) {
    super(playerOne);
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  // fight(): number {
  //   this.player.attack(this._playerTwo);
  //   console.log(this.player.attack(this._playerTwo));
    
  //   if (this._playerTwo.lifePoints <= 0) {
  //     return super.fight(); // O jogador 2 foi derrotado
  //   }
    
  //   this._playerTwo.attack(this.player);
  //   if (this.player.lifePoints <= 0) {
  //     return super.fight(); // O jogador 1 foi derrotado
  //   }

  //   return this.fight(); // Continuar a luta
  // }

  fight(): number {
    do {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this.player);
    } while (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0);
    return super.fight();
  }
}
