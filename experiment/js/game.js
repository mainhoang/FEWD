Array.prototype.shuffle = function(){

  var counter = this.length, temp, index;

    while (counter > 0){

      index = Math.floor(Math.random() * counter);
      counter--;
      temp = this[counter];
      this[counter] = this[index]
      this[index] = temp;

    };

  return this;

};

var movesArr = [];

Element.prototype.showCard = function(){

  this.style.transform = 'rotateX(180deg)';
  movesArr.push(this);
  setTimeout(function(){checkMatch()},2000);

};

var Game = function(){

  this.matchedCards = 0;
  this.cardsArr = [];
  this.cardsWrapper = document.getElementById('cards');
  this.suits = ['heart','spade','diamond','club'];

};

Game.prototype = {

  createCards: function(howManyCards){

    for(var i=0; i<this.suits.length; i++){

      for(var j=0; j<howManyCards/4; j++){

        var card = new Card(this.suits[i]);
        cardGame.cardsArr.push(card);

      }

    }

    cardGame.cardsArr = cardGame.cardsArr.shuffle();

    for(var i=0; i<this.cardsArr.length; i++){

      var li = this.cardsArr[i].li;
      this.cardsWrapper.appendChild(li);

    }

  }

}





var Card = function(suit){

  this.cardSuit = suit;
  this.frontOfCard = '<div class="'+suit+'"></div>';
  this.backOfCard = '<div class="bicycle"></div>';
  this.matched = false;
  this.li = document.createElement('li');
  this.li.dataset.suit = suit;
  this.li.dataset.matched = false;
  this.li.classList.add('card');
  this.li.innerHTML = this.frontOfCard+this.backOfCard;
  this.li.addEventListener('click',this.li.showCard);

};

var cardGame = new Game();

cardGame.createCards(16);

var checkMatch = function(){

  if((movesArr.length%2)===0){

    var lastMove = movesArr.length-1;
    var firstCard = movesArr[lastMove-1];
    var secondCard = movesArr[lastMove];

    if(secondCard.dataset.suit === firstCard.dataset.suit){

      secondCard.dataset.matched = true;
      firstCard.dataset.matched = true;

    }else{

      firstCard.style.transform = 'rotateX(0deg)';
      secondCard.style.transform = 'rotateX(0deg)';

    }

  }

  var li = document.getElementsByTagName('li');

  while(li.dataset.matched = true){
    var heading = document.getElementsByTagName('h1');
    heading.innerHTML = 'You Win!';
  }
}
