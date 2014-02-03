/******************************************************************************
These functions are designed for use in ACWPD projects.
All code is Copyright 2014 Aaron Coquet.
Direct inquiries to aaron@acwpd.com
******************************************************************************/
function addEventToID(selector, eventType, functionText) {
	var commandText;
	if (!window[selector]) { return false; };
	commandText = "document.getElementById('" + selector;
	switch (eventType) {
		case "Click":
			commandText = commandText + "').onclick";
			break;
		
		case "Load":
			commandText = commandText + "').onload";
			break;
			
		case "Change":
			commandText = commandText + "').onchange";
			break;
		
		case "Mouseover":
			commandText = commandText + "').onmouseover";
			break;
		
		case "Mouseout":
			commandText = commandText + "').onmouseout";
			break;
		
		case "Submit":
			commandText = commandText + "').onsubmit";
			break;
		
		case "DoubleClick":
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