// Left Dice
var randomnum = Math.floor((Math.random())*6) + 1;
var diceselect1 = "images/dice" + randomnum + ".png";
document.querySelector(".img1").setAttribute("src",diceselect1);

// Right Dice
var randomnum2 = Math.floor((Math.random())*6) + 1;
var diceselect2 = "images/dice" + randomnum2 + ".png";
document.querySelector(".img2").setAttribute("src",diceselect2);

if (randomnum>randomnum2){
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
}

else if (randomnum2 > randomnum){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
}

else{
  document.querySelector("h1").innerHTML = "Draw! ⚖️";
}
