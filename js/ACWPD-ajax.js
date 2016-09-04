/* 
 * Provides ajax tools for ACWPD Projects
 * Feel free to use this in your projects! Just provide Attribution by keeping this block in place!
 * 
 * This is version 1.1
 * 
 * For the latest version, please visit: https://github.com/farfromunique/ACWPD_Tools
 * 
 * This code is copyright (C) 2016 Aaron Coquet / ACWPD
 */ 
 
/* 
 * Instructions for preperation:
 * Replace ::SiteName:: with the string to be placed in the browser's history
 *
 */

// Put site's address here, in format "http://sub.domain.tld/path/to/root"
var sRoot = document.location.origin; // Default: document.location.origin
var siteName = "::SiteName::";

function adjustMyURL(displayURL) {
	window.history.pushState({site:sRoot}, siteName, "/" + displayURL + "/");
}

function loadMyPage(pageName, displayURL, targetDiv) {
	var ajax;
	document.getElementById("content").innerHTML = "Loading ...";
	ajax = new XMLHttpRequest();
	ajax.open("GET", sRoot + pageName, true);
	ajax.onreadystatechange = function() {
		if (ajax.readyState === 4) {
			document.getElementById(targetDiv).innerHTML = ajax.responseText;
		}
	};
	ajax.send(null);
	adjustMyURL(displayURL);
}

function postToPage(pageName, displayURL, postData) {
	var ajax;
	document.getElementById("content").innerHTML = "Loading ...";
	ajax = new XMLHttpRequest();
	ajax.open("POST", sRoot + pageName, true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState === 4) {
			document.getElementById("content").innerHTML = ajax.responseText;
		}
	};
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(postData);
	adjustMyURL(displayURL);
}

function postAndRedirect(pageName, displayURL, postData, redirectTo) {
	var ajax;
    document.getElementById("content").innerHTML = "Loading ...";
	ajax = new XMLHttpRequest();
	ajax.open("POST",sRoot + pageName, true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState === 4) {
			loadMyPage(redirectTo, displayURL, 'content');
		}
	};
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(postData);
	adjustMyURL(displayURL);
}

function DismissImportant() {
	if (document.getElementById('Important')) {
	document.getElementById('Important').style.display='none';
	}
}

function hideMessage() {
	if(document.getElementById('Message')) {
		document.getElementById('Message').style.display='none';
	}
}

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