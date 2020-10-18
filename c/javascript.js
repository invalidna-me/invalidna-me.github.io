
	
function submitFunction() {
	var input = document.getElementById("inputBox").value;
	
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
}

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

function Decrypt(f) {
    ciphertext = document.getElementById("c").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    var key = parseInt(document.getElementById("key").value);
    if(key > Math.floor(2*(ciphertext.length-1))){ alert("key is too large for the ciphertext length."); return; }      
    if(key==1) document.getElementById("p").value = ciphertext;
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
      document.getElementById("p").value = pt.join("");
    }
}
;