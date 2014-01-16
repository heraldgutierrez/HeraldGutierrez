var counter = 0;
var small_numbers = [
	[7, 8, 9, 11, 15, 16, 19, 20, 21, 23, 25, 26, 27, 30, 31, 35, 37, 38, 39],	// 0
	[7, 8, 13, 18, 23, 28, 33, 37, 38, 39],										// 1
	[7, 8, 9, 11, 15, 20, 24, 28, 32, 36, 37, 38, 39, 40],						// 2
	[7, 8, 9, 11, 15, 20, 24, 30, 31, 35, 37, 38, 39],							// 3
	[9, 13, 14, 17, 19, 21, 24, 26, 27, 28, 29, 30, 34, 39],					// 4
	[6, 7, 8, 9, 10, 11, 16, 17, 18, 19, 25, 30, 31, 35, 37, 38, 39],			// 5
	[7, 8, 9, 11, 15, 16, 21, 22, 23, 24, 26, 30, 31, 35, 37, 38, 39],			// 6
	[6, 7, 8, 9, 10, 15, 19, 23, 28, 33, 38],									// 7
	[7, 8, 9, 11, 15, 16, 20, 22, 23, 24, 26, 30, 31, 35, 37, 38, 39],			// 8
	[7, 8, 9, 11, 15, 16, 20, 22, 23, 24, 25, 30, 31, 35, 37, 38, 39]			// 9
];
var large_numbers = [];
var colon = [3, 4, 6, 7];	// :

var A = 1,	B = 2,	C = 3,	D = 4,	E = 5,	F = 6,	G = 7,	H = 8,	I = 9,	J = 10,
	K = 11,	L = 12,	M = 13,	N = 14,	O = 15,	P = 16,	Q = 17,	R = 18,	S = 19,	T = 20,
	U = 21,	V = 22,	W = 23,	X = 24,	Y = 25,	Z = 26;
var letters = [
	[],
	[7, 8, 9, 11, 15, 16, 20, 21, 22, 23, 24, 25, 26, 30, 31, 35, 36, 40],			// A
	[6, 7, 8, 9, 11, 15, 16, 20, 21, 22, 23, 24, 26, 30, 31, 35, 36, 37, 38, 39],	// B
	[7, 8, 9, 11, 15, 16, 21, 26, 31, 35, 37, 38, 39],								// C
	[6, 7, 8, 9, 11, 15, 16, 20, 21, 25, 26, 30, 31, 35, 36, 37, 38, 39],			// D
	[6, 7, 8, 9, 10, 11, 16, 21, 22, 23, 24, 26, 31, 36, 37, 38, 39, 40],			// E
	[6, 7, 8, 9, 10, 11, 16, 21, 22, 23, 24, 26, 31, 36],							// F
	[7, 8, 9, 11, 15, 16, 21, 26, 29, 30, 31, 35, 37, 38, 39],						// G
	[6, 10, 11, 15, 16, 20, 21, 22, 23, 24, 25, 26, 30, 31, 35, 36, 40],			// H
	[7, 8, 9, 13, 18, 23, 28, 33, 37, 38, 39],										// I
	[7, 8, 9, 10, 15, 20, 25, 30, 31, 35, 37, 38, 39],								// J
	[6, 10, 11, 14, 16, 18, 21, 22, 26, 28, 31, 34, 36, 40],						// K
	[6, 11, 16, 21, 26, 31, 36, 37, 38, 39, 40],									// L
	[6, 10, 11, 12, 14, 15, 16, 18, 20, 21, 23, 25, 26, 30, 31, 35, 36, 40],		// M
	[6, 10, 11, 12, 15, 16, 18, 20, 21, 24, 25, 26, 30, 31, 35, 36, 40],			// N
	[7, 8, 9, 11, 15, 16, 20, 21, 25, 26, 30, 31, 35, 37, 38, 39],					// O
	[6, 7, 8, 9, 11, 15, 16, 20, 21, 22, 23, 24, 26, 31, 36],						// P
	[7, 8, 9, 11, 15, 16, 20, 21, 25, 26, 28, 30, 31, 34, 35, 37, 38, 39, 40],		// Q
	[6, 7, 8, 9, 11, 15, 16, 20, 21, 22, 23, 24, 26, 28, 31, 34, 36, 40],			// R
	[7, 8, 9, 10, 11, 16, 22, 23, 24, 30, 35, 36, 37, 38, 39],						// S
	[6, 7, 8, 9, 10, 13, 18, 23, 28, 33, 38],										// T
	[6, 10, 11, 15, 16, 20, 21, 25, 26, 30, 31, 35, 37, 38, 39],					// U
	[6, 10, 11, 15, 16, 20, 21, 25, 26, 30, 32, 34, 38],							// V
	[6, 10, 11, 15, 16, 20, 21, 25, 26, 28, 30, 31, 32, 34, 35, 36, 40],			// W
	[6, 10, 11, 15, 17, 19, 23, 27, 29, 31, 35, 36, 40],							// X
	[6, 10, 11, 15, 17, 19, 23, 28, 33, 38],										// Y
	[6, 7, 8, 9, 10, 15, 19, 23, 27, 31, 36, 37, 38, 39, 40]						// Z
];

