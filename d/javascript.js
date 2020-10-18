
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function submitFunction() {
	var input = document.getElementById("inputBox").value;
	decrypt(input);
}

function decode(box) {
	var input = document.getElementById(box.id).innerHTML;
	document.getElementById("inputBox").value = input;
	decrypt(input);
}

function decrypt(input) {
	var uriText;
	try {
		uriText = decodeURI(input);
	}
	catch(err) {
		uriText = "ERROR";
	}
	
    document.getElementById("hexOutput").innerHTML = hex2a(input.replace(/\s/g,''));
    document.getElementById("base64Output").innerHTML = Base64.decode(input);
    document.getElementById("base32Output").innerHTML = base32Decode(input);
	document.getElementById("ascii").innerHTML = asciiText(input);
    document.getElementById("uriOutput").innerHTML = uriText;
    document.getElementById("reversedOutput").innerHTML = reverseString(input);
    document.getElementById("binaryOutput").innerHTML = binary2Ascii(input);
	document.getElementById("morseOutput").innerHTML = morseDecode(input);
	
	document.getElementById("rot1").innerHTML = rot(1, input);
    document.getElementById("rot2").innerHTML = rot(2, input);
    document.getElementById("rot3").innerHTML = rot(3, input);
    document.getElementById("rot4").innerHTML = rot(4, input);
    document.getElementById("rot5").innerHTML = rot(5, input);
    document.getElementById("rot6").innerHTML = rot(6, input);
    document.getElementById("rot7").innerHTML = rot(7, input);
    document.getElementById("rot8").innerHTML = rot(8, input);
    document.getElementById("rot9").innerHTML = rot(9, input);
    document.getElementById("rot10").innerHTML = rot(10, input);
	  document.getElementById("rot11").innerHTML = rot(11, input);
    document.getElementById("rot12").innerHTML = rot(12, input);
    document.getElementById("rot13").innerHTML = rot(13, input);
    document.getElementById("rot14").innerHTML = rot(14, input);
    document.getElementById("rot15").innerHTML = rot(15, input);
    document.getElementById("rot16").innerHTML = rot(16, input);
    document.getElementById("rot17").innerHTML = rot(17, input);
    document.getElementById("rot18").innerHTML = rot(18, input);
    document.getElementById("rot19").innerHTML = rot(19, input);
    document.getElementById("rot20").innerHTML = rot(10, input);
	  document.getElementById("rot21").innerHTML = rot(21, input);
    document.getElementById("rot22").innerHTML = rot(22, input);
    document.getElementById("rot23").innerHTML = rot(23, input);
    document.getElementById("rot24").innerHTML = rot(24, input);
    document.getElementById("rot25").innerHTML = rot(25, input);
    document.getElementById("rot47").innerHTML = rot47f(input);
	
	document.getElementById("polybius").innerHTML = polybius(input);
	document.getElementById("polybiusFlipped").innerHTML = polybiusFlipped(input);
	document.getElementById("scytale2").innerHTML = scytale(2, input.replace(/\s/g,''));
	document.getElementById("scytale3").innerHTML = scytale(3, input.replace(/\s/g,''));
	document.getElementById("scytale4").innerHTML = scytale(4, input.replace(/\s/g,''));
	document.getElementById("scytale5").innerHTML = scytale(5, input.replace(/\s/g,''));
	document.getElementById("scytale6").innerHTML = scytale(6, input.replace(/\s/g,''));
	document.getElementById("scytale7").innerHTML = scytale(7, input.replace(/\s/g,''));
	document.getElementById("scytale8").innerHTML = scytale(8, input.replace(/\s/g,''));
	document.getElementById("scytale9").innerHTML = scytale(9, input.replace(/\s/g,''));
	document.getElementById("scytale2CW").innerHTML = scytaleCW(2, input.replace(/\s/g,''));
	document.getElementById("scytale3CW").innerHTML = scytaleCW(3, input.replace(/\s/g,''));
	document.getElementById("scytale4CW").innerHTML = scytaleCW(4, input.replace(/\s/g,''));
	document.getElementById("scytale5CW").innerHTML = scytaleCW(5, input.replace(/\s/g,''));
	document.getElementById("scytale6CW").innerHTML = scytaleCW(6, input.replace(/\s/g,''));
	document.getElementById("scytale7CW").innerHTML = scytaleCW(7, input.replace(/\s/g,''));
	document.getElementById("scytale8CW").innerHTML = scytaleCW(8, input.replace(/\s/g,''));
	document.getElementById("scytale9CW").innerHTML = scytaleCW(9, input.replace(/\s/g,''));
	document.getElementById("railfence2").innerHTML = railfence(2, input);
	document.getElementById("railfence3").innerHTML = railfence(3, input);
	document.getElementById("railfence4").innerHTML = railfence(4, input);
	document.getElementById("railfence5").innerHTML = railfence(5, input);
	document.getElementById("railfence6").innerHTML = railfence(6, input);
	document.getElementById("railfence7").innerHTML = railfence(7, input);
	document.getElementById("railfence8").innerHTML = railfence(8, input);
	document.getElementById("railfence9").innerHTML = railfence(9, input);
	document.getElementById("atbash").innerHTML = atbashFunc(input);
	document.getElementById("num2Letter").innerHTML = num2LetterFunc(input);
	document.getElementById("unique").innerHTML = uniqFunc(input);
	document.getElementById("roman").innerHTML = fromRomanFunc(input);
	document.getElementById("octal").innerHTML = decodeOct(input);
	
    document.getElementById("hashType").innerHTML  = '<a href = "https://en.wikipedia.org/wiki/List_of_hash_functions">Wikipedia</a> <a href = "https://crackstation.net/">CrackStation</a> Best Guess:' + determineHashType(input);
	
}

