// My JS File

var playerOneScore = 0;
var playerTwoScore = 0;
var tie = 0;
window.sessionStorage.setItem("tie", tie);
var turns = 0;
console.log("Game Started!");
document.getElementById("p1Score").innerText = playerOneScore;
document.getElementById("p2Score").innerText = playerTwoScore;


swal("Welcome!",{closeOnClickOutside: false, button: {text: "Start"}});

let playerTurn = [1, 2].sort((a, b) => {
    return Math.random() - 0.5;
})

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

const refresh = function() {
 
  
  
  console.log(playerOneScore);
  console.log(playerTwoScore);
  window.location.reload();
  }

$(".replay").click(function(){
	$(this).addClass("animated bounceIn");
  refresh();
})


$(".soundOn").click(function(){
	var audio = $("#themeSong")[0];
      audio.volume = 0.5;
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


let boxes = document.querySelectorAll('.col');

function testWin(a,b,c){
 	if (a.classList.contains("p1") && b.classList.contains("p1") && c.classList.contains("p1")){
      playerOneScore+=1;
      localStorage.setItem(p1Score, playerOneScore);
      document.getElementById("p1Score").innerText = playerOneScore;
      swal("Player 1 won !!!", { button: "retry", className: "p1Win", closeOnClickOutside: false}).then(refresh);
  } else if (a.classList.contains("p2") && b.classList.contains("p2") && c.classList.contains("p2")){
      console.log("Player 2 wins!");
      playerTwoScore+=1;
      localStorage.setItem(p2Score, playerTwoScore);
      document.getElementById("p2Score").innerText = playerTwoScore;
      swal("Player 2 won !!!", { button: "retry", closeOnClickOutside: false, }).then(refresh);
      
} else if (turns == 9){
			console.log("it's a tie!");
			tie+=1; 
      localStorage.setItem(tie, tie);
      swal("It's a Tie.", { button: "retry", closeOnClickOutside: false, }).then(refresh);
    }
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
turns++
console.log(turns);	

for(var j= 0; j<7 ; j+=3){
testWin(boxes[j], boxes[j+1], boxes[j+2]);
}

for(var i= 0; i<3 ; i++){
testWin(boxes[i], boxes[i+3], boxes[i+6]);
}

testWin(boxes[0],boxes[4],boxes[8]);
testWin(boxes[2],boxes[4],boxes[6]);

})




	// var Coin = $(this).attr('id'); //fileName as id button
   //  var audiot = new Audio("file/" +Coin+".mp3");
   //  audiot.play();
  

  //DOMContentLoaded