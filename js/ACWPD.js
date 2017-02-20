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