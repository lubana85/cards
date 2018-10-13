/*
 * Class Card
 */
class Card {
  /*
   * Constructor
   */
	constructor(number, suit) {
		this.number = number;
		this.suit = suit;
  }
}

/*
 * Generate Function
 * returns an array of five cards.
 */
function generate() {
	var numbers = ["a","2","3","4","5","6","7","8","9","10","j","q","k"];
	var suits = ["h","s","c","d"];
	var cards = [];
	var total = 5;
	
	for (var index = 0; index < total; index++) {
		var i = Math.floor(Math.random() * number.length); 
		var j = Math.floor(Math.random() * suits.length);  
		var card = new Card(numbers[i], suits[j]);
		
		// Check if it's a repeated card
		if (cards.find(card => card.number === numbers[i] && card.suit === suits[j])) {
			index = index - 1;
		} else {
			cards.push(card);
		}
	}
	return cards;
}

/************************/

/*
 * isStraight function
 * returns true if the cards array contains a straight or straight flush
 */
function isStraight(c) {
  return preg_match("/["+join(c)+"]{5}/",'a234567890jqka');
}

/************************/
