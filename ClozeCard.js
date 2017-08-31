function ClozeCard(text, cloze){
	if(this instanceof ClozeCard){
		this.text = text;
		this.cloze = cloze;
		this.partial = makePartial(text, cloze);
	} else {
		return new ClozeCard(text, cloze);
	}
	function makePartial(str,substr){
		if(str.indexOf(substr) !== -1){
			//TODO ensure that we are not removing the part of a word that is the substring, but not the cloze
			var rtn = str.substring(0,str.indexOf(substr)) + " ... " + str.substring(str.indexOf(substr)+substr.length,str.length);
			console.log(rtn);
		} else {
			console.log("Error: Text does not contain the Cloze string. Please try again.");
		}

		return rtn;
	}
}

module.exports = ClozeCard;

var card1 = new ClozeCard("testing the fifth word.","fifth");

console.log(card1.text);
console.log(card1.cloze);
console.log(card1.partial);

var card2 = ClozeCard("this is a string","a");