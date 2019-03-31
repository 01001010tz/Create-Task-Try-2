var ycArray = [];
var nycArray = [];
var cardSpecs = [];
var wins = 0;
var losses = 0;
var yCardCounter = 0;
var nyCardCounter = 0;
var wlRatio = 0;
var yCards;
var nyCards;
var cardValue;
var suit;
var playCheck = false;
var isWarCheck = false;

function startGame(){
  for (var y = 0; y < 26; y++) {
    let newCard = Math.floor(Math.random() * 52) + 1;
      if (ycArray.includes(newCard) == false) {
        ycArray.push(newCard);
      } else if (ycArray.includes(newCard) == true) {
        y--;
      }
  }
  for (var x = 0; x < 26; x++) {
    let newCard = Math.floor(Math.random() * 52) + 1;
      if (nycArray.includes(newCard) == false) {
        nycArray.push(newCard);
      } else if (nycArray.includes(newCard) == true) {
        x--;
      }
  }

  wins = document.getElementById("wins").innerHTML = wins;
  losses = document.getElementById("losses").innerHTML = losses;
  wlRatio = document.getElementById("wlRatio").innerHTML = wlRatio;
  yCards = document.getElementById("yourCards").innerHTML = ycArray.length;
  nyCards = document.getElementById("opponentCards").innerHTML= nycArray.length;
}

function yCardFlip(y, nyv){
  findCard(y);

  if (cardSpecs[0] == "spades") {
    let value = cardSpecs[1];
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv3").innerHTML = "<img src='images/Spades.png'>" + value;
  } else if (cardSpecs[0] == "clubs") {
    let value = cardSpecs[1];
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv3").innerHTML = "<img src='images/Clubs.png'>" + value;
  } else if (cardSpecs[0] == "hearts") {
    let value = cardSpecs[1];
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv3").innerHTML = "<img src='images/Hearts.png'>" + value;
  } else if (cardSpecs[0] == "diamonds") {
    let value = cardSpecs[1];
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv3").innerHTML = "<img src='images/Diamonds.png'>" + value;
  }

  let yCardValue = cardSpecs[1];
  let difference = yCardValue - nyv;
  if (difference < 0) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    wlRatio = (wins*100/(wins+losses)).toFixed(5);
    document.getElementById("wlRatio").innerHTML = wlRatio;
    text = document.getElementById("gameDiv2").innerHTML = "Loss!";
    let length = ycArray.length;
    let place = yCardCounter%length;
      if (isWarCheck == false) {
        let card = ycArray[place];
        ycArray.splice(place, 1);
        nycArray.push(card);
        nyCardCounter++;
      } else if (isWarCheck == true) {
        place -= 4;
          for (let i = 0; i <= 4; i++) {
            place += i;
            let card = ycArray[place];
            ycArray.splice(place, 1);
            nycArray.push(card);
          }
        nyCardCounter += 5;
      }
    yCards = document.getElementById("yourCards").innerHTML = ycArray.length;
    nyCards = document.getElementById("opponentCards").innerHTML= nycArray.length;
    isWarCheck = false;
    alert(ycArray);
    alert(nycArray);
  } else if (difference > 0){
    wins++;
    document.getElementById("wins").innerHTML = wins;
    wlRatio = (wins*100/(wins+losses)).toFixed(5);
    document.getElementById("wlRatio").innerHTML = wlRatio;
    text = document.getElementById("gameDiv2").innerHTML = "Win!";
    let length = nycArray.length;
    let place = nyCardCounter%length;
      if (isWarCheck == false) {
        let card = nycArray[place];
        nycArray.splice(place, 1);
        ycArray.push(card);
        yCardCounter++;
      } else if (isWarCheck == true) {
        place -= 4;
          for (let i = 0; i <= 4; i++) {
            place += i;
            let card = nycArray[place];
            nycArray.splice(place, 1);
            ycArray.push(card);
          }
        yCardCounter += 5;
      }
    yCards = document.getElementById("yourCards").innerHTML = ycArray.length;
    nyCards = document.getElementById("opponentCards").innerHTML= nycArray.length;
    isWarCheck = false;
    alert(ycArray);
    alert(nycArray);
  } else if (difference == 0){
    text = document.getElementById("gameDiv2").innerHTML = "War!";
    isWarCheck = true;
  }
  cardSpecs = [];
}

function nyCardFlip(ny, y){
  findCard(ny);
  var nyCardValue = cardSpecs[1];
  let value = nyCardValue;
  if (cardSpecs[0] == "spades") {
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv1").innerHTML = "<img src='images/Spades.png'>" + value;
  } else if (cardSpecs[0] == "clubs") {
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv1").innerHTML = "<img src='images/Clubs.png'>" + value;
  } else if (cardSpecs[0] == "hearts") {
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv1").innerHTML = "<img src='images/Hearts.png'>" + value;
  } else if (cardSpecs[0] == "diamonds") {
    if (value < 11) {
      value = value;
    } else if (value == 11) {
      value = "J"
    } else if (value == 12) {
      value = "Q";
    } else if (value == 13) {
      value = "K";
    } else if (value == 14) {
      value = "A";
    }
    let card = document.getElementById("gameDiv1").innerHTML = "<img src='images/Diamonds.png'>" + value;
  }

  var nyCardValue = cardSpecs[1];
  cardSpecs = [];
  yCardFlip(y, nyCardValue);
}

