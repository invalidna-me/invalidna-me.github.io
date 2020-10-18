function toggleMe(a){
	var e=document.getElementById(a);
	if(!e)return true;
	if(e.style.display=="none"){
		e.style.display="block"
	}
	else{
		e.style.display="none"
	}
	return true;
}

function submitFunction() {
	document.getElementById("tools").style.display="block"
	var input = document.getElementById("inputBox").value.toUpperCase().replace(/ /g,'');
	var input2 = document.getElementById("inputBox2").value.toUpperCase().replace(/ /g,'');
	
	if (input2 == "") {
		document.getElementById("inputBox2").value = input;
		input2 = input;
	}

	var frequency = order(input, input2);
	document.getElementById("inputCopy").innerHTML = input2;
    document.getElementById("output").innerHTML = frequency;
}



function order(string, str) {

	var englishorder = ['E','T','A','O','I','N','S','R','H','D','L','U','C','M','F','Y','W','G','P','B','V','K','X','Q','J','Z']

	var alphabet =[];
	var letterUsage = [];
	var total = 0;
	for (i = 65; i <= 90; i++) {
		var num = counter(string, String.fromCharCode(i));
		alphabet.push(String.fromCharCode(i));
		letterUsage.push(num);
		total += num;
	}
	
	var frequency = refSort(alphabet, letterUsage);
	letterUsage.sort(function(a, b){return a-b});
	letterUsage.reverse();
	reportFrequency(englishorder, frequency, letterUsage);
	
	setup(englishorder, frequency);
	

	
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) {
		var index = frequency.indexOf(str.charAt(n));
		var transcribed = englishorder[index];
		arr1.push(transcribed);
	}
	
	bigrams(string);
	trigrams(string);
	 
	return arr1.join("");
}

function bigrams(string) {
	var bigrams = [];
	var usage = []; 
	for (var i = 2; i < string.length; i++){
		var s = string.substring(i-2, i);
		var contains = bigrams.indexOf(s);
		if (contains < 0) {
			bigrams.push(s);
			usage.push(1);
		} else {
			usage[contains] = usage[contains] + 1;
		}
	}
	
	var frequency = refSort(bigrams, usage);
	document.getElementById("bi1").innerHTML = frequency[0];
	document.getElementById("bi2").innerHTML = frequency[1];
	document.getElementById("bi3").innerHTML = frequency[2];
	
	usage.sort(function(a, b){return a-b});
	usage.reverse();
	
	
	var f = frequency.slice(0,26);
	var u = usage.slice(0,26);
	document.getElementById("2letters").innerHTML = f.join("<br>");
    document.getElementById("2lettersUsage").innerHTML = u.join("<br>");
}

function trigrams(string) {
	var trigrams = [];
	var usage = []; 
	for (var i = 3; i < string.length; i++){
		var s = string.substring(i-3, i);
		var contains = trigrams.indexOf(s);
		if (contains < 0) {
			trigrams.push(s);
			usage.push(1);
		} else {
			usage[contains] = usage[contains] + 1;
		}
	}
	
	var frequency = refSort(trigrams, usage);
	document.getElementById("trigram1").innerHTML = frequency[0];
	document.getElementById("trigram2").innerHTML = frequency[1];
	document.getElementById("trigram3").innerHTML = frequency[2];
	
	usage.sort(function(a, b){return a-b});
	usage.reverse();
	
	document.getElementById("trigram1usage").innerHTML = "(" + usage[0] + ")";
	document.getElementById("trigram2usage").innerHTML = "(" + usage[1] + ")";
	document.getElementById("trigram3usage").innerHTML = "(" + usage[2] + ")";
	
	
	var f = frequency.slice(0,26);
	var u = usage.slice(0,26);
	document.getElementById("3letters").innerHTML = f.join("<br>");
    document.getElementById("3lettersUsage").innerHTML = u.join("<br>");
	
}