$(document).ready(function(){
	// home team
	onLED('#home_letter_1', letters[H]);
	onLED('#home_letter_2', letters[O]);
	onLED('#home_letter_3', letters[M]);
	onLED('#home_letter_4', letters[E]);

	// shotclock
	onLED('#shotclock_tens', small_numbers[2]);
	onLED('#shotclock_ones', small_numbers[4]);

	// away team
	onLED('#away_letter_1', letters[A]);
	onLED('#away_letter_2', letters[W]);
	onLED('#away_letter_3', letters[A]);
	onLED('#away_letter_4', letters[Y]);

	// timer
	onLED('#minute_ten', small_numbers[2]);
	onLED('#minute_one', small_numbers[0]);
	onLED('#timer .colon', colon);
	onLED('#second_ten', small_numbers[0]);
	onLED('#second_one', small_numbers[0]);



});

function test() {
	var sc_counter = setInterval(shotclock_timer, 1000);
	
	var one = 0;
	var ten = 0;
	var hundred = 0;
	var thousand = 0;
	var ten_thousand = 0;
	var hundred_thousand = 0;
	var million = 0;
	var ten_million = 0;
	var hundred_million = 0;
	var billion = 0;

	for(var i = 0; i < 9; i++) {
		$('#' + i).hide();
	}

	// onLED(0, small_numbers[billion]);
	// onLED(1, small_numbers[hundred_million]);
	// onLED(2, small_numbers[ten_million]);
	// onLED(3, small_numbers[million]);
	// onLED(4, small_numbers[hundred_thousand]);
	// onLED(5, small_numbers[ten_thousand]);
	// onLED(6, small_numbers[thousand]);
	// onLED(7, small_numbers[hundred]);
	// onLED(8, small_numbers[ten]);
	// onLED(9, small_numbers[one]);
}

function shotclock_timer() {
	counter++;
	one = counter % 10;
	ten = Math.floor(counter / 10) % 10;
	hundred = (Math.floor(counter / 100) % 1000) % 10;
	thousand = (Math.floor(counter / 1000) % 1000) % 10;
	ten_thousand = (Math.floor(counter / 10000) % 10000) % 10;
	hundred_thousand = (Math.floor(counter / 100000) % 100000) % 10;
	million = (Math.floor(counter / 1000000) % 1000000) % 10;
	ten_million = (Math.floor(counter / 10000000) % 10000000) % 10;
	hundred_million = (Math.floor(counter / 100000000) % 100000000) % 10;
	billion = (Math.floor(counter / 1000000000) % 1000000000) % 10;

	if (billion != 0) {
		showDiv(0);
	}
	if (hundred_million != 0) {
		showDiv(1);
	}
	if (ten_million != 0) {
		showDiv(2);
	}
	if (million != 0) {
		showDiv(3);
	}
	if (hundred_thousand != 0) {
		showDiv(4);
	}
	if (ten_thousand != 0) {
		showDiv(5);
	}
	if (thousand != 0) {
		showDiv(6);
	}
	if (hundred != 0) {
		showDiv(7);
	}
	if (ten != 0) {
		showDiv(8);
	}
	
	onLED(0, small_numbers[billion]);
	onLED(1, small_numbers[hundred_million]);
	onLED(2, small_numbers[ten_million]);
	onLED(3, small_numbers[million]);
	onLED(4, small_numbers[hundred_thousand]);
	onLED(5, small_numbers[ten_thousand]);
	onLED(6, small_numbers[thousand]);
	onLED(7, small_numbers[hundred]);
	onLED(8, small_numbers[ten]);
	onLED(9, small_numbers[one]);
}

function showDiv(id) {
	$('#' + id).show();
}

function onLED (id, array) {
	$(id + ' .circle').removeClass('on');

	for(var i = 0; i < array.length; i++) {
		$(id + ' .circle:nth-child('+ array[i]+')').addClass('on');
	}
}
