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

function getMaxCheckedElements() {
	var groups = document.getElementsByClassName("attr");
	for (var i = 0;i<groups.length;i++) {
		groups[i].highestDot = 0;
		groups[i].dots = groups[i].getElementsByTagName("input");
		
		for (var j = 0;j<groups[i].dots.length;j++) {
			if (groups[i].dots[j].checked) {
				groups[i].highestDot++;
			}
		}
	}
	output = "";
	for (i = 0;i<groups.length;i++) {
		output += groups[i].id + "=>" + groups[i].highestDot + ";\n";
	}
	document.getElementById("allDots").value = output;
}

function getCustomNames() {
	document.getElementById("customNames").value = "in1" + "=>" + document.getElementById("in1").innerText + ";";
	document.getElementById("customNames").value += "in2" + "=>" + document.getElementById("in2").innerText + ";";
	document.getElementById("customNames").value += "in3" + "=>" + document.getElementById("in3").innerText + ";";
	document.getElementById("customNames").value += "ou1" + "=>" + document.getElementById("ou1").innerText + ";";
	document.getElementById("customNames").value += "ou2" + "=>" + document.getElementById("ou2").innerText + ";";
	document.getElementById("customNames").value += "ou3" + "=>" + document.getElementById("ou3").innerText + ";";
	
	document.getElementById("customNames").value += "bk1" + "=>" + document.getElementById("bk1").innerText + ";";
	document.getElementById("customNames").value += "bk2" + "=>" + document.getElementById("bk2").innerText + ";";
	document.getElementById("customNames").value += "bk3" + "=>" + document.getElementById("bk3").innerText + ";";
	document.getElementById("customNames").value += "bk4" + "=>" + document.getElementById("bk4").innerText + ";";
	document.getElementById("customNames").value += "bk5" + "=>" + document.getElementById("bk5").innerText + ";";
	document.getElementById("customNames").value += "bk6" + "=>" + document.getElementById("bk6").innerText + ";";
}

function getFluff() {
	document.getElementById("fluff").value = "character=>" + document.getElementById("characterName").value + ";";
	document.getElementById("fluff").value += "player=>" + document.getElementById("player").value + ";";
	document.getElementById("fluff").value += "chronicle=>" + document.getElementById("chronicle").value + ";";
	document.getElementById("fluff").value += "nature=>" + document.getElementById("nature").value + ";";
	document.getElementById("fluff").value += "demeanor=>" + document.getElementById("demeanor").value + ";";
	document.getElementById("fluff").value += "concept=>" + document.getElementById("concept").value + ";";
	document.getElementById("fluff").value += "generation=>" + document.getElementById("generation").value + ";";
	document.getElementById("fluff").value += "sire=>" + document.getElementById("sire").value + ";";
	document.getElementById("fluff").value += "title=>" + document.getElementById("title").value + ";";
}

function finalBeforeSend() {
	getMaxCheckedElements()
	document.getElementById("outClanName").value = document.getElementById("clanName").innerText;
	getCustomNames()
	getFluff()
}

function xpCost(id, group) {
	
	var rating = id.id.substr(id.id.length-1,1);
	console.log('id = ' + id + '; rating = ' & rating & '; group = ' & group);
	switch (group) {
		case group = 'attribute':
			var costs = new Array(5)
			costs = [99,4,8,12,16];
			break;
		
		case group = 'ability':
			var costs = new Array(5)
			costs = [3,2,4,6,8];
			break;
			
		case group = 'inDiscipline':
			var costs = new Array(5)
			costs = [10,5,10,15,20];
			break;
		
		case group = 'outDiscipline':
			var costs = new Array(5)
			costs = [10,7,14,21,28];
			break;
		
		case group = 'background':
			var costs = new Array(5)
			costs = [99,99,99,99,99];
			break;
		
		case group = 'virtue':
			var costs = new Array(5)
			costs = [99,2,4,6,8];
			break;
		
		case group = 'humanity':
			var costs = new Array(10)
			costs = [99,2,4,6,8,10,12,14,16,18];
			break;
		
		case group = 'willpower':
			var costs = new Array(10)
			costs = [99,1,2,3,4,5,6,7,8,9];
			break;
	}
	
	if (id.checked) /* this is backwards, because it fires after the click goes through! */ {
		return costs[rating-1];
	} else {
		return costs[rating-1]
	};
	
	
}

function Step00() /* Things to do onLoad */ {
	disableDotsInGroup('All');
	disableDotsInGroup('bloodPool');
	addEventToID("Save","click","finalBeforeSend()")
	flyoutOnRight();
	flyout();
}