function reportFrequency(englishorder, frequency, usage) {
	document.getElementById("en-order1").innerHTML = englishorder[0];
	document.getElementById("en-order2").innerHTML = englishorder[1];
	document.getElementById("en-order3").innerHTML = englishorder[2];
	document.getElementById("en-order4").innerHTML = englishorder[3];
	document.getElementById("en-order5").innerHTML = englishorder[4];
	document.getElementById("en-order6").innerHTML = englishorder[5];
	document.getElementById("en-order7").innerHTML = englishorder[6];
	document.getElementById("en-order8").innerHTML = englishorder[7];
	document.getElementById("en-order9").innerHTML = englishorder[8];
	document.getElementById("en-order10").innerHTML = englishorder[9];
	document.getElementById("en-order11").innerHTML = englishorder[10];
	document.getElementById("en-order12").innerHTML = englishorder[11];
	document.getElementById("en-order13").innerHTML = englishorder[12];
	document.getElementById("en-order14").innerHTML = englishorder[13];
	document.getElementById("en-order15").innerHTML = englishorder[14];
	document.getElementById("en-order16").innerHTML = englishorder[15];
	document.getElementById("en-order17").innerHTML = englishorder[16];
	document.getElementById("en-order18").innerHTML = englishorder[17];
	document.getElementById("en-order19").innerHTML = englishorder[18];
	document.getElementById("en-order20").innerHTML = englishorder[19];
	document.getElementById("en-order21").innerHTML = englishorder[20];
	document.getElementById("en-order22").innerHTML = englishorder[21];
	document.getElementById("en-order23").innerHTML = englishorder[22];
	document.getElementById("en-order24").innerHTML = englishorder[23];
	document.getElementById("en-order25").innerHTML = englishorder[24];
	document.getElementById("en-order26").innerHTML = englishorder[25];
	
	document.getElementById("fa-order1").innerHTML = frequency[0];
	document.getElementById("fa-order2").innerHTML = frequency[1];
	document.getElementById("fa-order3").innerHTML = frequency[2];
	document.getElementById("fa-order4").innerHTML = frequency[3];
	document.getElementById("fa-order5").innerHTML = frequency[4];
	document.getElementById("fa-order6").innerHTML = frequency[5];
	document.getElementById("fa-order7").innerHTML = frequency[6];
	document.getElementById("fa-order8").innerHTML = frequency[7];
	document.getElementById("fa-order9").innerHTML = frequency[8];
	document.getElementById("fa-order10").innerHTML = frequency[9];
	document.getElementById("fa-order11").innerHTML = frequency[10];
	document.getElementById("fa-order12").innerHTML = frequency[11];
	document.getElementById("fa-order13").innerHTML = frequency[12];
	document.getElementById("fa-order14").innerHTML = frequency[13];
	document.getElementById("fa-order15").innerHTML = frequency[14];
	document.getElementById("fa-order16").innerHTML = frequency[15];
	document.getElementById("fa-order17").innerHTML = frequency[16];
	document.getElementById("fa-order18").innerHTML = frequency[17];
	document.getElementById("fa-order19").innerHTML = frequency[18];
	document.getElementById("fa-order20").innerHTML = frequency[19];
	document.getElementById("fa-order21").innerHTML = frequency[20];
	document.getElementById("fa-order22").innerHTML = frequency[21];
	document.getElementById("fa-order23").innerHTML = frequency[22];
	document.getElementById("fa-order24").innerHTML = frequency[23];
	document.getElementById("fa-order25").innerHTML = frequency[24];
	document.getElementById("fa-order26").innerHTML = frequency[25];

	document.getElementById("letters").innerHTML = frequency.join("<br>");
    document.getElementById("lettersUsage").innerHTML = usage.join("<br>");
}

function setup(englishorder, frequency){
	document.getElementById("aBox").value = frequency[englishorder.indexOf('A')];
	document.getElementById("bBox").value = frequency[englishorder.indexOf('B')];
	document.getElementById("cBox").value = frequency[englishorder.indexOf('C')];
	document.getElementById("dBox").value = frequency[englishorder.indexOf('D')];
	document.getElementById("eBox").value = frequency[englishorder.indexOf('E')];
	document.getElementById("fBox").value = frequency[englishorder.indexOf('F')];
	document.getElementById("gBox").value = frequency[englishorder.indexOf('G')];
	document.getElementById("hBox").value = frequency[englishorder.indexOf('H')];
	document.getElementById("iBox").value = frequency[englishorder.indexOf('I')];
	document.getElementById("jBox").value = frequency[englishorder.indexOf('J')];
	document.getElementById("kBox").value = frequency[englishorder.indexOf('K')];
	document.getElementById("lBox").value = frequency[englishorder.indexOf('L')];
	document.getElementById("mBox").value = frequency[englishorder.indexOf('M')];
	document.getElementById("nBox").value = frequency[englishorder.indexOf('N')];
	document.getElementById("oBox").value = frequency[englishorder.indexOf('O')];
	document.getElementById("pBox").value = frequency[englishorder.indexOf('P')];
	document.getElementById("qBox").value = frequency[englishorder.indexOf('Q')];
	document.getElementById("rBox").value = frequency[englishorder.indexOf('R')];
	document.getElementById("sBox").value = frequency[englishorder.indexOf('S')];
	document.getElementById("tBox").value = frequency[englishorder.indexOf('T')];
	document.getElementById("uBox").value = frequency[englishorder.indexOf('U')];
	document.getElementById("vBox").value = frequency[englishorder.indexOf('V')];
	document.getElementById("wBox").value = frequency[englishorder.indexOf('W')];
	document.getElementById("xBox").value = frequency[englishorder.indexOf('X')];
	document.getElementById("yBox").value = frequency[englishorder.indexOf('Y')];
	document.getElementById("zBox").value = frequency[englishorder.indexOf('Z')];
}

