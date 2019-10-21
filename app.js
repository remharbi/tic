// My JS File

//-----------Initialize Scores-----------//
let playerOneScore = 0;
let playerTwoScore = 0;
let tie = 0;
let turns = 0;

console.log("Game Started!");

document.getElementById("p1Score").innerText = playerOneScore;
document.getElementById("p2Score").innerText = playerTwoScore;
document.getElementById("p2Turnn").style.display = 'none';

//----------- Start of game welcome Modal popoup
//swal("Welcome!",{closeOnClickOutside: false, button: {text: "Start"}});

//-----------Function to update player scores-----------//

const updateScores = function(){
  document.getElementById("p1Score").innerText = playerOneScore;
  document.getElementById("p2Score").innerText = playerTwoScore;    
  }
    

//-----------Randomize Player Turn-----------//
let playerTurn = [1, 2].sort((a, b) => {
    return Math.random() - 0.5;
})

//-----------Run on page load-----------//
    window.onload = function() {
      if(localStorage.getItem("p1Score") !== null && localStorage.getItem("p2Score") !== null) { 
        //if scores were not empty load the previous score from localStorage
        playerOneScore = parseInt(localStorage.getItem("p1Score"));
        playerTwoScore = parseInt(localStorage.getItem("p2Score"));
        document.getElementById("p1Score").innerText = playerOneScore;
        document.getElementById("p2Score").innerText = playerTwoScore;    
        }    
    }

//-----------Switch player turn indicator-----------//
const turnIndicator = function(){
	if (playerTurn[0] == 1) {
		document.getElementById("p1Turn").style.display = 'block';
		document.getElementById("p2Turn").style.display = 'none';
    document.getElementById("p2Turnn").style.display = 'none';
	} else if (playerTurn[0] == 2){
   	document.getElementById("p2Turnn").style.display = 'block';
     document.getElementById("p1Turn").style.display = 'none';
     document.getElementById("p2Turn").style.display = 'none';
    }
  }
  
//-----------Refresh function to reload page-----------//
  const refresh = function(){ 
    // window.location.reload(); // Hard reload
    history.go(0); // Soft reload
  }
  
//-----------Replay button to reload game from start-----------//
$(".replay").click(function(){
  // When button is clicked make both player scores = 0 in localStorage and call the refresh function
	$(this).addClass("animated bounceIn");
    localStorage.setItem("p1Score", 0);
    localStorage.setItem("p2Score", 0);
    refresh(); 
})

//-----------Sound button to play theme song and click sound effect-----------//
$(".soundOn").click(function(){
	var audio = $("#themeSong")[0];
      audio.volume = 0.5;
      audio.play();
      $(this).addClass("animated bounceIn");
      $(".soundOff").removeClass("animated bounceIn");
      $(".col").click(function(){
      	var audio1 = $("#coinSound")[0];
      if (document.querySelector("#coinSound").currentTime < document.querySelector("#coinSound").duration) 
        { audio1.load();
          audio1.play(); 
      }
      else {audio1.play();}
      })
})

//-----------Mute button to mute theme song and click sound effect-----------//
$(".soundOff").click(function(){
	var audio = $("#themeSong")[0];
	audio.pause();
	$(this).addClass("animated bounceIn");
      $(".soundOn").removeClass("animated bounceIn");
      $(".col").click(function(){
      	var audio1 = $("#coinSound")[0];
      audio1.pause(); })
})



let boxes = document.querySelectorAll('.col');

//-----------Function to check for winner-----------//
function testWin(a,b,c){
  var win = false; // define win variable to check if someone won or not (default is false)
 	if (a.classList.contains("p1") && b.classList.contains("p1") && c.classList.contains("p1")){ // if three continuous cells contain the class p1 then player 1 won     
      swal("Player 1 won !!!", { button: "Retry", className: "p1Win", closeOnClickOutside: false}).then(refresh); // show modal popup and then on click fire refresh function
      playerOneScore+=1; 
      localStorage.setItem("p1Score", playerOneScore); //store new player score in localStorage
      win = true;
      updateScores(); // call updateScores function to update scores
  } else if (a.classList.contains("p2") && b.classList.contains("p2") && c.classList.contains("p2")){
      console.log("Player 2 wins!");
      swal("Player 2 won !!!", { button: "Retry", closeOnClickOutside: false, }).then(refresh);
      playerTwoScore+=1;
      console.log("p2Score", playerTwoScore)
      localStorage.setItem("p2Score", playerTwoScore);
      win = true;
      updateScores();
} else if (turns == 9 && !win){ //if all boxes are filled and there is no winner then it's a tie
			console.log("it's a tie!");
      swal("It's a Tie.", { button: "Retry", closeOnClickOutside: false, }).then(refresh);
    }
}

//-----------Start Game-----------//

const startGame = function(){
$(".col").click(function(){	
if (playerTurn[0] == 1){
  	$(this).off("click").css({"background-image": "url(./images/mario.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"}); //Add current player image and turn off click
  	$(this).addClass("p1"); // add p1 class to cell
  	playerTurn[0] += 1;
  	turnIndicator(); // switch turn indicator to the next player
  } 
  else if (playerTurn[0] == 2){
  	$(this).off("click").css({"background-image": "url(./images/bowser.png)", "background-size": "80%", "background-repeat": "no-repeat", "background-position": "center"});
    $(this).addClass("p2");
  	playerTurn[0] -= 1;
  	turnIndicator();
  }
turns++ 

//-----------testWin function call with conditions-----------//
for(var j= 0; j<7 ; j+=3){
testWin(boxes[j], boxes[j+1], boxes[j+2]);
}

for(var i= 0; i<3 ; i++){
testWin(boxes[i], boxes[i+3], boxes[i+6]);
}

testWin(boxes[0],boxes[4],boxes[8]);
testWin(boxes[2],boxes[4],boxes[6]);

})

}

startGame();