function Step01() /* Clan Selection */ {
	stepName = 'Step01';
	clan = document.getElementById('clanSelect');
	clan = clan.value;
			
	if (clan == "Nosferatu") {
		document.getElementById('appea1').checked = false;
	} else {
		document.getElementById('appea1').checked = true;
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
			
		document.getElementById('in1text').innerText = thisClan[0];
		document.getElementById('in2text').innerText = thisClan[1];
		document.getElementById('in3text').innerText = thisClan[2];
	
	document.getElementById('clanName').innerHTML = "<h1>" + clan + "</h1>";
	
	window.initialDotSetup()
	
	window.nextStep();
}

function Step02() /* Attributes (1 of 3) */ {
	stepName = 'Step02';
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
	
	document.getElementById("dotCounter").innerHTML = "7";
	
	document.getElementById("Step01").className = "previous";
	document.getElementById("Step02").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step03() /* Attributes (2 of 3) */ {
	stepName = 'Step03';
	document.getElementById("dotCounter").innerHTML = "5";
	
	document.getElementById("Step02").className = "previous";
	document.getElementById("Step03").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step04() /* Attributes (3 of 3) */  {
	stepName = 'Step04';
	document.getElementById("dotCounter").innerHTML = "3";
	
	document.getElementById("Step03").className = "previous";
	document.getElementById("Step04").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step05() /* Abilities (1 of 3) */ {
	stepName = 'Step05';
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
	
	document.getElementById("dotCounter").innerHTML = "13";
	
	document.getElementById("Step04").className = "previous";
	document.getElementById("Step05").className = "current";
	
	disableDotsInGroup('All');
}

function Step06() /* Abilities (2 of 3) */ {
	stepName = 'Step06';
	document.getElementById("dotCounter").innerHTML = "9";
	
	document.getElementById("Step05").className = "previous";
	document.getElementById("Step06").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step07() /* Abilities (3 of 3) */ {
	stepName = 'Step07';
	document.getElementById("dotCounter").innerHTML = "5";
	
	document.getElementById("Step06").className = "previous";
	document.getElementById("Step07").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step08() /* Disciplines */ {
	stepName = 'Step08';
	document.getElementById("dotCounter").innerHTML = "3";
	dotCounter.style.left = 150;
	dotCounter.style.top = 690;
	dotCounter.style.display = "block";
	
	document.getElementById("Step07").className = "previous";
	document.getElementById("Step08").className = "current";
	
	disableDotsInGroup("All");
	enableDotsInMetaGroup("In-Clan",true,true,true,false,false);
}

function Step09() /* Backgrounds */ {
	stepName = 'Step09';
	document.getElementById("dotCounter").innerHTML = "5";
	dotCounter.style.left = 460;
	dotCounter.style.top = 710;
	dotCounter.style.display = "block";
	
	document.getElementById("Step08").className = "previous";
	document.getElementById("Step09").className = "current";
	
	backgroundBuilder();
	
	disableDotsInGroup("All");
	enableDotsInMetaGroup("Backgrounds",true,true,true,true,true);
}

function Step10() /* Virtues */ {
	stepName = 'Step10';
	
	checkGeneration()
	
	document.getElementById("dotCounter").innerHTML = "7";
	dotCounter.style.left = 775;
	dotCounter.style.top = 710;
	dotCounter.style.display = "block";
	
	document.getElementById("Step09").className = "previous";
	document.getElementById("Step10").className = "current";
	
	disableDotsInGroup("All");
	enableDotsInMetaGroup("Virtues",false,true,true,true,true);
}

function Step11() /* Freebie Points */ {
	var humanity = 0;
	var courage = 0;
	
	stepName = 'Step11';
	
	document.getElementById("dotCounter").innerHTML = document.getElementById("freebiePoints").value;
	dotCounter.style.left = 945;
	dotCounter.style.top = 125;
	dotCounter.style.display = "block";
	
	document.getElementById("Step10").className = "previous";
	document.getElementById("Step11").className = "current";
	
	for (var i=0;i<5;i++) {
		if (document.getElementById('consc' + (i+1)).checked) { humanity++; };
		if (document.getElementById('self ' + (i+1)).checked) { humanity++; };
	}
	
	for (i=0;i<humanity;i++) {
		document.getElementById('human' + (i+1)).checked = true;
		document.getElementById('human' + (i+1)).disabled = true;
	}
	
	for (var i=0;i<5;i++) {
		if (document.getElementById('coura' + (i+1)).checked) { courage++; };
	}
	
	for (i=0;i<courage;i++) {
		document.getElementById('willp' + (i+1)).checked = true;
		document.getElementById('willp' + (i+1)).disabled = true;
	}
	
	enableOnlyUnchecked();
	freebieDotSetup();
}

function Step12() /* Experience Points */ {
	stepName = 'Step12';
	
	document.getElementById("dotCounter").innerHTML = document.getElementById("xp").value;
	dotCounter.style.left = 945;
	dotCounter.style.top = 125;
	dotCounter.style.display = "block";
	
	document.getElementById("Step11").className = "previous";
	document.getElementById("Step12").className = "current";
	
	enableOnlyUnchecked();
	xpDotSetup();
}

function updateFreebies() {
	document.getElementById('dotCounter').innerHTML = document.getElementById('freebiePoints').value;
}

function updateXP() {
	document.getElementById('dotCounter').innerHTML = document.getElementById('xp').value;
}

document.addEventListener('DOMContentLoaded',function() {
	var i;
	
	window.onresize = function() { 
		flyoutOnRight();
		if (flown) {
			flyin();
		} else {
			flyout();
		};
	};
	
	addEventToID("charSheet","Click","flyin()");
	addEventToID("phases","Click","flyout()");
	addEventToID("clanSelect","Change","Step01()");
	addEventToID("freebieUpdate","Click","updateFreebies()");
	addEventToID("xpUpdate","Click","updateXP()");
	
	if (document.getElementById('Step02')) {
		attributeSelectionBuilder();
	};
	
	if (document.getElementById('Step05')) {
		abilitySelectionBuilder();
	};

	initialDotSetup();
	
	Step00();
	
});

