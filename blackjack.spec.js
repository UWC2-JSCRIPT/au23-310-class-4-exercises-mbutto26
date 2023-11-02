class cardPlayer {
  constructor(name) {
    this.name = name;
  }
}
const player1 = new cardPlayer(`player1`);
const player2 = new cardPlayer(`dealer`);

console.log(player1);
console.log(player2);
