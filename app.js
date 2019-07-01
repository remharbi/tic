// My JS File

var p1Score = 0;
var p2Score = 0;
var tie = 0;
var possiblePlays = 80;
console.log(p1Score);
console.log(p2Score);
console.log(tie);
console.log("Game Started!");


let playerTurn = [1, 2].sort((a, b) => {
    return Math.random() - 0.5;
})

console.log(playerTurn);


const turnIndicator = function(){
	if (playerTurn[0] == 1) {
		document.getElementById("p1Turn").style.display = 'block';
		document.getElementById("p2Turn").style.display = 'none';
	} else if (playerTurn[0] == 2){
		document.getElementById("p2Turn").style.marginLeft = '1490px';
   		document.getElementById("p2Turn").style.display = 'block';
		document.getElementById("p1Turn").style.display = 'none';
	}

}

$(".replay").click(function(){
	$(this).addClass("animated bounceIn");
})


$(".soundOn").click(function(){
	var audio = $("#themeSong")[0];
      audio.play();
      $(this).addClass("animated bounceIn");
      $(".col").click(function(){
      	var audio1 = $("#coinSound")[0];
      audio1.play();
      })
})

$(".soundOff").click(function(){
	var audio = $("#themeSong")[0];
	audio.pause();
	$(this).addClass("animated bounceIn");
      $(".col").click(function(){
      	var audio1 = $("#coinSound")[0];
      audio1.pause();
  })
})


const c1 = document.getElementById("cell-1");
const c2 = document.getElementById("cell-2");
const c3 = document.getElementById("cell-3");
const c4 = document.getElementById("cell-4");
const c5 = document.getElementById("cell-5");
const c6 = document.getElementById("cell-6");
const c7 = document.getElementById("cell-7");
const c8 = document.getElementById("cell-8");
const c9 = document.getElementById("cell-9");

const checkWin = function(){
		 for (var i=0; i < 10; i++){
		 if ( (c1.classList.contains("p1") && c2.classList.contains("p1") && c3.classList.contains("p1")) 
 	|| (c4.classList.contains("p1") && c5.classList.contains("p1") && c6.classList.contains("p1"))
 	|| (c7.classList.contains("p1") && c8.classList.contains("p1") && c9.classList.contains("p1"))
 	|| (c1.classList.contains("p1") && c4.classList.contains("p1") && c7.classList.contains("p1"))
 	|| (c2.classList.contains("p1") && c5.classList.contains("p1") && c8.classList.contains("p1"))
 	|| (c3.classList.contains("p1") && c6.classList.contains("p1") && c9.classList.contains("p1"))
 	|| (c1.classList.contains("p1") && c5.classList.contains("p1") && c9.classList.contains("p1"))
 	|| (c3.classList.contains("p1") && c5.classList.contains("p1") && c7.classList.contains("p1"))    ) {
			alert("Player 1 wins!");
			p1Score++;

		} else if ((c1.classList.contains("p2") && c2.classList.contains("p2") && c3.classList.contains("p2")) 
 	|| (c4.classList.contains("p2") && c5.classList.contains("p2") && c6.classList.contains("p2"))
 	|| (c7.classList.contains("p2") && c8.classList.contains("p2") && c9.classList.contains("p2"))
 	|| (c1.classList.contains("p2") && c4.classList.contains("p2") && c7.classList.contains("p2"))
 	|| (c2.classList.contains("p2") && c5.classList.contains("p2") && c8.classList.contains("p2"))
 	|| (c3.classList.contains("p2") && c6.classList.contains("p2") && c9.classList.contains("p2"))
 	|| (c1.classList.contains("p2") && c5.classList.contains("p2") && c9.classList.contains("p2"))
 	|| (c3.classList.contains("p2") && c5.classList.contains("p2") && c7.classList.contains("p2"))    ) {
			alert("Player 2 wins!");
			p2Score++
		} break; 
}
}

$(".col").click(function(){	

  if (playerTurn[0] == 1){
  	$(this).off("click").css({"background-image": "url(./images/mario.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"});
  	$(this).addClass("p1");
  	checkWin();
  	playerTurn[0] += 1;
  	turnIndicator();
  } 
  else if (playerTurn[0] == 2){
  	$(this).off("click").css({"background-image": "url(./images/bowser.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"});
    $(this).addClass("p2");
  	checkWin();
  	playerTurn[0] -= 1;
  	turnIndicator();
  }

	})



// 			console.log(`Player ${playerTurn} won! col 7-9`)
// 		} else if (c1 === c4 && c4 === c7){
// 			console.log(`Player ${playerTurn} won! row 1-4-7`)
// 		} else if (c2 === c5 && c5 === c8){
// 			console.log(`Player ${playerTurn} won! row 2-5-8`)
// 		} else if (c3 === c6 && c6 === c9){
// 			console.log(`Player ${playerTurn} won! row 3-6-9`)
// 		} else if (c1 === c5 && c5 === c9){
// 			console.log(`Player ${playerTurn} won! diagonal 1-5-9`)
// 		} else if (c3 === c5 && c5 === c7){
// 			console.log(`Player ${playerTurn} won! diagonal 3-5-7`)
// 		}
// 	}
// }



// function _containsText(element, str) {
//   var content = [];
//   for (var i = 0; i < element.length; i += 1) {
//     if (element[i].innerHTML.indexOf(str) > -1) {
//       content.push(element[i].innerHTML);
//     }
//   }
//   return content;
// }


// function gameLogic(playerTurn) {
//   var hasThreeInARow = false,
//       groups = [document.querySelectorAll(".r1"), document.querySelectorAll(".r2"), document.querySelectorAll(".r3"),
//                 document.querySelectorAll(".c1"), document.querySelectorAll(".c2"), document.querySelectorAll(".c3"),
//                 document.querySelectorAll(".d1"), document.querySelectorAll(".d2")];
//   for (var i = 0; i < groups.length; i++) {
//     if (_containsText(groups[i], playerTurn).length === 3) {
//       hasThreeInARow = true;
//       break;
//     } else {
//       possiblePlays -= 1;
//     }
//   }
//   if (hasThreeInARow) {
//     console.log(`${playerTurn} won!`);

//   } else if (!hasThreeInARow && possiblePlays === 0) {
//     console.log("it's a Tie!");
//   }
// }




	// var Coin = $(this).attr('id'); //fileName as id button
   //  var audiot = new Audio("file/" +Coin+".mp3");
   //  audiot.play();
  