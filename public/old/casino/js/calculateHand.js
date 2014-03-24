/**********
Ranking of Hands:
1. Royal Flush
2. Straight Flush
3. Four of a Kind
4. Full House
5. Flush
6. Straight
7. Three of a Kind
8. Two Pair

-- Texa's Hold'em --
9. Pair
10. High Card

-- Video Poker --
9. Jacks or Better
***********/
var FINAL_HANDS = ['', 'Royal Flush', 'Straight Flush', 'Four of a Kind', 'Full House', 'Flush', 'Straight',
				   'Three of a Kind', 'Two Pair', 'Jacks or Better', 'Pair', 'High Card'];
var FINAL_HAND_ROYAL_FLUSH = 1;
var FINAL_HAND_STRAIGHT_FLUSH = 2;
var FINAL_HAND_FOUR_KIND = 3;
var FINAL_HAND_FULL_HOUSE = 4;
var FINAL_HAND_FLUSH = 5;
var FINAL_HAND_STRAIGHT = 6;
var FINAL_HAND_THREE_KIND = 7;
var FINAL_HAND_TWO_PAIR = 8;
var FINAL_HAND_JACKS_BETTER = 9;
var FINAL_HAND_PAIR = 10;
var FINAL_HAND_HIGH = 11;

function findHand(hand) {
	var suits = zeroArray(4);
	var values = zeroArray(14);

	for (var i = 0; i < hand.length; i++) {
		suits[hand[i].suit]++;
		values[hand[i].value]++;
	}

	var result = { type: FINAL_HAND_HIGH, high: FINAL_2 };
	var flush = isFlush(suits, values);

	//if(isFlush.flush)
	//	alert(FINAL_VALUES[isFlush.highCard] + " high Flush");

	if (flush.isF) {
	// if(isFlush): check
	// - if(isRoyalFlush)
	// - else if(isStraightFlush)
	// - else (return isFlush)
		if(isRoyalFlush(values)) {
			result.type = FINAL_HAND_ROYAL_FLUSH;
			result.high = FINAL_ACE;
			//return { type: FINAL_HAND_ROYAL_FLUSH, high: FINAL_ACE };
		} else {
			var straightFlush = isStraight(values);
			if(straightFlush.isS) {
				result.type = FINAL_HAND_STRAIGHT_FLUSH;
				result.high = straightFlush.high;
			} else {
				result.type = FINAL_HAND_FLUSH;
				result.high = flush.high;
			}
		}

	} else {
	// else: check
	// - if(is4ofaKind)
	// - else
	//		- if(is3ofaKind)
	// 			- if(isFullHouse)
	//		- else
	// 			- if(isStraight)
	// 			- else
	//				- if(isPair)
	// 					- if(is2Pair)
	// 					- else if(isJackOrBetter)
	// - else (return HighCard)
		var fourKind = isFourOfAKind(values);
		if(fourKind.is4k) {
			result.type = FINAL_HAND_FOUR_KIND;
			result.high = fourKind.high;
		} else {
			var threeKind = isThreeOfAKind(values);
			if(threeKind.is3k) {
				var fullHouse = isPair(values);
				if(fullHouse.isP)
					result.type = FINAL_HAND_FULL_HOUSE;
				else 
					result.type = FINAL_HAND_THREE_KIND;
				
				result.high = threeKind.high;
			} else {
				var straight = isStraight(values);
				if(straight.isS) {
					result.type = FINAL_HAND_STRAIGHT;
					result.high = straight.high;
				} else {
					var pair = isPair(values);
					if(pair.isP) {
						var pair2 = isPair(values, pair.high);
						if(pair2.isP) {
							// Two Pair
							result.type = FINAL_HAND_TWO_PAIR;
						} else {
							result.type = FINAL_HAND_PAIR;
						}

						result.high = pair.high;
					} else {
						result.type = FINAL_HAND_HIGH;
						result.high = highCard(values);
					}
				}
			}
		}
	}

	return result;
		//console.log(FINAL_VALUES[result.high] + ' ' + FINAL_HANDS[result.type]);
}

