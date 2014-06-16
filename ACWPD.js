/******************************************************************************
These functions are designed for use in ACWPD projects.
All code is Copyright 2014 Aaron Coquet unless otherwise noted.
Direct inquiries to aaron@acwpd.com
******************************************************************************/

function addEventToID(selector, eventType, functionText) {
	var commandText;
	if (!window[selector]) { return false; };
	commandText = "document.getElementById('" + selector;
	eventType = eventType.toLowerCase();
	switch (eventType) {
		case "click":
			commandText = commandText + "').onclick";
			break;
		
		case "load":
			commandText = commandText + "').onload";
			break;
			
		case "change":
			commandText = commandText + "').onchange";
			break;
		
		case "mouseover":
			commandText = commandText + "').onmouseover";
			break;
		
		case "mouseout":
			commandText = commandText + "').onmouseout";
			break;
		
		case "submit":
			commandText = commandText + "').onsubmit";
			break;
		
		case "doubleclick":
			commandText = commandText + "').ondblclick";
			break;
		
		/* invalid input handler */
		default:
			alert("Invalid eventType provided. Aborting!");
			return;
	}
	
	commandText = commandText + " = function () { " + functionText + "};";
	eval(commandText);
}

function removeAllMyEventListeners(id) {
	id.onclick = "";
	id.onload = "";
	id.onchange = "";
	id.onmouseover = "";
	id.onmouseout = "";
	id.onsubmit = "";
	id.ondblclick = "";
}

function changeFirstCharacters(id, newText) {
	/****************************************
	This code provided by http://stackoverflow.com/users/44853/lc , in answer to question http://stackoverflow.com/questions/24237147/dynamically-changing-innertexts-start-without-eval/24237235#24237235 */
	var el = document.getElementById(id);
	el.innerHTML = newText + el.innerHTML.substr(el.innerText.length, el.innerHTML.length - el.innerText.length) + "\n";
}

function remove(id) {
	try {
		id.remove()
	} 
	catch (e) {
		try {
			id.removeNode()
		}
		catch (f) {
			error.log ("Tried object.remove: " + e + "\n Then tried object.removeNode: " + f)
		}
	}
}