$(document).ready(function() {

});

var FINAL_SUITS = [ 'Hearts', 'Clubs', 'Spades', 'Diamonds' ];
var FINAL_VALUES = ['', 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var FINAL_ACE = 1;
var FINAL_2 = 2;
var FINAL_3 = 3;
var FINAL_4 = 4;
var FINAL_5 = 5;
var FINAL_6 = 6;
var FINAL_7 = 7;
var FINAL_8 = 8;
var FINAL_9 = 9;
var FINAL_10 = 10;
var FINAL_JACK = 11;
var FINAL_QUEEN = 12;
var FINAL_KING = 13;


function Deck(numDecks) {
	this.cards = createDeck(numDecks);
	this.cardsUsed = 0;

	function createDeck(numDecks) {
		var cards = new Array();
		var cardsPerDecks = 52;
		var numCards = 0;

		for(var deck = 0; deck < numDecks; deck++) {
			for (var suit = 0; suit < 4; suit++) {
				for(var i = 1; i <= 13; i++) {
					cards[numCards] = 
					{
						value: i,
						suit: suit,
						class: 'card-' + FINAL_SUITS[suit] + '-' + FINAL_VALUES[i]
					};

					numCards++;
				}
			}
		}

		return cards;
	}
} 

Deck.prototype.shuffle = function() {
	for(var i = 0; i < 3; i++) {
		this.shuffleDeck();
	}

	this.cardsUsed = 0;
}

Deck.prototype.shuffleDeck = function() {
    // Put all the used cards back into the deck, and shuffle it into
    // a random order.
    var min = 0;
    var max = this.cards.length - 1;

    for (var i = max; i >= 0; i--) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        var temp = this.cards[i];
        this.cards[i] = this.cards[rand];
        this.cards[rand] = temp;
    }
}

Deck.prototype.dealCard = function() {
	var card = this.cards[this.cardsUsed];
	this.cardsUsed++;
	return card;
}


