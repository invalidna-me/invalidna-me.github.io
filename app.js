const playerChar = "0";
const computerChar = "4";

let finished = false;
let play_board = ["", "", "", "4", "0", "4", "", "", ""];

const board_container = document.querySelector(".game-area");
const resetButton = document.getElementById("reset");
const footerButton = document.getElementById("footer");

function check_board_complete() {
	let flag = true;
	play_board.forEach(element => {
	if (element != playerChar && element != computerChar) {
		flag = false;
	}
	});
	finished = flag;
};

function check_line(a, b, c) {
	return (
		play_board[a] == play_board[b] &&
		play_board[a] == play_board[c] &&
		play_board[a] != ""
	);
};

function check_match() {
	for (i = 0; i < 9; i += 3) {
		if (check_line(i, i + 1, i + 2)) {
			return setWinner(i, i + 1, i + 2);
		}
	}
	for (i = 0; i < 3; i++) {
		if (check_line(i, i + 3, i + 6)) {
			return setWinner(i, i + 3, i + 6);
		}
	}
	if (check_line(0, 4, 8)) {
		return setWinner(0, 4, 8);
	}
	if (check_line(2, 4, 6)) {
		return setWinner(2, 4, 6);
	}
	return "";
};

function setWinner(a, b, c) {
	var result = "finished" + play_board[a];
    document.querySelector(`#block_${a}`).classList.add(result);
    document.querySelector(`#block_${b}`).classList.add(result);
    document.querySelector(`#block_${c}`).classList.add(result);
    return result;
};

function check_for_winner() {
	let res = check_match()
	if (res == "finished" + playerChar) {
		finished = true
		footer.style.visibility='visible'
	} else if (res == "finished" + computerChar) {
		finished = true
		resetButton.style.visibility='visible'
	} else if (finished) {
		resetButton.style.visibility='visible'
	}
};

function draw() {
	board_container.innerHTML = ""
	play_board.forEach((e, i) => {
	board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`
	if (e == playerChar || e == computerChar) {
		document.querySelector(`#block_${i}`).classList.add("occupied");
	}
	});
};

function game_loop() {
	draw();
	check_board_complete();
	check_for_winner();
}

function addPlayerMove(e) {
	if (!finished && play_board[e] == "") {
		play_board[e] = playerChar;
		game_loop();
		addComputerMove();
	}
};

function addComputerMove() {
	if (!finished) {
		selected = ai();
		play_board[selected] = computerChar;
		game_loop();
	}
};

function ai() {
	var index = grabTheWin()
	if (index != null) {
		return index
	}
	index = preventDefeat()
	if (index != null) {
		return index
	}
	do {
		index = Math.floor(Math.random() * 9);
	} while (play_board[index] != "");
	return index
}

var winConditions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
function grabTheWin()
{
	return makeMove( "4" );
}

function preventDefeat()
{
	return makeMove( "0" );
}

function makeMove(marker) {
	var moveMade = false;
	for( var i = 0; i < winConditions.length; i++ )
	{
		var count = 0;
		for( var j = 0; j < winConditions[i].length; j++ )
		{
			if(  marker === play_board[winConditions[i][j]] )
			{
				count++;
			}
		}

		if( count == 2 )
		{
			for( j = 0; j < winConditions[i].length; j++ )
			{
				var square = winConditions[i][j]
				if( play_board[square] == "" )
				{
					console.log(square);
					return(square)
				}
			}
		}

		if( moveMade )
		{
			break;
		}
	}
	return null;
}


function reset() {
	resetButton.style.visibility='hidden'
	play_board = ["", "", "", "4", "0", "4", "", "", ""];
	finished = false;
	draw();
};

//initialise
draw();