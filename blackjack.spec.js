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

const calcPoints = (hand) => {
  this.suit = `none`;
  this.displayVal = [];
  this.val = 0;

  return [blackJackTotal, blackJackScore, blackScore.isSoft];
};

console.log(calcPoints);

const val = 0;
const displayVal = [];
const suit = [];

const dealerHand = [val, displayVal, suit];
const dealerShouldDraw = (dealerHand) => {
  for (var i = 1; i < 21; +2) {
    hit(dealerHand);
  }
  if ((displayval = Ace)) {
    return (val = 11);
  } else {
    return (val = 1);
  }
};

function dealerHit() {
  hit(dealerHand);
  showDealerHand();
}

console.log("Dealer Hand");
function getDealerHand(min, max) {
  min = Math.ceil(1);
  max = Math.floor(13);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(dealerHand);

const playerScore = playerScore;
const dealerScore = dealerScore;
const determineWinner = (playerScore, dealerScore) => {
  if (dealerHand > playerHand) {
    return dealerScore;
  } else {
    return playerScore;
  }
};
console.log(determineWinner);

function calcPoints() {}
