// My JS File

var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turns = 8;
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

// const checkWin = function(){
// 		 if ( (c1.classList.contains("p1") && c2.classList.contains("p1") && c3.classList.contains("p1")) 
//  	|| (c4.classList.contains("p1") && c5.classList.contains("p1") && c6.classList.contains("p1"))
//  	|| (c7.classList.contains("p1") && c8.classList.contains("p1") && c9.classList.contains("p1"))
//  	|| (c1.classList.contains("p1") && c4.classList.contains("p1") && c7.classList.contains("p1"))
//  	|| (c2.classList.contains("p1") && c5.classList.contains("p1") && c8.classList.contains("p1"))
//  	|| (c3.classList.contains("p1") && c6.classList.contains("p1") && c9.classList.contains("p1"))
//  	|| (c1.classList.contains("p1") && c5.classList.contains("p1") && c9.classList.contains("p1"))
//  	|| (c3.classList.contains("p1") && c5.classList.contains("p1") && c7.classList.contains("p1"))    ) {
// 			alert("Player 1 wins!");
// 			p1Score++;

// 		} else if ((c1.classList.contains("p2") && c2.classList.contains("p2") && c3.classList.contains("p2")) 
//  	|| (c4.classList.contains("p2") && c5.classList.contains("p2") && c6.classList.contains("p2"))
//  	|| (c7.classList.contains("p2") && c8.classList.contains("p2") && c9.classList.contains("p2"))
//  	|| (c1.classList.contains("p2") && c4.classList.contains("p2") && c7.classList.contains("p2"))
//  	|| (c2.classList.contains("p2") && c5.classList.contains("p2") && c8.classList.contains("p2"))
//  	|| (c3.classList.contains("p2") && c6.classList.contains("p2") && c9.classList.contains("p2"))
//  	|| (c1.classList.contains("p2") && c5.classList.contains("p2") && c9.classList.contains("p2"))
//  	|| (c3.classList.contains("p2") && c5.classList.contains("p2") && c7.classList.contains("p2"))    ) {
// 			alert("Player 2 wins!");
// 			p2Score++;
// 		} else if (turns == 0){
// 		alert("it's a tie!");
// 		tie++; }
// }


let boxes = document.querySelectorAll('.col');

function testWin(a,b,c){
 	if (a.classList.contains("p1") && b.classList.contains("p1") && c.classList.contains("p1")){
console.log(" P1 win!");
p1Score++;
 	} else if (a.classList.contains("p2") && b.classList.contains("p2") && c.classList.contains("p2")){
console.log("P2 win!");
p2Score++;
} else if (turns == 0){
		console.log("it's a tie!");
		tie++; }
}



$(".col").click(function(){	
if (playerTurn[0] == 1){
  	$(this).off("click").css({"background-image": "url(./images/mario.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"});
  	$(this).addClass("p1");
  	playerTurn[0] += 1;
  	turnIndicator();
  } 
  else if (playerTurn[0] == 2){
  	$(this).off("click").css({"background-image": "url(./images/bowser.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"});
    $(this).addClass("p2");
  	playerTurn[0] -= 1;
  	turnIndicator();
  }
turns--;
console.log(turns);	

for(var j= 0; j<7 ; i+=3){
testWin(boxes[j], boxes[j+1], boxes[j+2]);
}

for(var i= 0; j<3 ; i++){
testWin(boxes[i], boxes[i+3], boxes[i+6]);
}

testWin(c1,c5,c9);
testWin(c3,c5,c7);

})




	// var Coin = $(this).attr('id'); //fileName as id button
   //  var audiot = new Audio("file/" +Coin+".mp3");
   //  audiot.play();
  