function clearBox(){
	document.getElementById("aBox").value = '';
	document.getElementById("bBox").value = '';
	document.getElementById("cBox").value = '';
	document.getElementById("dBox").value = '';
	document.getElementById("eBox").value = '';
	document.getElementById("fBox").value = '';
	document.getElementById("gBox").value = '';
	document.getElementById("hBox").value = '';
	document.getElementById("iBox").value = '';
	document.getElementById("jBox").value = '';
	document.getElementById("kBox").value = '';
	document.getElementById("lBox").value = '';
	document.getElementById("mBox").value = '';
	document.getElementById("nBox").value = '';
	document.getElementById("oBox").value = '';
	document.getElementById("pBox").value = '';
	document.getElementById("qBox").value = '';
	document.getElementById("rBox").value = '';
	document.getElementById("sBox").value = '';
	document.getElementById("tBox").value = '';
	document.getElementById("uBox").value = '';
	document.getElementById("vBox").value = '';
	document.getElementById("wBox").value = '';
	document.getElementById("xBox").value = '';
	document.getElementById("yBox").value = '';
	document.getElementById("zBox").value = '';
}

function add(index) {
	document.getElementById(document.getElementById("en-order" + index).innerHTML.toLowerCase() + "Box").value = document.getElementById("fa-order"+index).innerHTML;
}

function addbi(index) {
	var english = document.getElementById("en-bi"+index).innerHTML;;
	var bi = document.getElementById("bi"+index).innerHTML;
	
	document.getElementById(english.charAt(0).toLowerCase() + "Box").value = bi.charAt(0);
	document.getElementById(english.charAt(1).toLowerCase() + "Box").value = bi.charAt(1);
	
}

function addtri(index) {
	var english = document.getElementById("en-trigram").innerHTML;;
	var tri = document.getElementById("trigram" + index).innerHTML;
	
	
	document.getElementById(english.charAt(0).toLowerCase() + "Box").value = tri.charAt(0);
	document.getElementById(english.charAt(1).toLowerCase() + "Box").value = tri.charAt(1);
	document.getElementById(english.charAt(2).toLowerCase() + "Box").value = tri.charAt(2);
	
}

function generate()
{
	var array = [];

	array.push(document.getElementById("aBox").value);
	array.push(document.getElementById("bBox").value);
	array.push(document.getElementById("cBox").value);
	array.push(document.getElementById("dBox").value);
	array.push(document.getElementById("eBox").value);
	array.push(document.getElementById("fBox").value);
	array.push(document.getElementById("gBox").value);
	array.push(document.getElementById("hBox").value);
	array.push(document.getElementById("iBox").value);
	array.push(document.getElementById("jBox").value);
	array.push(document.getElementById("kBox").value);
	array.push(document.getElementById("lBox").value);
	array.push(document.getElementById("mBox").value);
	array.push(document.getElementById("nBox").value);
	array.push(document.getElementById("oBox").value);
	array.push(document.getElementById("pBox").value);
	array.push(document.getElementById("qBox").value);
	array.push(document.getElementById("rBox").value);
	array.push(document.getElementById("sBox").value);
	array.push(document.getElementById("tBox").value);
	array.push(document.getElementById("uBox").value);
	array.push(document.getElementById("vBox").value);
	array.push(document.getElementById("wBox").value);
	array.push(document.getElementById("xBox").value);
	array.push(document.getElementById("yBox").value);
	array.push(document.getElementById("zBox").value);
	
	return array;
}

function checkTranscribe() {
	var array = generate();
	var str = document.getElementById("inputBox2").value.toUpperCase().replace(/ /g,'');

	var alphabet =[];
	for (i = 65; i <= 90; i++) {
		alphabet.push(String.fromCharCode(i));
	}
	
	alphabet.sort();
	array.sort();

	for (var i = 0; i < alphabet.length; ++i) {
		if (alphabet[i] !== array[i]) {
			alert("ERROR");
			break;
		}
	}

}

function transcribe() {
	var array = generate();
	var str = document.getElementById("inputBox2").value.toUpperCase().replace(/ /g,'');
	
	
	var input2 = document.getElementById("inputBox2").value.toUpperCase().replace(/ /g,'');
	document.getElementById("inputCopy").innerHTML = input2;

	var alphabet =[];
	for (i = 65; i <= 90; i++) {
		alphabet.push(String.fromCharCode(i));
	}
	
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) {
		var index = array.indexOf(str.charAt(n));
		
		var transcribed = alphabet[index];
		if (index < 0)
			transcribed = '*';
		arr1.push(transcribed);
	}
	
	document.getElementById("output").innerHTML = arr1.join("");
}

function counter(str, character) {
	for(var i=count=0; i<str.length; count+=+(character===str[i++]));
	return count;
}

function refSort (targetData, refData) {
  // Create an array of indices [0, 1, 2, ...N].
  var indices = Object.keys(refData);

  // Sort array of indices according to the reference data.
  indices.sort(function(indexA, indexB) {
    if (refData[indexA] < refData[indexB]) {
      return 1;
    } else if (refData[indexA] > refData[indexB]) {
      return -1;
    }
    return 0;
  });

  // Map array of indices to corresponding values of the target array.
  return indices.map(function(index) {
    return targetData[index];
  });
}
;