function count() {
	var input = document.getElementById("letterCountInput").value;

    document.getElementById("letterCountOutput").innerHTML = input.length;
}
function lowercase() {
	var input = document.getElementById("lowercaseInput").value;

    document.getElementById("lowerCaseOutput").innerHTML = input.toLowerCase();
}
function uppercase() {
	var input = document.getElementById("uppercaseInput").value;

    document.getElementById("uppercaseOutput").innerHTML = input.toUpperCase();
}
function postChange() {
	var input = document.getElementById("postChangeInput").value;
	input=input.replace(/&/g, "','");
	input=input.replace(/=/g,"':'");
    document.getElementById("postChangeOutput").innerHTML = "'" + input + "'";
}
function memFlip() {
	var input = document.getElementById("memFlipInput").value;
	if (input.startsWith("0x")){
		input = input.substring(2);
	}
	output = ""
	for (i = input.length - 2; i >= 0; i = i - 2) {
		output += '\\x' +  input.substring(i, i + 2);
	}
	document.getElementById("memFlipOutput").innerHTML = '"' + output + '"'
}