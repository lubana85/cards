/*
 * Class Card
 */
class Card {
  /*
   * Constructor
   */
	constructor(suit, number){
		this.suit = suit;
		this.number = number;
  }
}

/*
 * Generate Function
 * returns an array of five cards.
 */
function generate() {
	var suits = ["h","s","c","d"];
	var numbers = ["a","2","3","4","5","6","7","8","9","10","j","q","k"];
	
	var cards = [];
	var total = 5;
	
	for (index = 1; index < total; index++) {
		var i = Math.floor(Math.random() * 4); 
		var j = Math.floor(Math.random() * 13);  
		var card = new Card(suits[i], numbers[j]);
		// Check if it's a repeated card
		if (cards.find(card => card.suit === suits[i] && card.number === numbers[j])) {
			index = index - 1;
		} else {
			cards.push(card);
		}
	}
	return cards;
}

/************************/
