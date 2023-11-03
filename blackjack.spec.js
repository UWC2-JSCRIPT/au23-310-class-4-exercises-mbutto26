const blackjackDeck = getDeck();

class cardPlayer {
  constructor(name) {
    this.name = name;
  }
}
const player = new cardPlayer(`player`);
const dealer = new cardPlayer(`dealer`);

console.log(player);
console.log(dealer);
