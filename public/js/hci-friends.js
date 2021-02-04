'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");	
}

function anagrammedName(name) {

	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		document.getElementsByClassName(name)[0].innerHTML = "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		document.getElementsByClassName(name)[0].innerHTML = "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		document.getElementsByClassName(name)[0].innerHTML = "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		document.getElementsByClassName(name)[0].innerHTML = "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		document.getElementsByClassName(name)[0].innerHTML = "Canal Yak";
	}
	else if (name == "Allen Newell") {
		document.getElementsByClassName(name)[0].innerHTML = "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		document.getElementsByClassName(name)[0].innerHTML = "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		document.getElementsByClassName(name)[0].innerHTML = "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}



