function Step00() /* Things to do onLoad */ {
	disableDotsInGroup('All');
	flyoutOnRight();
	flyout();
}

function Step01() {
	stepName = 'Step01';
	clan = document.getElementById('clanSelect');
	clan = clan.value;
			
	if (clan == "Nosferatu") {
		document.getElementById('app1').checked = false;
	} else {
		document.getElementById('app1').checked = true;
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
	console.log(thisClan);
	var indisciplines = new Array();
	var outdisciplines1 = new Array();
	var outdisciplines2 = new Array();
	var outdisciplines3 = new Array();
			
		document.getElementById('in-clan-disc1').innerText = thisClan[0];
		document.getElementById('in-clan-disc2').innerText = thisClan[1];
		document.getElementById('in-clan-disc3').innerText = thisClan[2];
	
	document.getElementById('clanName').innerHTML = "<h1>" + clan + "</h1>";
	
	window.nextStep();
}

function Step02() {
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
	
	document.getElementById("dotCounter").innerText = "7";
	
	document.getElementById("Step01").className = "previous";
	document.getElementById("Step02").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step03() {
	stepName = 'Step03';
	document.getElementById("dotCounter").innerText = "5";
	
	document.getElementById("Step02").className = "previous";
	document.getElementById("Step03").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step04() {
	stepName = 'Step04';
	document.getElementById("dotCounter").innerText = "3";
	
	document.getElementById("Step03").className = "previous";
	document.getElementById("Step04").className = "current";
	
	disableDotsInMetaGroup("Physical");
	disableDotsInMetaGroup("Social");
	disableDotsInMetaGroup("Mental");
}

function Step05() {
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
	
	document.getElementById("dotCounter").innerText = "13";
	
	document.getElementById("Step04").className = "previous";
	document.getElementById("Step05").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step06() {
	stepName = 'Step06';
	document.getElementById("dotCounter").innerText = "9";
	
	document.getElementById("Step05").className = "previous";
	document.getElementById("Step06").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step07() {
	stepName = 'Step07';
	document.getElementById("dotCounter").innerText = "5";
	
	document.getElementById("Step06").className = "previous";
	document.getElementById("Step07").className = "current";
	
	disableDotsInMetaGroup("Talents");
	disableDotsInMetaGroup("Skills");
	disableDotsInMetaGroup("Knowledges");
}

function Step08() {
	stepName = 'Step08';
	document.getElementById("dotCounter").innerText = "3";
	dotCounter.style.left = 150;
	dotCounter.style.top = 690;
	dotCounter.style.display = "block";
	
	document.getElementById("Step07").className = "previous";
	document.getElementById("Step08").className = "current";
	
	disableDotsInGroup("All");
	enableDotsInMetaGroup("In-Clan",true,true,true,false,false);
}

function Step09() {
	stepName = 'Step09';
	document.getElementById("dotCounter").innerText = "5";
	dotCounter.style.left = 460;
	dotCounter.style.top = 690;
	dotCounter.style.display = "block";
	
	document.getElementById("Step08").className = "previous";
	document.getElementById("Step09").className = "current";
	
	disableDotsInGroup("All");
	enableDotsInMetaGroup("Backgrounds",true,true,true,false,false);
}

function Step10() {
	stepName = 'Step10';
	document.getElementById("dotCounter").innerText = "7";
	dotCounter.style.left = 775;
	dotCounter.style.top = 690;
	dotCounter.style.display = "block";
	
	document.getElementById("Step09").className = "previous";
	document.getElementById("Step10").className = "current";
	
	disableDotsInGroup("All");
	enableDotsInMetaGroup("Virtues",true,true,true,true,true);
}

function Step11() {
	var humanity = 0;
	
	stepName = 'Step11';
	
	document.getElementById("dotCounter").innerText = document.getElementById("freebiePoints").value;
	dotCounter.style.left = 945;
	dotCounter.style.top = 125;
	dotCounter.style.display = "block";
	
	document.getElementById("Step10").className = "previous";
	document.getElementById("Step11").className = "current";
	
	for (var i=0;i<5;i++) {
		if (document.getElementById('conscience' + (i+1)).checked) { humanity++; };
		if (document.getElementById('selfControl' + (i+1)).checked) { humanity++; };
	}
	
	for (i=0;i<humanity;i++) {
		document.getElementById('humanity' + (i+1)).checked = true;
		document.getElementById('humanity' + (i+1)).disabled = true;
	}
	
	for (i=0;i<5;i++) {
		document.getElementById('willpower' + (i+1)).checked = document.getElementById('courage' + (i+1)).checked = true;
		document.getElementById('willpower' + (i+1)).disabled = true;
	}
	
	enableOnlyUnchecked();
	freebieDotSetup();
}

function updateFreebies() {
	document.getElementById('dotCounter').innerText = document.getElementById('freebiePoints').value;
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
	addEventToID("","Click","");
	
	if (document.getElementById('Step02')) {
		attributeSelectionBuilder();
	};
	
	if (document.getElementById('Step05')) {
		abilitySelectionBuilder();
	};

	initialDotSetup();
	
	Step00();
	
}
);

