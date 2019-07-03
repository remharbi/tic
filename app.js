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

 // Run on page load
  //   window.onload = function() {

  //       // If sessionStorage is storing default values, exit the function and do not restore data
  //       if (sessionStorage.getItem('playerOneScore') == 0 && sessionStorage.getItem('playerTwoScore') == 0 && sessionStorage.getItem('tie') == 0 ) {
  //           return;
  //       } else {
  //       // If values are not blank, restore them to the fields
  //       var playerOneScore = sessionStorage.getItem('playerOneScore');
  //       if (playerOneScore !== null) $('#p1Score').val(p1Score);
  //       console.log(playerOneScore);

  //       // var email = sessionStorage.getItem('email');
  //       // if (email !== null) $('#inputEmail').val(email);

  //       // var subject= sessionStorage.getItem('subject');
  //       // if (subject!== null) $('#inputSubject').val(subject);

  //       // var message= sessionStorage.getItem('message');
  //       // if (message!== null) $('#inputMessage').val(message);
  //   }
  // }

  //   // Before refreshing the page, save the form data to sessionStorage
  //   window.onbeforeunload = function() {
  //       sessionStorage.setItem("p1Score", $('#p1Score').val());
  //       // sessionStorage.setItem("email", $('#inputEmail').val());
  //       // sessionStorage.setItem("subject", $('#inputSubject').val());
  //       // sessionStorage.setItem("message", $('#inputMessage').val());
  //   }


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
    turns = 0;
    $(".col").on('click', startGame);
    $(".col").css({"background-image": "none"});
    $(".col").removeClass("p1");
    $(".col").removeClass("p1");
  console.log(playerOneScore);
  console.log(playerTwoScore);
  // window.location.reload();
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
      $(".col").click(function(){
      	var audio1 = $("#coinSound")[0];
      audio1.pause();
  })
})


let boxes = document.querySelectorAll('.col');

function testWin(a,b,c){
  var win = false;
 	if (a.classList.contains("p1") && b.classList.contains("p1") && c.classList.contains("p1")){
      // localStorage.setItem(p1Score, playerOneScore);
      swal("Player 1 won !!!", { button: "retry", className: "p1Win", closeOnClickOutside: false}).then(refresh);
      playerOneScore+=1;
      console.log(playerOneScore);
      updateScores();
      win = true;
  } else if (a.classList.contains("p2") && b.classList.contains("p2") && c.classList.contains("p2")){
      console.log("Player 2 wins!");
      // localStorage.setItem(p2Score, playerTwoScore);
      swal("Player 2 won !!!", { button: "retry", closeOnClickOutside: false, }).then(refresh);
      playerTwoScore+=1;
      updateScores();
      win = true;
} else if (turns == 9 && !win){
			console.log("it's a tie!");
			//localStorage.setItem(tie, tie);
      swal("It's a Tie.", { button: "retry", closeOnClickOutside: false, }).then(refresh);
      tie+=1; 
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


	// var Coin = $(this).attr('id'); //fileName as id button
   //  var audiot = new Audio("file/" +Coin+".mp3");
   //  audiot.play();
  

  //DOMContentLoaded