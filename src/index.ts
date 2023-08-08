import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';
import Battle from './Battle';

// Crie 3 objetos do tipo Character
const player1 = new Character('Uriel');
const player2 = new Character('Merlin');
const player3 = new Character('David');

// Execute algumas vezes o método levelUp do player1
for (let i = 0; i < 10; i += 1) player1.levelUp();

console.log(player1, player2, player3);

// Crie 2 objetos do tipo Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// Crie um objeto do tipo PVP
const pvp = new PVP(player1, player3);

// Crie um objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

// Crie uma função chamada runBattles
function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};