function determineHashType(str) {
	var size = sizeof(str);
	switch (size) {
        case 128: return "MD5 (128 bits)";
        case 160: return "SHA-1 (160 bits)";
		case 224: return "SHA-224 (224 bits)";		
        case 256: return "SHA-256 (256 bits)";
        case 384: return "SHA-384 (384 bits)";
        case 512: return "SHA-512 (512 bits)";
        case 448: return "BCrypt (448 bits)";		
    }
	
	return "Invalid/Unknown  (" + size+ " bits)";
}

function sizeof(input) {

    var size = 0;
    for (var i = 0; i < input.length; i++) {
        size += 4 * input[i].length;
    }
    return size;
};


function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    return str;
}  


function morseDecode(morseCode) {
  var ref = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0'
  };

  return morseCode
    .split('   ')
    .map(
      a => a
        .split(' ')
        .map(
          b => ref[b]
        ).join('')
    ).join(' ');
}

function base32Decode(base32EncodedString) {
     /// <summary>Decodes a base32 encoded string into a Uin8Array, note padding is not supported</summary>
    /// <param name="base32EncodedString" type="String">The base32 encoded string to be decoded</param>
    /// <returns type="Uint8Array">The Unit8Array representation of the data that was encoded in base32EncodedString</returns>
    if (!base32EncodedString && base32EncodedString !== "") {
        return "base32EncodedString cannot be null or undefined";
    }

    if (base32EncodedString.length * 5 % 8 !== 0) {
        return "base32EncodedString is not of the proper length. Please verify padding.";
    }

    base32EncodedString = base32EncodedString.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz234567";
    var returnArray = new Array(base32EncodedString.length * 5 / 8);

    var currentByte = 0;
    var bitsRemaining = 8;
    var mask = 0;
    var arrayIndex = 0;
	
	var output = "";

    for (var count = 0; count < base32EncodedString.length; count++) {
        var currentIndexValue = alphabet.indexOf(base32EncodedString[count]);
        if (-1 === currentIndexValue) {
            if ("=" === base32EncodedString[count]) {
                var paddingCount = 0;
                for (count = count; count < base32EncodedString.length; count++) {
                    if ("=" !== base32EncodedString[count]) {
                        return "Invalid '=' in encoded string";
                    } else {
                        paddingCount++;
                    }
                }

                switch (paddingCount) {
                    case 6:
                        returnArray = returnArray.slice(0, returnArray.length - 4);
                        break;
                    case 4:
                        returnArray = returnArray.slice(0, returnArray.length - 3);
                        break;
                    case 3:
                        returnArray = returnArray.slice(0, returnArray.length - 2);
                        break;
                    case 1:
                        returnArray = returnArray.slice(0, returnArray.length - 1);
                        break;
                    default:
                        return "Incorrect padding";
                }
            } else {
                return "base32EncodedString contains invalid characters or invalid padding.";
            }
        } else {
            if (bitsRemaining > 5) {
                mask = currentIndexValue << (bitsRemaining - 5);
                currentByte = currentByte | mask;
                bitsRemaining -= 5;
            } else {
                mask = currentIndexValue >> (5 - bitsRemaining);
                currentByte = currentByte | mask;
                returnArray[arrayIndex++] = currentByte;
                currentByte = currentIndexValue << (3 + bitsRemaining);
                bitsRemaining += 3;
            }
        }
    }
	
	var array = new Uint8Array(returnArray)
	for (var i =0; i < array.length; i ++)
	{
		output += String.fromCharCode(array[i]);
	}

	return output;
}

