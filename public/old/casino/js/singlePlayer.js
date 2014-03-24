var deck;
var players;
var maxPlayers = 6;

$(document).ready(function() {
    deck = new Deck(1);
    deck.shuffle();
    players = new Array();
    resetPlayers();

    startGame();
    displayDealerFirstCard();
    displayAllCards();

    $('#showDealerCards').click(function() {
        displayPlayerCards(0);
        continueDealer();
        checkWinners();
    });

    $('.hit').click(function() {
        var id = $(this).attr('data-player');
        addCard(id, deck.dealCard());
        displayPlayerCards(id);

        if(players[id].bust)
            $(this).hide();
    });

});

function startGame() {
    var card;
    var numPlayers = $('.activePlayer').length;
    var playerID; 

    for(var round = 0; round < 2; round++) {
        card = deck.dealCard();
        addCard(0, card);

        $.each($('.activePlayer'), function(i) {
            card = deck.dealCard();
            playerID = $(this).attr('data-player');
            addCard(playerID, card);
        });
    }
}

function resetPlayers() {
    for(var i = 0; i < maxPlayers; i++) {
        players[i] = {
            cards: new Array(),
            numAces: 0,
            total: 0,
            bust: false,
            stay: false
        };
    }
}

function addCard(playerID, card) {
    var cardPos = players[playerID].cards.length;
    var cardValue = card.value;

    if(cardValue == 1)
        players[playerID].numAces++;

    players[playerID].cards[cardPos] = card;
    players[playerID].total += getCardValue(card);
}

function getCardValue(card) {
    var cardValue = card.value;
    if (cardValue >= 10)
        cardValue = 10;
    else if (cardValue == 1)
        cardValue = 11;

    return cardValue;
}

function displayDealerFirstCard() {
    var card = players[0].cards[0];
    var html = "";
    $('[data-player=0]').children('.total').html(getCardValue(card));

    html += '[' + values[card.value] + ' ' + suits[card.suit] + ']';
    html += '[ ?? ]';
    $('[data-player=0]').children('.cards').html(html);
}

function displayAllCards() {
    var playerID;
    var card;

    $.each($('.activePlayer'), function(i) {
        playerID = $(this).attr('data-player');
        displayPlayerCards(playerID);
    });
}

function displayPlayerCards(ID) {
    $('[data-player=' + ID + ']').children('.total').html(players[ID].total);
    var html = '';
    for (var i = 0; i < players[ID].cards.length; i++) {
        card = players[ID].cards[i];
        html += '[' + values[card.value] + ' ' + suits[card.suit] + ']';
        $('[data-player=' + ID + ']').children('.cards').html(html);
    }

    checkBust(ID);
}

function checkBust(ID) {
    var total = players[ID].total;
    if (total > 21) {
        if(players[ID].numAces > 0) {
            players[ID].numAces--;
            players[ID].total = total - 10;
            $('[data-player=' + ID + ']').children('.total').html(players[ID].total);
        } else {
            $('[data-player=' + ID + ']').children('.result').html(' --- BUST!!! ---');
            $('[data-player=' + ID + ']').children('.result').show();
            players[ID].bust = true;
        }
    }
}

function continueDealer() {
    while (players[0].total < 17) {
        addCard(0, deck.dealCard());
        displayPlayerCards(0);
    }
}

function checkWinners() {
    var dealerTotal = players[0].total;
    var playerTotal;
    var id;

    $.each($('.activePlayer'), function(i) {
        id = $(this).attr('data-player');
        playerTotal = players[id].total;
        if((playerTotal > dealerTotal && !players[id].bust) || players[0].bust)  {
            $('[data-player=' + id + ']').children('.result').html(' --- WINNER!!! ---');
            $('[data-player=' + id + ']').children('.result').show();
        } else if(!players[id].bust) {
            $('[data-player=' + id + ']').children('.result').html(' --- LOSER!!! ---');
            $('[data-player=' + id + ']').children('.result').show();
        }
    });
}

function playerOptions() {
    // <input type='button' class='hit' data-player='2' value='Hit Player 2'/>
}







