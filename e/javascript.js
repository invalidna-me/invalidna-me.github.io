function submitFunction() {
	var input = document.getElementById("inputBox").value;
	encrypt(input);
}

function encode(box) {
	var input = document.getElementById(box.id).innerHTML;
	encrypt(input);
}

function encrypt(input) {

	var hexText = ascii_to_hexa(input);
	var base64Text = base64_encode(input);
	var uriText = encodeASCII(input);
	//var base32Text = base32Decode(input);
	var reversedText = reverseString(input);
	var evalEncode = evalEncodeString(input);
	
    document.getElementById("hexOutput").innerHTML = hexText;
    document.getElementById("base64Output").innerHTML = base64Text;
    //document.getElementById("base32Output").innerHTML = base32Text;
    document.getElementById("uriOutput").innerHTML = uriText;
	document.getElementById("reversedOutput").innerHTML = reversedText
	document.getElementById("evalEncode").innerHTML = evalEncode;
}

function base64_encode (stringToEncode) { // eslint-disable-line camelcase
  var encodeUTF8string = function (str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into the base64 encoding algorithm.
    return encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes (match, p1) {
        return String.fromCharCode('0x' + p1)
      })
  }
  if (typeof window !== 'undefined') {
    if (typeof window.btoa !== 'undefined') {
      return window.btoa(encodeUTF8string(stringToEncode))
    }
  } else {
    return new Buffer(stringToEncode).toString('base64')
  }
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  var o1
  var o2
  var o3
  var h1
  var h2
  var h3
  var h4
  var bits
  var i = 0
  var ac = 0
  var enc = ''
  var tmpArr = []
  if (!stringToEncode) {
    return stringToEncode
  }
  stringToEncode = encodeUTF8string(stringToEncode)
  do {
    // pack three octets into four hexets
    o1 = stringToEncode.charCodeAt(i++)
    o2 = stringToEncode.charCodeAt(i++)
    o3 = stringToEncode.charCodeAt(i++)
    bits = o1 << 16 | o2 << 8 | o3
    h1 = bits >> 18 & 0x3f
    h2 = bits >> 12 & 0x3f
    h3 = bits >> 6 & 0x3f
    h4 = bits & 0x3f
    // use hexets to index into b64, and append result to encoded string
    tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4)
  } while (i < stringToEncode.length)
  enc = tmpArr.join('')
  var r = stringToEncode.length % 3
  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
}

  function array2json(arr) {
    var parts = [];
    var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');

    for(var key in arr) {
    	var value = arr[key];
        if(typeof value == "object") { //Custom handling for arrays
            if(is_list) parts.push(array2json(value)); /* :RECURSION: */
            else parts.push('"' + key + '":' + array2json(value)); /* :RECURSION: */
            //else parts[key] = array2json(value); /* :RECURSION: */
            
        } else {
            var str = "";
            if(!is_list) str = '"' + key + '":';

            //Custom handling for multiple data types
            if(typeof value == "number") str += value; //Numbers
            else if(value === false) str += 'false'; //The booleans
            else if(value === true) str += 'true';
            else str += '"' + value + '"'; //All other things
            // :TODO: Is there any more datatype we should be in the lookout for? (Functions?)

            parts.push(str);
        }
    }
    var json = parts.join(",");
    
    if(is_list) return '[' + json + ']';//Return numerical JSON
    return '{' + json + '}';//Return associative JSON
}

function reverseString(s)
{
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }
   
  function encodeASCII(s)
{
  var o = '';
  for (var i = 0; i <s.length; i++)
    o += "%" + s[i].charCodeAt(0);
  return encodeURI(s);
}

function evalEncodeString(str)
{
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString();
		arr1.push(hex);
	 }
	 var joined = arr1.join(',');
	return "eval(String.fromCharCode("+joined+"))";
}