function reverseString(s)
{
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function binary2Ascii(str) {

    var binString = '';

    str.replace(/\s/g, '').match(/.{1,8}/g).map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    return binString;
}

function rot(i, s) {
  return s.replace( /[A-Za-z]/g , function(c) {
	return String.fromCharCode( c.toUpperCase().charCodeAt(0) +  i <= 90 ? c.toUpperCase().charCodeAt(0) +  i : c.toUpperCase().charCodeAt(0) +  i - 26 );
  } );
}
;
function polybius(s) {
  let map = new Map();
  map.set(11, 'A');
  map.set(12, 'B');
  map.set(13, 'C');
  map.set(14, 'D');
  map.set(15, 'E');
  map.set(21, 'F');
  map.set(22, 'G');
  map.set(23, 'H');
  map.set(24, 'I');
  map.set(25, 'J');
  map.set(31, 'K');
  map.set(32, 'L');
  map.set(33, 'M');
  map.set(34, 'N');
  map.set(35, 'O');
  map.set(41, 'P');
  map.set(42, 'Q');
  map.set(43, 'R');
  map.set(44, 'S');
  map.set(45, 'T');
  map.set(51, 'U');
  map.set(52, 'W');
  map.set(53, 'X');
  map.set(54, 'Y');
  map.set(55, 'Z');
  var split = s.split(" ");
  
  return s.replace( /[0-9]{2}/g , function(c) {
	return map.get(Number(c));
  } );
}
;function polybiusFlipped(s) {
  let map = new Map();
  map.set(11, 'A');
  map.set(12, 'F');
  map.set(13, 'K');
  map.set(14, 'P');
  map.set(15, 'V');
  map.set(21, 'B');
  map.set(22, 'G');
  map.set(23, 'L');
  map.set(24, 'Q');
  map.set(25, 'W');
  map.set(31, 'C');
  map.set(32, 'H');
  map.set(33, 'M');
  map.set(34, 'R');
  map.set(35, 'X');
  map.set(41, 'D');
  map.set(42, 'I');
  map.set(43, 'N');
  map.set(44, 'S');
  map.set(45, 'Y');
  map.set(51, 'E');
  map.set(52, 'J');
  map.set(53, 'O');
  map.set(54, 'T');
  map.set(55, 'Z');
  var split = s.split(" ");
  
  return s.replace( /[0-9]{2}/g , function(c) {
	return map.get(Number(c));
  } );
}
;

function scytale(n, s) {
  var text="";
  
  var thing = s.length / n;
  
  for (var i = 0; i < n; i++) {
	for (var j = 0; j < thing; j++) {
		var index =(j * n) + i;
		if (index< s.length) {
			text += s[index];
		}
	}
  }
  
  return text;
}
function scytaleCW(n, s) {
  var text="";
  
  var thing = Math.floor(s.length / n);
  
  if (thing * n < s.length) {
	var missing =  ((thing + 1) * n) - s.length;
	String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
	for (var i = missing; i > 0; i--) {
		s = s.splice(s.length - ((n-1)*i), 0, " ");
	}
	
	thing = Math.floor(s.length / n);
  }
  
  for (var i = n-1; i >= 0; i--) {
	for (var j = 0; j < thing; j++) {
		var index =(j * n) + i;
		if (index< s.length) {
			text += s[index];
		}
	}
  }
  
  return text;
}
function railfence(key, ciphertext) {
  if(key==1) return ciphertext;
    else{
      pt = new Array(ciphertext.length);   k=0;
      for(line=0; line<key-1; line++){
    	  skip=2*(key-line-1);	 j=0;
        for(i=line; i<ciphertext.length;){
            pt[i] = ciphertext.charAt(k++);
       	    if((line==0) || (j%2 == 0)) i+=skip;
        	  else i+=2*(key-1) - skip;  
        	  j++;        
        }
      }
      for(i=line; i<ciphertext.length; i+=2*(key-1)) pt[i] = ciphertext.charAt(k++);
      return pt.join("");
    }
}
function atbashFunc(mensage) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
    var tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
    var decoded_string = "";

    for (var i = 0; i < mensage.length; i++) {
        var coded_letra = mensage.charAt(i);
        
	if (/[^a-zA-Z]/.test(mensage[i])) {
		decoded_string = decoded_string+mensage[i];	
	}
	else if (mensage[i] === mensage[i].toUpperCase()) {
	    	var letraPosMayus = alphabet.indexOf(coded_letra);
	    	var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
	    	decoded_string = decoded_string+tebLetraPosMayus;
        } else {
	    	var letraPosMinus1 = alphabet1.indexOf(coded_letra);
	    	var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
	    	decoded_string = decoded_string + tebLetraPosMinus1;
        }

    }
    return decoded_string;
}
function num2LetterFunc(message) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var split = message.split(".");

	var string = ""

    for (var i = 0; i < split.length; i++) {
		if (split[i].includes(" ")) {
			var splittysplit = split[i].split(" ");
			for (var j = 0; j< splittysplit.length; j++) {
				var number = splittysplit[j];
				var letter = alphabet.charAt(number - 1)
				string += letter;
				if (j +1 < splittysplit.length) {
					string += " " 
				}
			}
		} else {
			var number = split[i];
			string += alphabet.charAt(number - 1);
		}
	}
	
    return string;
}
function uniqFunc(message) {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var split = message.split(".");

	var string = ""
	var dict = {};
	var index = 0;

    for (var i = 0; i < split.length; i++) {
		if (split[i].includes(" ")) {
			var splittysplit = split[i].split(" ");
			for (var j = 0; j< splittysplit.length; j++) {
				var number = splittysplit[j];
				if (!(number in dict)) {
					dict[number] = alphabet[index++]
				}
				var letter = dict[number]
				string += letter;
				if (j +1 < splittysplit.length) {
					string += " " 
				}
			}
		} else {
			var number = split[i];
			if (!(number in dict)) {
				dict[number] = alphabet[index++]
			}
			var letter = dict[number]
			string += letter;
		}
	}
	
    return string;
}
function fromRoman(str) {  
  var result = 0;
  // the result is now a number, not a string
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (str.indexOf(roman[i]) === 0){
    //checking for the first characters in the string
      result += decimal[i];
      //adding the decimal value to our result counter
      str = str.replace(roman[i],'');
      //remove the matched Roman letter from the beginning
    }
  }
  return result;
}
function fromRomanFunc(message) {
	var string = ""
	message = message.toUpperCase()
	var split = message.split(".");
    for (var i = 0; i < split.length; i++) {
		if (split[i].includes(" ")) {
			var splittysplit = split[i].split(" ");
			for (var j = 0; j< splittysplit.length; j++) {
				var rmn =  splittysplit[j];
				var number = fromRoman(rmn)
				string += number;
				if (j +1 < splittysplit.length) {
					string += " " 
				}else{
					string += "." 
				}
			}
		} else {
			var rmn = split[i];
			var number = fromRoman(rmn)
			string += number + ".";
		}
	}
	
    return string;
}

