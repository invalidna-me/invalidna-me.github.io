function xor_str()
{
	var to_enc = document.getElementById("inputBox").value;
	var xor_key=document.getElementById("keyBox").value;
	
	var the_res="";//the result will be here
	for(i=0;i<to_enc.length;++i)
	{
		the_res+=String.fromCharCode(xor_key.charCodeAt(i % xor_key.length)^to_enc.charCodeAt(i));
	}
	
	document.getElementById("output").innerHTML = the_res
}