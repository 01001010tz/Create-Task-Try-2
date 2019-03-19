function start(){
  var wins;
  var losses;
  var wlRatio;
  var yCards;
  var nyCards;
  var suit;
  var cardValue;
  var ycArray[];
  var nycArray[];
}

function startGame(){
  wins = document.getElementById("wins").innerHTML = 0;
  losses = document.getElementById("losses").innerHTML = 0;
  wlRatio = document.getElementById("wlRatio").innerHTML = 0.0;
  yCards = document.getElementById("yourCards").innerHTML = 26;
  nyCards = document.getElementById("opponentCards").innerHTML= 26;

  while (ycArray.length < 26) {
    let newCard = Math.floor(Math.random() * 52) + 1;
      if (ycArray.includes(newCard) == false) {
        ycArray.push(newCard);
      }
  }
  while (nycArray.length < 26) {
    let newCard = Math.floor(Math.random() * 52) + 1;
      if (nycArray.includes(newCard) == false) {
        nycArray.push(newCard);
      }
  }
  console.log(ycArray);
  console.log(nycArray);
}

function flip(){

}

function findCard(cardId){
  if (cardId%4 == 0) {
    switch(cardId){
      case 4:
      case 8:
      case 12:
      case 16:
      case 20:
      case 24:
      case 28:
      case 32:
      case 36:
      case 40:
      case 44:
      case 48:
      case 52:
    }
  } else if (cardId%4 == 1) {
    switch(cardId){
      case 1:
      case 5:
      case 9:
      case 13:
      case 17:
      case 21:
      case 25:
      case 29:
      case 33:
      case 37:
      case 41:
      case 45:
      case 49:
    }
  } else if (cardId%4 == 2) {
    switch(cardId){
      case 2:
      case 6:
      case 10:
      case 14:
      case 18:
      case 22:
      case 26:
      case 30:
      case 34:
      case 38:
      case 42:
      case 46:
      case 50:
    }
  } else if (cardId%4 == 3) {
    switch(cardId){
      case 3:
      case 7:
      case 11:
      case 15:
      case 19:
      case 23:
      case 27:
      case 31:
      case 35:
      case 39:
      case 43:
      case 47:
      case 51:
    }
  }
  return suit;
  return cardValue;
}
