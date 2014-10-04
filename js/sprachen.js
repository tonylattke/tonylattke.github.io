var languages = ["es","de","en"];

// Show the language of lan argument
function show(lan) {
	$("." + lan).show();
}

// Show only the language of lan argument
function showOnly(lan) {
	// Hide other languages
	for (var i = 0; i < languages.length; i++) {
		if (languages[i] != "lan"){
			$("." + languages[i]).hide();
		}
	}

	// Show Lan
	$("." + lan).show();
}

// Show all languages
function showAll() {
	for (var i = 0; i < languages.length; i++) {
		$("." + languages[i]).show();
	}
}

// Hide the language of lan argument
function hide(lan) {
	$("." + lan).hide();
}

// Hide all languages
function hideAll() {
	for (var i = 0; i < languages.length; i++) {
		$("." + languages[i]).hide();
	}
}

// Clear the language of lan argument
function clear(lan) {
	$("." + lan).empty();
}

// Clear all languages
function hideAll() {
	for (var i = 0; i < languages.length; i++) {
		$("." + languages[i]).empty();
	}
}

// Replace the value on tag with id
function replaceValue (id,value) {
	$(id).empty();
	$(id).append(value);
}


// Append in the end a value on tag with id
function appendValue (id,value) {
	$(id).append(value);
}

// Append on the begining a value on tag with id
function appendValue (id,value) {
	$(id).prepend(value);
}