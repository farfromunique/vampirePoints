var abort;
var stepName = "Step00";
var clan;

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
		
		case "Disciplines":
		
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
		
		case "Disciplines":
		
		case "Backgrounds":
		
		case "Virtues":
		
		default:
			console.log("Error encountered when calling enableDotsInMetaGroup: bad metaGroup");
			return false;
			break;
	}
}

/* procedural stuff */
function Step00() /* Things to do onLoad */ {
	disableDotsInGroup('All');
	flyoutOnRight();
	flyout();
}

function Step01() {
	clan = document.getElementById('clanSelect');
	clan = clan.value;
	var app = new Array();
	for (i=1,max=5;i<=max;i++) {
		app[i] = document.getElementById('app'+i);
		}

		
	if (clan == "Nosferatu") {
		for (i=1,max=5;i<=max;i++) {
			app[i].disabled = true;
			app[i].checked = false;
		} 
	} else {
		for (i=1,max=5;i<=max;i++) {
			if (i==1) {
			app[1].checked = true;
			} else {
			app[i].disabled = false;
			}
		}
	}

	/* This will be reworked per bug #6 */
	while (document.getElementById('out-clan-disc1').options.length > 0) {
		document.getElementById('in-clan-disc1').options.remove(0);
		document.getElementById('in-clan-disc2').options.remove(0);
		document.getElementById('in-clan-disc3').options.remove(0);
		document.getElementById('out-clan-disc1').options.remove(0);
		document.getElementById('out-clan-disc2').options.remove(0);
		document.getElementById('out-clan-disc3').options.remove(0);
	}

	var disciplinesByClan = new Array();
	disciplinesByClan['Assimite'] = ['Celerity', 'Obfuscate', 'Quietus'];
	disciplinesByClan['Brujah'] = ['Celerity', 'Potence', 'Presence'];
	disciplinesByClan['Gangrel'] = ['Animalism', 'Fortitude', 'Protean'];
	disciplinesByClan['Giovanni'] = ['Dominate', 'Necromancy', 'Potence'];
	disciplinesByClan['Lasombra'] = ['Dominate', 'Obtenebration', 'Potence'];
	disciplinesByClan['Malkavian'] = ['Auspex', 'Dementation', 'Obfuscate'];
	disciplinesByClan['Nosferatu'] = ['Animalism', 'Obfuscate', 'Potence'];
	disciplinesByClan['Ravnos'] = ['Animalism', 'Chimerstry', 'Fortitude'];
	disciplinesByClan['Toreador'] = ['Auspex', 'Celerity', 'Presence'];
	disciplinesByClan['Tremere'] = ['Auspex', 'Dominate', 'Thaumaturgy'];
	disciplinesByClan['Ventrue'] = ['Dominate', 'Fortitude', 'Presence'];
	disciplinesByClan['Tzimisce'] = ['Animalism', 'Auspex', 'Vicissitude'];
	disciplinesByClan['Setite'] = ['Obfuscate', 'Presence', 'Serpentis'];

	var allDisciplines = [' ', 'Animalism', 'Auspex', 'Celerity', 'Chimerstry', 'Dementation', 'Dominate', 'Fortitude', 'Obfuscate', 'Obtenebration', 'Potence', 'Presence', 'Protean', 'Quietus', 'Serpentis', 'Vicissitude']

	var thisClan = disciplinesByClan[clan];
	var indisciplines = new Array();
	var outdisciplines1 = new Array();
	var outdisciplines2 = new Array();
	var outdisciplines3 = new Array();
	for (i=0;i<3;i++) {
		indisciplines[i] = new Option(thisClan[i]);
		}
		
		document.getElementById('in-clan-disc1').options.add(indisciplines[0]);
		document.getElementById('in-clan-disc2').options.add(indisciplines[1]);
		document.getElementById('in-clan-disc3').options.add(indisciplines[2]);

	for (i=0;i<15;i++) {
		outdisciplines1[i] = new Option(allDisciplines[i]);
		outdisciplines2[i] = new Option(allDisciplines[i]);
		outdisciplines3[i] = new Option(allDisciplines[i]);
	}

	for (i=0;i<15;i++) {
			document.getElementById('out-clan-disc1').options.add(outdisciplines1[i]);
			document.getElementById('out-clan-disc2').options.add(outdisciplines2[i]);
			document.getElementById('out-clan-disc3').options.add(outdisciplines3[i]);
		}
	
	document.getElementById('clanName').innerHTML = "<h1>" + clan + "</h1>";
	
	window.nextStep();
}

function Step02() {

	var blocker = document.createElement("div");
	blocker.style.position = "absolute";
	blocker.style.display = "inline";	
	blocker.style.top = 220;
	blocker.style.left = 15;
	blocker.style.width = 300;
	blocker.style.height = 115;
	blocker.style.backgroundColor = "#000";
	blocker.style.opacity = .5;
	
	window.leftBlocker = document.body.appendChild(blocker);
	window.centerBlock = leftBlocker.cloneNode(false);
	window.centerBlocker = document.body.appendChild(centerBlock);
	window.rightBlock = leftBlocker.cloneNode(false);
	window.rightBlocker = document.body.appendChild(rightBlock);
	
	centerBlocker.style.left = 325;
	rightBlocker.style.left = 635;
	
	document.getElementById("dotCounter").innerText = "7";
	
	document.getElementById("Step01").className = "previous";
	document.getElementById("Step02").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step03() {	
	document.getElementById("dotCounter").innerText = "5";
	
	document.getElementById("Step02").className = "previous";
	document.getElementById("Step03").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step04() {	
	document.getElementById("dotCounter").innerText = "3";
	
	document.getElementById("Step03").className = "previous";
	document.getElementById("Step04").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step05() {
	var blocker = document.createElement("div");
	blocker.style.position = "absolute";
	blocker.style.display = "inline";	
	blocker.style.top = 365;
	blocker.style.left = 15;
	blocker.style.width = 300;
	blocker.style.height = 285;
	blocker.style.backgroundColor = "#000";
	blocker.style.opacity = .5;
	
	window.leftBlocker = document.body.appendChild(blocker);
	window.centerBlock = leftBlocker.cloneNode(false);
	window.centerBlocker = document.body.appendChild(centerBlock);
	window.rightBlock = leftBlocker.cloneNode(false);
	window.rightBlocker = document.body.appendChild(rightBlock);
	
	centerBlocker.style.left = 325;
	rightBlocker.style.left = 635;
	
	document.getElementById("dotCounter").innerText = "13";
	
	document.getElementById("Step04").className = "previous";
	document.getElementById("Step05").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step06() {	
	document.getElementById("dotCounter").innerText = "9";
	
	document.getElementById("Step05").className = "previous";
	document.getElementById("Step06").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step07() {	
	document.getElementById("dotCounter").innerText = "5";
	
	document.getElementById("Step06").className = "previous";
	document.getElementById("Step07").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step08() {
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function decrementCounter() {
	var myValue = document.getElementById("dotCounter").innerText.valueOf();
	myValue--;
	document.getElementById("dotCounter").innerText = myValue;
	updateScreen();
}

function incrementCounter() {
	var myValue = document.getElementById("dotCounter").innerText.valueOf();
	myValue++;
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
			stepName = "Step8";
			Step8();
			break;
			
		case "Step8":
			stepName = "Step8";
			step9();
			break;
	
	
	};
	flown = true;
	updateScreen();
}

window.onload = function() { Step00(); };