function decodeOct(octBytes) {
  return bytesToChars(octToDecBytes(octBytes.replace(/ /g,'').match(/[\s\S]{1,3}/g))).join('');
}

function bytesToChars(bytes) {
  return bytes.map(function(byte) {
    return String.fromCharCode(parseInt(byte, 10));
  });
}

function octToDecBytes(octBytes) {
  return octBytes.map(function(oct) {
    return parseInt(oct, 8);
  });
}

function asciiText(message){
	var split = message.split(".");

	var string = ""

    for (var i = 0; i < split.length; i++) {
		if (split[i].includes(" ")) {
			var splittysplit = split[i].split(" ");
			for (var j = 0; j< splittysplit.length; j++) {
				var number = splittysplit[j];
				var letter = String.fromCharCode(number)
				string += letter;
				if (j +1 < splittysplit.length) {
					string += " " 
				}
			}
		} else {
			var number = split[i];
			string += String.fromCharCode(number);;
		}
	}
	
    return string;
}

function rot47f(x)
{
  var s = [];
  for (var i = 0; i < x.length; i ++)
  {
    var j = x.charCodeAt(i);
    if ((j >= 33) && (j <= 126))
    {
      s[i] = String.fromCharCode(33 + ((j + 14) % 94));
    } 
    else
    {
      s[i] = String.fromCharCode(j);
    }
  }
  return s.join('');
}