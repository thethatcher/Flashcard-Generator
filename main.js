var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var cards = [
	new BasicCard("Who was fired as RSL's head coach in 2017?", "Jeff Cassar")
	,new ClozeCard("Nick Rimando is the starting RSL keeper","Nick Rimando")
]

for (var i = 0; i < cards.length; i++) {
	console.log(cards[i]);
}