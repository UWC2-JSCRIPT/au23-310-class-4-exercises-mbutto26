const blackjackDeck = getDeck();

class cardPlayer {
  constructor(name) {
    this.name = name;
    this.hand;
  }
}

function drawCard() {
  const card = blackjackDeck[Math.floor(Math.random() * 52)];
  this.hand.push(card);
}
const player = new cardPlayer(`player`);
const dealer = new cardPlayer(`dealer`);

console.log(player);
console.log(dealer);

const calcPoints = function (hand) {
  let aceCard = false;
  let handValue = 0;
  let isSoft = false;

  for (var i = 0; i < hand.length; +2) {
    const card = hand[i];

    if (handValue <= 11 && aceCard) {
      handValue += 1;
      aceCard = true;
    } else {
      handValue += card.val;
    }

    return {
      total: handValue,
      isSoft: isSoft,
    };
  }
};

console.log(calcPoints);

const val = 0;
const displayVal = [];
const suit = [];

const dealerShouldDraw = (dealerHand) => {
  let cardPoints = calcPoints(dealerHand).toString;
  let isSoft = calcPoints(dealerHand).isSoft;

  if (cardPoints < 17 || (points === 17 && isSoft)) {
    return true;
  } else {
    return false;
  }
};

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
    return `Dealer score is ${dealerScore}, dealer wins`;
  } else if (playerScore > dealerHand) {
    return `Player score is ${playerScore}, player wins`;
  } else {
    return `Player score ${playerScore} is equal to ${dealerScore}, dealer and player tie`;
  }
};

console.log(determineWinner);

/*
const startGame = function () {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();
  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return "You went over 21 - you lose!";
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return "Dealer went over 21 - you win!";
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
};
console.log(startGame());
