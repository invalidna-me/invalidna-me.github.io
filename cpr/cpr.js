var lastPress = null;
var times = [];

function generate() {
    var now = Date.now();  
	document.getElementById("output").innerHTML="Measuring...";
	if (lastPress != null) {
		var timeDifference = now - lastPress;
		times.push(timeDifference);
			
		if (times.length >= 5) {
			times.shift()
			
			var timeSum = 0;
			for( var i = 0; i < times.length; i++ ){
				timeSum += parseInt( times[i], 10 );
			}

			var timeAve = timeSum/times.length;
			
			bpm = Math.round(60000/timeAve);
			measure = bpm - 110;
			var comment = ""
			if (Math.abs(measure) <= 10) {
				comment = "Good";
			} else if (measure > 0) {
				comment = "Too fast";
			} else if (measure < 0) {
				comment = "Too slow";
			}
			
			document.getElementById("output").innerHTML = comment + " (" + bpm + " bpm)";
		}
	}
		
	lastPress = now;
}