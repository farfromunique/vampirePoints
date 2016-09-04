function buildCharacter() {
	document.getElementById("phy1").click();
	
	document.getElementById("stren2").click();
	document.getElementById("stren3").click();
	document.getElementById("stren4").click();
	document.getElementById("dexte2").click();
	document.getElementById("dexte3").click();
	document.getElementById("dexte4").click();
	document.getElementById("stami2").click();
	
	document.getElementById("soc2").click();
	
	document.getElementById("chari2").click();
	document.getElementById("chari3").click();
	document.getElementById("chari4").click();
	document.getElementById("manip2").click();
	document.getElementById("manip3").click();
	
	document.getElementById("men3").click();
	
	document.getElementById("wits2").click();
	document.getElementById("wits3").click();
	document.getElementById("wits4").click();
	
	document.getElementById("tal1").click();
	
	document.getElementById("alert1").click();
	document.getElementById("alert2").click();
	document.getElementById("alert3").click();
	document.getElementById("athle1").click();
	document.getElementById("athle2").click();
	document.getElementById("athle3").click();
	document.getElementById("brawl1").click();
	document.getElementById("brawl2").click();
	document.getElementById("brawl3").click();
	document.getElementById("dodge1").click();
	document.getElementById("dodge2").click();
	document.getElementById("dodge3").click();
	document.getElementById("empat1").click();
	
	document.getElementById("ski2").click();
	
	document.getElementById("anima1").click();
	document.getElementById("anima2").click();
	document.getElementById("anima3").click();
	document.getElementById("craft1").click();
	document.getElementById("craft2").click();
	document.getElementById("craft3").click();
	document.getElementById("drive1").click();
	document.getElementById("drive2").click();
	document.getElementById("drive3").click();
	
	document.getElementById("kno3").click();
	
	document.getElementById("acade1").click();
	document.getElementById("acade2").click();
	document.getElementById("acade3").click();
	document.getElementById("compu1").click();
	
}

function makeItWork(myID) {
	mygroup = myID.substr(0,myID.length - 1);
	mynumber = myID.substr(-1);
	if (mynumber > 1) {
		if (document.getElementById(mygroup + (mynumber - 1)).checked = document.getElementById(myID).checked) {
			document.getElementById(myID).checked = true;
		} else {
			document.getElementById(mygroup + (mynumber - 1)).click();
		}
	}
}



