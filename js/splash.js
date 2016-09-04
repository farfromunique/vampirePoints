document.addEventListener('DOMContentLoaded',function() {
	addEventToID("newCharacter","Click","location.href='show.php'");
	
	var fiveChars = document.getElementsByClassName('loadbox');
	var i;
	for (i=0; i<fiveChars.length; i++) {
		var charID = fiveChars[i].id;
		var charNum = charID.substr(4);
		addEventToID(charID,"Click","location.href='show.php?character=" + charNum + "'");
	}
});