function flip(){
  playCheck = true;
  yCardCounter++;
  nyCardCounter++;
  let yL = ycArray.length;
  let nyL = nycArray.length;
  let yPlace = yCardCounter % yL;
  let nyPlace = nyCardCounter % nyL;
    if (isWarCheck == true) {
      yPlace += 4;
      nyPlace += 4;
    }
  let yCard = ycArray[yPlace];
  let nyCard = nycArray[nyPlace];
  cardSpecs = [];
  nyCardFlip(nyCard, yCard);
}

function findCard(cardId){
  if (cardId%4 == 0) {
    switch(cardId){
      case 4:
        suit="spades";
        cardValue="2";
        break;
      case 8:
        suit="spades";
        cardValue="3";
        break;
      case 12:
        suit="spades";
        cardValue="4";
        break;
      case 16:
        suit="spades";
        cardValue="5";
        break;
      case 20:
        suit="spades";
        cardValue="6";
        break;
      case 24:
        suit="spades";
        cardValue="7";
        break;
      case 28:
        suit="spades";
        cardValue="8";
        break;
      case 32:
        suit="spades";
        cardValue="9";
        break;
      case 36:
        suit="spades";
        cardValue="10";
        break;
      case 40:
        suit="spades";
        cardValue="11";
        break;
      case 44:
        suit="spades";
        cardValue="12";
        break;
      case 48:
        suit="spades";
        cardValue="13";
        break;
      case 52:
        suit="spades";
        cardValue="14";
        break;
    }
  } else if (cardId%4 == 1) {
    switch(cardId){
      case 1:
        suit="clubs";
        cardValue="2";
        break;
      case 5:
        suit="clubs";
        cardValue="3";
        break;
      case 9:
        suit="clubs";
        cardValue="4";
        break;
      case 13:
        suit="clubs";
        cardValue="5";
        break;
      case 17:
        suit="clubs";
        cardValue="6";
        break;
      case 21:
        suit="clubs";
        cardValue="7";
        break;
      case 25:
        suit="clubs";
        cardValue="8";
        break;
      case 29:
        suit="clubs";
        cardValue="9";
        break;
      case 33:
        suit="clubs";
        cardValue="10";
        break;
      case 37:
        suit="clubs";
        cardValue="11";
        break;
      case 41:
        suit="clubs";
        cardValue="12";
        break;
      case 45:
        suit="clubs";
        cardValue="13";
        break;
      case 49:
        suit="clubs";
        cardValue="14";
        break;
    }
  } else if (cardId%4 == 2) {
    switch(cardId){
      case 2:
        suit="hearts";
        cardValue="2";
        break;
      case 6:
        suit="hearts";
        cardValue="3";
        break;
      case 10:
        suit="hearts";
        cardValue="4";
        break;
      case 14:
        suit="hearts";
        cardValue="5";
        break;
      case 18:
        suit="hearts";
        cardValue="6";
        break;
      case 22:
        suit="hearts";
        cardValue="7";
        break;
      case 26:
        suit="hearts";
        cardValue="8";
        break;
      case 30:
        suit="hearts";
        cardValue="9";
        break;
      case 34:
        suit="hearts";
        cardValue="10";
        break;
      case 38:
        suit="hearts";
        cardValue="11";
        break;
      case 42:
        suit="hearts";
        cardValue="12";
        break;
      case 46:
        suit="hearts";
        cardValue="13";
        break;
      case 50:
        suit="hearts";
        cardValue="14";
        break;
    }
  } else if (cardId%4 == 3) {
    switch(cardId){
      case 3:
        suit="diamonds";
        cardValue="2";
        break;
      case 7:
        suit="diamonds";
        cardValue="3";
        break;
      case 11:
        suit="diamonds";
        cardValue="4";
        break;
      case 15:
        suit="diamonds";
        cardValue="5";
        break;
      case 19:
        suit="diamonds";
        cardValue="6";
        break;
      case 23:
        suit="diamonds";
        cardValue="7";
        break;
      case 27:
        suit="diamonds";
        cardValue="8";
        break;
      case 31:
        suit="diamonds";
        cardValue="9";
        break;
      case 35:
        suit="diamonds";
        cardValue="10";
        break;
      case 39:
        suit="diamonds";
        cardValue="11";
        break;
      case 43:
        suit="diamonds";
        cardValue="12";
        break;
      case 47:
        suit="diamonds";
        cardValue="13";
        break;
      case 51:
        suit="diamonds";
        cardValue="14";
        break;
    }
  }
  cardSpecs.push(suit);
  cardSpecs.push(cardValue);
}

while (playCheck == true) {
  if (ycArray.length == 0) {
    alert("You are out of cards! Defeat!");
  } else if (nycArray.length == 0) {
    alert("Your opponent is out of cards! Victory!");
  }
}
