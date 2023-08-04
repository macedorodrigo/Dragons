import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _dexterity: number;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _defense: number;
  private _strength: number;
  private _energy: Energy;

  constructor(private _nameCharacter: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_nameCharacter, this._dexterity);
    this._archetype = new Mage(_nameCharacter);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense > 0
      ? attackPoints - this._defense : 1;
    const totalLife = this._lifePoints - damage;
    return totalLife > 0 ? totalLife : -1;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints = Math.min(this
      ._maxLifePoints + getRandomInt(1, 10), this._race.maxLifePoints);
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(): void {
    console.log(`${this._nameCharacter} is performing a special attack!`);
  
    if (this._archetype instanceof Mage) {
      console.log('A powerful spell is cast!');
    } else {
      console.log('Special attack executed!');
    }
  }
}