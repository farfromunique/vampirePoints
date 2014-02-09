var abort;
var stepName = "Step00";
var clan;
var flown;

/* Functional stuff */
function flyoutOnRight() {
	window.flown = false;
	window.stepName = "Step01";
	window.phases = document.getElementById("phases");
	window.phasesName = document.getElementById("phasesName");
	window.phasesBody = document.getElementById("phasesBody");
	
	phases.style.width = 325;
	phases.style.left = (window.innerWidth - 45);
	phases.style.height = (window.innerHeight * .75);
}

function flyout() {
	window.phases.style.left = window.innerWidth - (window.phases.style.width.replace("px","").valueOf());
	window.flown = true;
	phasesName = document.getElementById("phasesName");
	phasesBody = document.getElementById("phasesBody");
	
	phasesName.style.display = "none";
	phasesBody.style.display = "block";
}

function flyin() {
	if (abort) {
		abort = false;
		return;
	}
	window.phases.style.left = window.innerWidth - 45;
	window.flown = false;
	
	phasesName.style.display = "inline-block";
	phasesBody.style.display = "none";
}

function disableDotsInGroup(groupName) /* str, dex, etc */ {
	if (groupName == 'All') /* global disable button */ {
		var allDots = document.getElementsByClassName('dot');
		for (var i=0;i<allDots.length;i++) {
			allDots[i].disabled = true;
		};
		
	} else {
		
		var dots = [];
		dots[0] = document.getElementById(groupName+1)
		dots[1] = document.getElementById(groupName+2)
		dots[2] = document.getElementById(groupName+3)
		dots[3] = document.getElementById(groupName+4)
		dots[4] = document.getElementById(groupName+5)
		
		for (i=0;i<5;i++) {
			dots[i].disabled = true;
		};
	};
}

function enableDotsInGroup(groupName, enable1, enable2, enable3, enable4, enable5) /* enableN are boolean */ {
	var dots = [];
		
	dots[0] = document.getElementById(groupName+1)
	dots[1] = document.getElementById(groupName+2)
	dots[2] = document.getElementById(groupName+3)
	dots[3] = document.getElementById(groupName+4)
	dots[4] = document.getElementById(groupName+5)
	
	if (enable1) { dots[0].disabled = false; }
	if (enable2) { dots[1].disabled = false; }
	if (enable3) { dots[2].disabled = false; }
	if (enable4) { dots[3].disabled = false; }
	if (enable5) { dots[4].disabled = false; }
}

function disableDotsInMetaGroup(metaGroup) /* physical, mental, etc */ {
	switch (metaGroup) {
		case "Physical":
			disableDotsInGroup("str");
			disableDotsInGroup("dex");
			disableDotsInGroup("sta");
			break;
		
		case "Social":
			disableDotsInGroup("cha");
			disableDotsInGroup("man");
			disableDotsInGroup("app");
			break;
		
		case "Mental":
			disableDotsInGroup("per");
			disableDotsInGroup("int");
			disableDotsInGroup("wit");
			break;
		
		case "Talents":
			disableDotsInGroup("alertness");
			disableDotsInGroup("athletics");
			disableDotsInGroup("brawl");
			disableDotsInGroup("dodge");
			disableDotsInGroup("empathy");
			disableDotsInGroup("expression");
			disableDotsInGroup("intimidation");
			disableDotsInGroup("leadership");
			disableDotsInGroup("streetwise");
			disableDotsInGroup("subterfuge");
			break;
		
		case "Skills":
			disableDotsInGroup("animalKen");
			disableDotsInGroup("crafts");
			disableDotsInGroup("drive");
			disableDotsInGroup("etiquette");
			disableDotsInGroup("firearms");
			disableDotsInGroup("melee");
			disableDotsInGroup("performance");
			disableDotsInGroup("security");
			disableDotsInGroup("stealth");
			disableDotsInGroup("survival");
			break;
		
		case "Knowledges":
			disableDotsInGroup("academics");
			disableDotsInGroup("computer");
			disableDotsInGroup("finance");
			disableDotsInGroup("investigation");
			disableDotsInGroup("law");
			disableDotsInGroup("linguistics");
			disableDotsInGroup("medicine");
			disableDotsInGroup("occult");
			disableDotsInGroup("politics");
			disableDotsInGroup("science");
			break;
		
		case "In-Clan":
			disableDotsInGroup("in-clan-disc1-");
			disableDotsInGroup("in-clan-disc2-");
			disableDotsInGroup("in-clan-disc3-");
			break;
			
		case "Out-Clan":
		
		case "Backgrounds":
		
		case "Virtues":
		
		default:
			console.log("Error encountered when calling disableDotsInMetaGroup: bad metaGroup");
			return false;
			break;
		}
}

