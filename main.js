var abort;
var stepName = "Step00";
var clan;
var flown;

/* Functional stuff */
function disableDotsInGroup(groupName) /* str, dex, etc */ {
	if (groupName == 'All') /* global disable button */ {
		var allDots = document.getElementsByClassName('dot');
		for (var i=0;i<allDots.length;i++) {
			allDots[i].disabled = true;
		};
		
	} else if (groupName == 'bloodPool') {
		
		var blood = document.getElementsByClassName('blood');
		
		for (var i=0;i<blood.length;i++) {
			blood[i].disabled = true;
		}
		
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
			disableDotsInGroup("stren");
			disableDotsInGroup("dexte");
			disableDotsInGroup("stami");
			break;
		
		case "Social":
			disableDotsInGroup("chari");
			disableDotsInGroup("manip");
			disableDotsInGroup("appea");
			break;
		
		case "Mental":
			disableDotsInGroup("perce");
			disableDotsInGroup("intel");
			disableDotsInGroup("wits");
			break;
		
		case "Talents":
			disableDotsInGroup("alert");
			disableDotsInGroup("athle");
			disableDotsInGroup("brawl");
			disableDotsInGroup("dodge");
			disableDotsInGroup("empat");
			disableDotsInGroup("expre");
			disableDotsInGroup("intim");
			disableDotsInGroup("leade");
			disableDotsInGroup("stree");
			disableDotsInGroup("subte");
			break;
		
		case "Skills":
			disableDotsInGroup("anima");
			disableDotsInGroup("craft");
			disableDotsInGroup("drive");
			disableDotsInGroup("etiqu");
			disableDotsInGroup("firea");
			disableDotsInGroup("melee");
			disableDotsInGroup("perfo");
			disableDotsInGroup("secur");
			disableDotsInGroup("steal");
			disableDotsInGroup("survi");
			break;
		
		case "Knowledges":
			disableDotsInGroup("acade");
			disableDotsInGroup("compu");
			disableDotsInGroup("finan");
			disableDotsInGroup("inves");
			disableDotsInGroup("law");
			disableDotsInGroup("lingu");
			disableDotsInGroup("medic");
			disableDotsInGroup("occul");
			disableDotsInGroup("polit");
			disableDotsInGroup("scien");
			break;
		
		case "In-Clan":
			disableDotsInGroup("in1");
			disableDotsInGroup("in2");
			disableDotsInGroup("in3");
			break;
			
		case "Out-Clan":
			disableDotsInGroup("ou1");
			disableDotsInGroup("ou2");
			disableDotsInGroup("ou3");
			break;
		
		case "Backgrounds":
			disableDotsInGroup("bk1");
			disableDotsInGroup("bk2");
			disableDotsInGroup("bk3");
			disableDotsInGroup("bk4");
			disableDotsInGroup("bk5");
			disableDotsInGroup("bk6");
			break;
		
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
			enableDotsInGroup("stren", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("dexte", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("stami", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Social":
			enableDotsInGroup("chari", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("manip", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("appea", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Mental":
			enableDotsInGroup("perce", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("intel", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("wits", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Talents":
			enableDotsInGroup("alert", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("athle", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("brawl", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("dodge", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("empat", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("expre", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("intim", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("leade", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("stree", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("subte", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Skills":
			enableDotsInGroup("anima", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("craft", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("drive", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("etiqu", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("firea", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("melee", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("perfo", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("secur", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("steal", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("survi", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Knowledges":
			enableDotsInGroup("acade", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("compu", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("finan", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("inves", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("law", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("lingu", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("medic", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("occul", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("polit", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("scien", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "In-Clan":
			enableDotsInGroup("in1", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("in2", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("in3", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Out-Clan":
			enableDotsInGroup("ou1", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("ou2", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("ou3", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Backgrounds":
			enableDotsInGroup("bk1", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bk2", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bk3", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bk4", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bk5", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("bk6", enable1, enable2, enable3, enable4, enable5);
			break;
		
		case "Virtues":
			enableDotsInGroup("consc", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("self ", enable1, enable2, enable3, enable4, enable5);
			enableDotsInGroup("coura", enable1, enable2, enable3, enable4, enable5);
			break;
		
		default:
			console.log("Error encountered when calling enableDotsInMetaGroup: bad metaGroup");
			return false;
			break;
	}
}

function checkGeneration() {
	var dropdowns = document.getElementsByTagName('select');
	var pool;
	var background;
	
	for (var i=1;i<dropdowns.length;i++) /* Skipping the first one, because it's not in the group */ {
		if (dropdowns[i].value == "Generation") {
			background = "bk" + i;
			console.log(background);
			if (document.getElementById(background+'5').checked) {
				document.getElementById('generation').value = '8';
				pool = 15;
			} else if (document.getElementById(background+'4').checked) {
				document.getElementById('generation').value = '9';
				pool = 14;
			} else if (document.getElementById(background+'3').checked) {	
				document.getElementById('generation').value = '10';
				pool = 13;
			} else if (document.getElementById(background+'2').checked) {	
				document.getElementById('generation').value = '11';
				pool = 12;
			} else if (document.getElementById(background+'1').checked) {	
				document.getElementById('generation').value = '12';
				pool = 11;
			} else {
				document.getElementById('generation').value = '13';
				pool = 10;
			}
		}
	}
	var blood = document.getElementsByClassName('blood');
	for (i=blood.length-1;i>=pool;i--) {
		blood[i].checked = true;
		blood[i].disabled = true;
	}
}

function enableOnlyUnchecked() {
	for (var i=0;i<document.getElementsByClassName('dot').length;i++) {
		document.getElementsByClassName('dot')[i].disabled = document.getElementsByClassName('dot')[i].checked /* disabled if checked */
	}
}

function decrementCounter(step) {
	var myValue = document.getElementById("dotCounter").innerHTML.valueOf();
	for (var i=0;i<step;i++) {
		myValue--;
	}
	document.getElementById("dotCounter").innerHTML = myValue;
	updateScreen();
}

function incrementCounter(step) {
	var myValue = document.getElementById("dotCounter").innerHTML.valueOf();
	for (var i=0;i<step;i++) {
		myValue++;
	}
	document.getElementById("dotCounter").innerHTML = myValue;
	updateScreen();
}

function updateScreen() /* makes sure all of the things that should be updated, are */{
	if (document.getElementById("dotCounter").innerHTML.valueOf() == 0) {
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
			Step01();
			break;
		
		case "Step01":
			Step02();
			break;
			
		case "Step02":
			Step03();
			break;
		
		case "Step03":
			Step04();
			break;
			
		case "Step04":
			Step05();
			break;
			
		case "Step05":
			Step06();
			break;
			
		case "Step06":
			Step07();
			break;
			
		case "Step07":
			Step08();
			break;
			
		case "Step08":
			Step09();
			break;
		
		case "Step09":
			Step10();
			break;
			
		case "Step10":
			Step11();
			break;
			
		case "Step11":
			Step12();
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
			this.parentNode.style.display = 'none';
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
			this.parentNode.style.display = 'none';
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
			this.parentNode.style.display = 'none';
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
			this.parentNode.style.display = 'none';
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
			this.parentNode.style.display = 'none';
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
			this.parentNode.style.display = 'none';
			enableDotsInMetaGroup("Knowledges",true,true,true,false,false);
		};
	};
}

function backgroundBuilder() {
	
	document.getElementById('background1').onchange = function () {
		document.getElementById("bk1").innerHTML = document.getElementById('background1').value + document.getElementById("bk1").innerHTML.substr(3, document.getElementById("bk1").innerHTML.length -3);
		initialDotSetup();
	}
	document.getElementById('background2').onchange = function () {
		document.getElementById("bk2").innerHTML = document.getElementById('background2').value + document.getElementById("bk2").innerHTML.substr(3, document.getElementById("bk2").innerHTML.length -3);
		initialDotSetup();
	}
	document.getElementById('background3').onchange = function () {
		document.getElementById("bk3").innerHTML = document.getElementById('background3').value + document.getElementById("bk3").innerHTML.substr(3, document.getElementById("bk3").innerHTML.length -3);
		initialDotSetup();
	}
	document.getElementById('background4').onchange = function () {
		document.getElementById("bk4").innerHTML = document.getElementById('background4').value + document.getElementById("bk4").innerHTML.substr(3, document.getElementById("bk4").innerHTML.length -3);
		initialDotSetup();
	}
	document.getElementById('background5').onchange = function () {
		document.getElementById("bk5").innerHTML = document.getElementById('background5').value + document.getElementById("bk5").innerHTML.substr(3, document.getElementById("bk5").innerHTML.length -3);
		initialDotSetup();
	}
	document.getElementById('background6').onchange = function () {
		document.getElementById("bk6").innerHTML = document.getElementById('background6').value + document.getElementById("bk6").innerHTML.substr(3, document.getElementById("bk6").innerHTML.length -3);
		initialDotSetup();
	}
	
}

function initialDotSetup() {
	allDots = document.getElementsByClassName("dot");
	for (i=0,max = document.getElementsByClassName("dot").length;i<max;i++) {
		removeAllMyEventListeners(allDots[i]);
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
	var startPos=0;
	
	for (i=0,max = allDots.length;i<max;i++) {
		if (allDots[i].checked) {
			allDots[i].disabled = true;
		} else {
			allDots[i].disabled = false;
		}
	}
	
	for (i=0;i<attributeDots.length;i++) {
		attributeDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + attributeDots.length;
	
	for (i=0;i<abilityDots.length;i++) {
		abilityDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + abilityDots.length;
	
	for (i=0;i<disciplineDots.length;i++) {
		disciplineDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + disciplineDots.length;
	
	for (i=0;i<backgroundDots.length;i++) {
		backgroundDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + backgroundDots.length;
	
	for (i=0;i<virtueDots.length;i++) {
		virtueDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + virtueDots.length;
	
	for (i=0;i<humanityDots.length;i++) {
		humanityDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + humanityDots.length;
	
	for (i=0;i<willpowerDots.length;i++) {
		willpowerDots[i] = allDots[i+startPos];
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
	var startPos=0;
	
	for (i=0,max = allDots.length;i<max;i++) {
		if (allDots[i].checked) {
			allDots[i].disabled = true;
		} else {
			allDots[i].disabled = false;
		}
	}
	
	for (i=0;i<attributeDots.length;i++) /* set variable */ {
		attributeDots[i] = allDots[i+startPos];
	}
	
	for (i=0;i<attributeDots.length;i++) /* add function */ {
		attributeDots[i].onclick = function() { 
			if (this.checked) {
				decrementCounter(4 * (i % 5));
			} else {
				incrementCounter(4 * (i % 5));
			};
		}
	}
	
	startPos = startPos + attributeDots.length;
	
	for (i=0;i<abilityDots.length;i++) /* set variable */ {
		abilityDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + abilityDots.length;
	
	for (i=0;i<inDisciplineDots.length;i++) /* set variable */ {
		inDisciplineDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + inDisciplineDots.length;
	
	for (i=0;i<outDisciplineDots.length;i++) /* set variable */ {
		outDisciplineDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + outDisciplineDots.length;
	
	for (i=0;i<backgroundDots.length;i++) /* set variable */ {
		backgroundDots[i] = allDots[i+startPos];
	}
	
	for (i=0;i<backgroundDots.length;i++) /* set variable */ {
		backgroundDots[i].disabled = true;
	}
	
	for (i=0;i<backgroundDots.length;i++) /* add function */ {
		backgroundDots[i].onclick = function() { 
			/* no effect; cannot add dots to backgrounds with xp */
		}
	}
	
	startPos = startPos + backgroundDots.length;
	
	for (i=0;i<virtueDots.length;i++) /* set variable */ {
		virtueDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + virtueDots.length;
	
	for (i=0;i<humanityDots.length;i++) /* set variable */ {
		humanityDots[i] = allDots[i+startPos];
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
	
	startPos = startPos + humanityDots.length;
	
	for (i=0;i<willpowerDots.length;i++) /* set variable */ {
		willpowerDots[i] = allDots[i+startPos];
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

