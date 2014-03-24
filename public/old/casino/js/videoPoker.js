var deck;
var hand;

$(document).ready(function() {
	deck = new Deck(1);
	hand = new Array();
	$('#btn-draw').hide();

	// Hold button is clicked
	$('#container-game .hold').click(function() {
		if($('#btn-draw').is(':visible')) {	
			if($(this).hasClass('light')) {
				$(this).removeClass('light').addClass('yellow');
				$(this).siblings('.holding').html('Holding');
			} else if($(this).hasClass('yellow')) {
				$(this).removeClass('yellow').addClass('light');
				$(this).siblings('.holding').html('&nbsp;');
			}
		}
	});

	// Deal button is clicked: start a new game
	$('#btn-deal').click(function() {
		$('#btn-draw').show();
		$('#btn-deal').hide();
		startGame();
	});

	// Draw button is clicked: get new cards
	$('#btn-draw').click(function() {
		$('#btn-draw').hide();
		$('#btn-deal').show();
		changeCards();
		var result = findHand(hand);

		if(result.type != FINAL_HAND_HIGH) {
			alert(FINAL_VALUES[result.high] + ' ' + FINAL_HANDS[result.type]);
			console.log(FINAL_VALUES[result.high] + ' ' + FINAL_HANDS[result.type]);
		}
	});



	$('#test').click(function() {
		var t;
		var testDeck = new Deck(1);
		var testHand = new Array();
		for(var i = 0; i < 0; i++) {
			t = testDeck.dealCard();
		}
		testHand[0] = testDeck.dealCard();
		testHand[1] = testDeck.dealCard();
		testHand[2] = testDeck.dealCard();
		for(var i = 0; i < 0; i++) {
			t = testDeck.dealCard();
		}
		testHand[3] = testDeck.dealCard();
		testHand[4] = testDeck.dealCard();
		findHand(testHand);
	});
});

// StartGame: starts a new game
function startGame() {
	var card;

	deck.shuffle();			// shuffle the deck
	resetHold();

	for(var i = 0; i < 5; i++) {
		card = deck.dealCard();
		hand[i] = card;
		$('#card-' + i).removeClass().addClass(card.class);
	}
}

// ResetHold: reset the hold button to grey and remove 'Holding' at the top
function resetHold() {
	$('.btn.hold').each(function() {
		$(this).removeClass('yellow').addClass('light');
	});

	$('.holding').each(function() {
		$(this).html('&nbsp;');
	});	
}

// ChangeCards: change the cards that are not being 'Held'
function changeCards() {
	var newCard;
	var oldCard;

	$('.btn.light').each(function() {
		newCard = deck.dealCard();
		oldCard = $(this).attr('data-card');

		hand[oldCard] = newCard;
		$('#card-' + oldCard).removeClass().addClass(newCard.class);
	});
}









/*
function changeCard() {
	var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
	var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

	$('#card-0').removeClass().addClass('card-' + suits[suit] + '-' + values[val]);

	if(val == 12 && suit == 3) {
		suit = 0;
		val = 0;
	} else if (val == 12) {
		suit++;
		val = 0;
	} else {
		val++;
	}
}
*/