function enableDotsInMetaGroup(metaGroup, enable1, enable2, enable3, enable4, enable5) /* physical, mental, etc */ {
	switch (metaGroup) {
		case "Physical":
			enableDotsInGroup("str", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("dex", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("sta", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Social":
			enableDotsInGroup("cha", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("man", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("app", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Mental":
			enableDotsInGroup("per", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("int", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("wit", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Talents":
			enableDotsInGroup("alertness", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("athletics", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("brawl", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("dodge", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("empathy", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("expression", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("intimidation", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("leadership", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("streetwise", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("subterfuge", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Skills":
			enableDotsInGroup("animalKen", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("crafts", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("drive", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("etiquette", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("firearms", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("melee", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("performance", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("security", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("stealth", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("survival", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Knowledges":
			enableDotsInGroup("academics", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("computer", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("finance", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("investigation", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("law", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("linguistics", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("medicine", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("occult", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("politics", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("science", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "In-Clan":
			enableDotsInGroup("in-clan-disc1-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("in-clan-disc2-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("in-clan-disc3-", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Out-Clan":
			enableDotsInGroup("out-clan-disc1-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("out-clan-disc2-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("out-clan-disc3-", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Backgrounds":
			enableDotsInGroup("bkgd-1-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bkgd-2-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bkgd-3-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bkgd-4-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bkgd-5-", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bkgd-6-", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Virtues":
			enableDotsInGroup("conscience", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("selfControl", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("courage", enable1, enable2, enable3, enable4, enable5);
			break;
		
		default:
			console.log("Error encountered when calling enableDotsInMetaGroup: bad metaGroup");
			return false;
			break;
	}
}

function enableOnlyUnchecked() {
	for (var i=0;i<document.getElementsByClassName('dot').length;i++) {
		document.getElementsByClassName('dot')[i].disabled = document.getElementsByClassName('dot')[i].checked /* disabled if checked */
	}
}

function decrementCounter(step) {
	var myValue = document.getElementById("dotCounter").innerText.valueOf();
	for (var i=0;i<step;i++) {
		myValue--;
	}
	document.getElementById("dotCounter").innerText = myValue;
	updateScreen();
}

function incrementCounter(step) {
	var myValue = document.getElementById("dotCounter").innerText.valueOf();
	for (var i=0;i<step;i++) {
		myValue++;
	}
	document.getElementById("dotCounter").innerText = myValue;
	updateScreen();
}

function updateScreen() /* makes sure all of the things that should be updated, are */{
	if (document.getElementById("dotCounter").innerText.valueOf() == 0) {
		document.getElementById("dotCounter").style.display = "none"; 
		nextStep();
	};
	if (flown) {
		flyout();
	} else {
		flyin();
	};
}

function nextStep() /* Advances to the next step */{
	abort = true;
	switch (window.stepName) {
		case "Step00":
			stepName = "Step01";
			Step01();
			break;
		
		case "Step01":
			stepName = "Step02";
			Step02();
			break;
			
		case "Step02":
			stepName = "Step03";
			Step03();
			break;
		
		case "Step03":
			stepName = "Step04";
			Step04();
			break;
			
		case "Step04":
			stepName = "Step05";
			Step05();
			break;
			
		case "Step05":
			stepName = "Step06";
			Step06();
			break;
			
		case "Step06":
			stepName = "Step07";
			Step07();
			break;
			
		case "Step07":
			stepName = "Step08";
			Step08();
			break;
			
		case "Step08":
			stepName = "Step09";
			Step09();
			break;
		
		case "Step09":
			stepName = "Step10";
			Step10();
			break;
			
		case "Step10":
			stepName = "Step11";
			Step11();
			break;
	
	
	};
	flown = true;
	updateScreen();
}

/* Event assignment stuff */
function attributeSelectionBuilder() /* build the steps menu feature that allows the selection of attribute groups */ {
	phys = document.getElementsByClassName("phy");
	for (i=0,max = document.getElementsByClassName("phy").length;i<max;i++) {
		phys[i].onclick = function() { 
			leftBlocker.remove();
			dotCounter.style.left = 170;
			dotCounter.style.top = 260;
			dotCounter.style.display = "block";
			for (i=0,max = document.getElementsByClassName("phy").length;i<max;i++) {
				phys[i].style.display = "none";
			};
			enableDotsInMetaGroup("Physical",false,true,true,true,false);
		};
	};
	
	soci = document.getElementsByClassName("soc");
	for (i=0,max = document.getElementsByClassName("soc").length;i<max;i++) {
		soci[i].onclick = function() { 
			centerBlocker.remove();
			dotCounter.style.left = 475;
			dotCounter.style.top = 260;
			dotCounter.style.display = "block";
			for (i=0,max = document.getElementsByClassName("soc").length;i<max;i++) {
				soci[i].style.display = "none";
			};
			enableDotsInMetaGroup("Social",false,true,true,true,false);
			if (window.clan == "Nosferatu") { disableDotsInGroup("app"); };
		};
	};
	
	ment = document.getElementsByClassName("men");
	for (i=0,max = document.getElementsByClassName("men").length;i<max;i++) {
		ment[i].onclick = function() { 
			rightBlocker.remove();
			dotCounter.style.left = 785;
			dotCounter.style.top = 260;
			dotCounter.style.display = "block";
			for (i=0,max = document.getElementsByClassName("men").length;i<max;i++) {
				ment[i].style.display = "none";
			};
			enableDotsInMetaGroup("Mental",false,true,true,true,false);
		};
	};
}

function abilitySelectionBuilder() /* build the steps menu feature that allows the selection of ability groups */ {
	tale = document.getElementsByClassName("tal");
	for (i=0,max = document.getElementsByClassName("tal").length;i<max;i++) {
		tale[i].onclick = function() { 
			leftBlocker.remove();
			dotCounter.style.left = 150;
			dotCounter.style.top = 390;
			dotCounter.style.display = "block";
			for (i=0,max = document.getElementsByClassName("tal").length;i<max;i++) {
				tale[i].style.display = "none";
			};
			enableDotsInMetaGroup("Talents",true,true,true,false,false);
		};
	};
	
	skil = document.getElementsByClassName("ski");
	for (i=0,max = document.getElementsByClassName("ski").length;i<max;i++) {
		skil[i].onclick = function() { 
			centerBlocker.remove();
			dotCounter.style.left = 460;
			dotCounter.style.top = 390;
			dotCounter.style.display = "block";
			for (i=0,max = document.getElementsByClassName("ski").length;i<max;i++) {
				skil[i].style.display = "none";
			};
			enableDotsInMetaGroup("Skills",true,true,true,false,false);
		};
	};
	
	know = document.getElementsByClassName("kno");
	for (i=0,max = document.getElementsByClassName("kno").length;i<max;i++) {
		know[i].onclick = function() { 
			rightBlocker.remove();
			dotCounter.style.left = 775;
			dotCounter.style.top = 390;
			dotCounter.style.display = "block";
			for (i=0,max = document.getElementsByClassName("kno").length;i<max;i++) {
				know[i].style.display = "none";
			};
			enableDotsInMetaGroup("Knowledges",true,true,true,false,false);
		};
	};
}

function initialDotSetup() {
	allDots = document.getElementsByClassName("dot");
	for (i=0,max = document.getElementsByClassName("dot").length;i<max;i++) {
		allDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(1);
			} else {
				incrementCounter(1);
			};
		};
	};
}

function freebieDotSetup() {
	var allDots = document.getElementsByClassName("dot");
	var attributeDots = new Array(45);
	var abilityDots = new Array(150);
	var disciplineDots = new Array(30);
	var backgroundDots = new Array(30);
	var virtueDots = new Array(15);
	var humanityDots = new Array(10);
	var willpowerDots = new Array(10);
	
	var i;
	
	for (i=0,max = allDots.length;i<max;i++) {
		if (allDots[i].checked) {
			allDots[i].disabled = true;
		} else {
			allDots[i].disabled = false;
		}
	}
	
	for (i=0;i<attributeDots.length;i++) {
		attributeDots[i] = allDots[i];
	}
	
	for (i=0;i<attributeDots.length;i++) {
		attributeDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(5);
			} else {
				incrementCounter(5);
			};
		}
	}
	
	for (i=0;i<abilityDots.length;i++) {
		abilityDots[i] = allDots[i+attributeDots.length];
	}
	
	for (i=0;i<abilityDots.length;i++) {
		abilityDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(2);
			} else {
				incrementCounter(2);
			};
		}
	}
	
	for (i=0;i<disciplineDots.length;i++) {
		disciplineDots[i] = allDots[i+abilityDots.length];
	}
	
	for (i=0;i<disciplineDots.length;i++) {
		disciplineDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(7);
			} else {
				incrementCounter(7);
			};
		}
	}
	
	for (i=0;i<backgroundDots.length;i++) {
		backgroundDots[i] = allDots[i+disciplineDots.length];
	}
	
	for (i=0;i<backgroundDots.length;i++) {
		backgroundDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(1);
			} else {
				incrementCounter(1);
			};
		}
	}
	
	for (i=0;i<virtueDots.length;i++) {
		virtueDots[i] = allDots[i+backgroundDots.length];
	}
	
	for (i=0;i<virtueDots.length;i++) {
		virtueDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(2);
			} else {
				incrementCounter(2);
			};
		}
	}
	
	for (i=0;i<humanityDots.length;i++) {
		humanityDots[i] = allDots[i+virtueDots.length];
	}
	
	for (i=0;i<humanityDots.length;i++) {
		humanityDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(2);
			} else {
				incrementCounter(2);
			};
		}
	}
	
	for (i=0;i<willpowerDots.length;i++) {
		willpowerDots[i] = allDots[i+humanityDots.length];
	}
	
	for (i=0;i<willpowerDots.length;i++) {
		willpowerDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(1);
			} else {
				incrementCounter(1);
			};
		}
	}
}

function xpDotSetup() {
	var allDots = document.getElementsByClassName("dot");
	var attributeDots = new Array(45);
	var abilityDots = new Array(150);
	var inDisciplineDots = new Array(15);
	var outDisciplineDots = new Array(15);
	var backgroundDots = new Array(30);
	var virtueDots = new Array(15);
	var humanityDots = new Array(10);
	var willpowerDots = new Array(10);
	
	var i;	
	
	for (i=0,max = allDots.length;i<max;i++) {
		if (allDots[i].checked) {
			allDots[i].disabled = true;
		} else {
			allDots[i].disabled = false;
		}
	}
	
	for (i=0;i<attributeDots.length;i++) /* set variable */ {
		attributeDots[i] = allDots[i];
	}
	
	for (i=0;i<attributeDots.length;i++) /* add function */ {
		attributeDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(4 * (i % 5));
			} else {
				incrementCounter(4 * (i % 5));
			};
			break;
		}
	}
	
	for (i=0;i<abilityDots.length;i++) /* set variable */ {
		abilityDots[i] = allDots[i+attributeDots.length];
	}
	
	for (i=0;i<abilityDots.length;i++) /* add function */ {
		abilityDots[i].onclick = function() { 
			if ((i % 5) === 0) {
				if (this.checked) {
					decrementCounter(3);
				} else {
					incrementCounter(3);
				};
			} else {
				if (this.checked) {
					decrementCounter(2 * (i % 5));
				} else {
					incrementCounter(2 * (i % 5));
				};
			}
		}
	}
	
	for (i=0;i<inDisciplineDots.length;i++) /* set variable */ {
		inDisciplineDots[i] = allDots[i+abilityDots.length];
	}
	
	for (i=0;i<inDisciplineDots.length;i++) /* add function */ {
		inDisciplineDots[i].onclick = function() { 
			if ((i % 5) === 0) {
				if (this.checked) {
					decrementCounter(10);
				} else {
					incrementCounter(10);
				};
			} else {
				if (this.checked) {
					decrementCounter(5 * (i % 5));
				} else {
					incrementCounter(5 * (i % 5));
				};
			}
		}
	}
	
	for (i=0;i<outDisciplineDots.length;i++) /* set variable */ {
		outDisciplineDots[i] = allDots[i+inDisciplineDots.length];
	}
	
	for (i=0;i<outDisciplineDots.length;i++) /* add function */ {
		outDisciplineDots[i].onclick = function() { 
			if ((i % 5) === 0) {
				if (this.checked) {
					decrementCounter(10);
				} else {
					incrementCounter(10);
				};
			} else {
				if (this.checked) {
					decrementCounter(7 * (i % 5));
				} else {
					incrementCounter(7 * (i % 5));
				};
			}
		}
	}
	
	for (i=0;i<backgroundDots.length;i++) /* set variable */ {
		backgroundDots[i] = allDots[i+disciplineDots.length];
	}
	
	for (i=0;i<backgroundDots.length;i++) /* set variable */ {
		backgroundDots[i].disabled = true;
	}
	
	for (i=0;i<backgroundDots.length;i++) /* add function */ {
		backgroundDots[i].onclick = function() { 
			/* no effect; cannot add dots to backgrounds with xp */
		}
	}
	
	for (i=0;i<virtueDots.length;i++) /* set variable */ {
		virtueDots[i] = allDots[i+backgroundDots.length];
	}
	
	for (i=0;i<virtueDots.length;i++) /* add function */ {
		virtueDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(2 * (i % 5));
			} else {
				incrementCounter(2 * (i % 5));
			};
		}
	}
	
	for (i=0;i<humanityDots.length;i++) /* set variable */ {
		humanityDots[i] = allDots[i+virtueDots.length];
	}
	
	for (i=0;i<humanityDots.length;i++) /* add function */ {
		humanityDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(2 * (i % 5));
			} else {
				incrementCounter(2 * (i % 5));
			};
		}
	}
	
	for (i=0;i<willpowerDots.length;i++) /* set variable */ {
		willpowerDots[i] = allDots[i+humanityDots.length];
	}
	
	for (i=0;i<willpowerDots.length;i++) /* add function */ {
		willpowerDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(i % 5);
			} else {
				incrementCounter(i % 5);
			};
		}
	}
}

