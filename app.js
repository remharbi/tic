// My JS File

// const game = {
//     turn: 0,
//     email: 'sulaiman@ga.com',
//     address: 'Some Where over the...',
//     runs: [{
//     		date: '2032-03-22 04:00',
//             distance: 1200,
//             timeTaken: 600},
//             {
//             date: '2042-06-01 18:00',
//             distance: 1400,
//             timeTaken: 800 
//         }]
// }

let playerTurn = [1, 2].sort((a, b) => {
    return Math.random() - 0.5;
})

console.log(playerTurn);


// Checks If Grid Is Already Clicked
// function clickCell(x,y) {
//   if (grid[x][y]>0) {
//     alert("Dont Try To Cheat Bud!!!!!");
//   } 


// // Clicking Of Boxes
//   else {
//     if (currentPlayer==1) {
//       document.getElementById("cell_"+x+"_"+y).style.color="#3F88C5";
//       document.getElementById("cell_"+x+"_"+y).innerHTML="X";
//       grid[x][y]=1;
//       currentPlayer=2;
//     } else {
//        document.getElementById("cell_"+x+"_"+y).style.color="#E2C290";
//        document.getElementById("cell_"+x+"_"+y).innerHTML="O";
//       grid[x][y]=2;
//       currentPlayer=1;
//     }
//   }
// }

//document.getElementById("p1Turn").style.display = 'none';
//document.getElementById("p2Turn").style.display = 'none';


const turnIndicator = function(){
	if (playerTurn[0] == 1) {
		document.getElementById("p1Turn").style.display = 'block';
		document.getElementById("p2Turn").style.display = 'none';
	} else if (playerTurn[0] == 2){
		document.getElementById("p2Turn").style.display = 'block';
		document.getElementById("p1Turn").style.display = 'none';
	}

}


$(".col").click(function(){
  if (playerTurn[0] == 1){
  	$(this).off("click").css({"background-image": "url(./images/mario.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"});
  	playerTurn[0] += 1;
  	turnIndicator();
  } else if (playerTurn[0] == 2){
  	$(this).off("click").css({"background-image": "url(./images/bowser.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"});
  	playerTurn[0] -= 1;
  	turnIndicator();
  }
});

