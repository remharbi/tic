// My JS File



var playerOneScore = 0;
var playerTwoScore = 0;
var tie = 0;
var turns = 0;
console.log(p1Score);
console.log(p2Score);
console.log(tie);
console.log("Game Started!");

document.getElementById("p1Score").innerHTML = playerOneScore;
document.getElementById("p2Score").innerText = playerTwoScore;



swal("Welcome!",
{
  closeOnClickOutside: false,
  button: {
    text: "Start",
  },
});
// $(".noClicks").click(function()){
// $(this).off("click");
// }

// Instantiate new modal
// var modal = new Custombox.modal({
//   content: {
//     effect: 'fadein',
//     target: '#modal'
//   }
// });

// // Open
// modal.open();


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

// const turnClickOff = function(){
// $(".noClicks").click(function()){ $(this).off("click"); }
//  }

let boxes = document.querySelectorAll('.col');


// const p1Div = document.querySelector('.p1Score');
//         p1Div.innerText = p1Score;
// const p2Div = document.querySelector('.p2Score');
//         p2Div.innerText = p2Score;


function testWin(a,b,c){
 	if (a.classList.contains("p1") && b.classList.contains("p1") && c.classList.contains("p1")){
      p1Score+=1;
      console.log(p1Score);
      swal("Player 1 won !!!", { closeOnClickOutside: false, });

 	} else if (a.classList.contains("p2") && b.classList.contains("p2") && c.classList.contains("p2")){
      console.log("Player 2 wins!");
      p2Score+=1;
      // console.log(p1Score);
      swal(`Player 2 won !!! Score: ${p2Score}`, { closeOnClickOutside: false, });

      
} else if (turns == 9){
			console.log("it's a tie!");
			tie+=1; 
      swal("It's a Tie.", { closeOnClickOutside: false, });}
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
  