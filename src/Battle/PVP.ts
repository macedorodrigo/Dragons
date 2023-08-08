import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _playerTwo: Fighter;
  private _playerOne: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  fight(): number {
    do {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
    } while (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0);
    return super.fight();
  }
}
