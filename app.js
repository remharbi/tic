// My JS File

// Initializing scores
let playerOneScore = 0;
let playerTwoScore = 0;
let tie = 0;
let turns = 0;
console.log("Game Started!");
document.getElementById("p1Score").innerText = playerOneScore;
document.getElementById("p2Score").innerText = playerTwoScore;

//----------------------------- Start of game welcome Modal popoup
//swal("Welcome!",{closeOnClickOutside: false, button: {text: "Start"}});

//-----------Randomize Player Turn
let playerTurn = [1, 2].sort((a, b) => {
    return Math.random() - 0.5;
})

 //Run on page load
    window.onload = function() {
      if(localStorage.getItem("p1Score") !== null && localStorage.getItem("p2Score") !== null) {
        playerOneScore = parseInt(localStorage.getItem("p1Score"));
        playerTwoScore = parseInt(localStorage.getItem("p2Score"));
        document.getElementById("p1Score").innerText = playerOneScore;
        document.getElementById("p2Score").innerText = playerTwoScore;    
        }    
      console.log(playerOneScore);
    }

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
      localStorage.setItem("p1Score", 0);
      localStorage.setItem("p2Score", 0);


  refresh(); 
})



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

$(".soundOff").click(function(){
	var audio = $("#themeSong")[0];
	audio.pause();
	$(this).addClass("animated bounceIn");
      $(".soundOn").removeClass("animated bounceIn");
      $(".col").click(function(){
      	var audio1 = $("#coinSound")[0];
      audio1.pause();
  })
})


const refresh = function(){ window.location.reload(); }

let boxes = document.querySelectorAll('.col');

function testWin(a,b,c){
  var win = false;
 	if (a.classList.contains("p1") && b.classList.contains("p1") && c.classList.contains("p1")){
    
      swal("Player 1 won !!!", { button: "retry", className: "p1Win", closeOnClickOutside: false}).then(refresh);
      playerOneScore+=1;
      console.log("p1Score", playerOneScore)
      localStorage.setItem("p1Score", playerOneScore);
      console.log(playerOneScore);
      win = true;
      updateScores();
  } else if (a.classList.contains("p2") && b.classList.contains("p2") && c.classList.contains("p2")){
      console.log("Player 2 wins!");
      swal("Player 2 won !!!", { button: "retry", closeOnClickOutside: false, }).then(refresh);
      playerTwoScore+=1;
      console.log("p2Score", playerTwoScore)
      localStorage.setItem("p2Score", playerTwoScore);
      win = true;
      updateScores();
} else if (turns == 9 && !win){
			console.log("it's a tie!");
      swal("It's a Tie.", { button: "retry", closeOnClickOutside: false, }).then(refresh);
    }
}

const updateScores = function(){
document.getElementById("p1Score").innerText = playerOneScore;
document.getElementById("p2Score").innerText = playerTwoScore;    
}

const startGame = function(){
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

}

startGame();


