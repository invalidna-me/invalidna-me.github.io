function submitFunction() {
	var input = document.getElementById("inputBox").value;
	
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
}

function rot(i, s) {
  return s.replace( /[A-Za-z]/g , function(c) {
	return String.fromCharCode( c.toUpperCase().charCodeAt(0) +  i <= 90 ? c.toUpperCase().charCodeAt(0) +  i : c.toUpperCase().charCodeAt(0) +  i - 26 );
  } );
}
;