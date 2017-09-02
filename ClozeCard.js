ClozeCard.prototype.makePartial = function(str,substr){
		if(str.indexOf(substr) !== -1){
			//TODO ensure that we are not removing the part of a word that is the substring, but not the cloze
			var rtn = str.substring(0,str.indexOf(substr)) + " ... " + str.substring(str.indexOf(substr)+substr.length,str.length);
			console.log(rtn);
		} else {
			console.log("Error: Text does not contain the Cloze string. Please try again.");
		}

		return rtn;
	}

function ClozeCard(text, cloze){
	if(this instanceof ClozeCard){
		this.text = text;
		this.cloze = cloze;
		this.partial = this.makePartial(text, cloze);
	} else {
		return new ClozeCard(text, cloze);
	}
}

module.exports = ClozeCard;