// isRoyalFlush: check if hand contains 10-J-Q-K-A of the same suit
// - True: A-K-Q-J-10 (already determined if flush is made)
// - False: anything else
function isRoyalFlush(values) {
	if(values[FINAL_ACE] != 0 && values[FINAL_KING] != 0 && values[FINAL_QUEEN]
		&& values[FINAL_JACK] && values[FINAL_10])
		return true;

	return false;
}

// isStraightFlush: check if hand contains any 5 consective cards of the same suit
// - True: 5-consective cards of the same suit
// - False: doesn't
function isStraightFlush(values) {
	var index = FINAL_KING;		// start at King
	var isSF = false;
	var high = -1;
	var count = 0;

	while (index >= FINAL_ACE && !isSF) {
		if(values[index] != 0) {
			count++;
			if(high < index)
				high = index;
		} else {
			count = 0;
			high = -1;
		}

		if(count === 5)
			isSF = true;

		index--;
	}

	return { 
		isSF: isSF,
		high: high
	};
}

// isFourOfAKind: check if hand contains 4 of the same card value
// - True:
// - False
function isFourOfAKind(values) {
	var index = FINAL_KING;		// start at King
	var is4k = false;
	var high = -1;

	while (index >= FINAL_ACE && !is4k) {
		if(values[index] === 4) {
			is4k = true;
			high = index;
		}

		index--;
	}

	return { 
		is4k: is4k,
		high: high
	};
}

function isFullHouse(values) {
	return false;
}


// isFlush: return whether or not hand is a Flush
// - True (5 of the same suit) and the highest card value
// - False 
function isFlush(suits, values) {
	var result;

	if(suits.indexOf(5) != -1) {
		var high = highCard(values);
		result = {
			isF: true,
			high: high
		};
	} else {
		result = {
			isF: false,
			high: high
		};
	}

	return result;
}

function isStraight(values) {
	var index = FINAL_KING;		// start at King
	var isS = false;
	var high = -1;
	var count = 0;

	while (index >= FINAL_ACE && !isS) {
		if(values[index] != 0) {
			count++;
			if(high < index)
				high = index;
		} else {
			count = 0;
			high = -1;
		}

		if(count === 5)
			isS = true;

		index--;
	}

	return { 
		isS: isS,
		high: high
	};
}


// isThreeOfAKind: check if hand contains 3 of the same card value
function isThreeOfAKind(values) {
	var index = FINAL_KING;		// start at King
	var is3k = false;
	var high = -1;

	while (index >= FINAL_ACE && !is3k) {
		if(values[index] === 3) {
			is3k = true;
			high = index;
		}

		index--;
	}

	return { 
		is3k: is3k,
		high: high
	};
}

function isTwoPair(values, prevPair) {
	return false;
}

// isPair: check if hand contains 2 of the same card value
function isPair(values, start) {
	var index = typeof start !== 'undefined' ? start : FINAL_KING;
	//var index = start;		// start at either the King or previous highest pair
	var isP = false;
	var high = -1;

	while (index >= FINAL_ACE && !isP) {
		if(values[index] === 2) {
			isP = true;
			high = index;
		}

		index--;
	}

	return { 
		isP: isP,
		high: high
	};
}

// highCard: return the highest card in the hand, Ace being the highest
function highCard(values) {
	var high = 0;
	var index = values.length - 1;

	if(values[FINAL_ACE] != 0) {
		high = FINAL_ACE;
	} else {
		while(high === 0) {
			if(values[index] != 0)
				high = index;
			else
				index--;
		}
	}

	return high;
};

// zeroArray: create an array of length, filled with zero
function zeroArray(length) {
	var arr = new Array(length);
	for(var i = 0; i < length; i++) {
		arr[i] = 0;
	}

	return arr;
}