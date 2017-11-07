/* EXTRA FEATURE
--> MULTIPLE BACKGROUNDS
*/

window.onload= function events(){
  puzzleArray= document.getElementById("puzzlearea").children;
  randomBackground();
  puzzlePieces();
  backgroundPositions();
  squareIds();
  movement();
  lightUp();
  backgroundSetup();
}

var gapRow= 3;
var gapCol= 3;

var tempRow;
var tempCol;

function puzzlePieces(){

  for (var i=0; i<puzzleArray.length; i++){
    puzzleArray[i].classList.add("puzzlepiece");
  }

  //FIRST ROW
  pixels=0;
  for (var i=0; i<4; i++){
    puzzleArray[i].style.left=pixels+"px";
    pixels+=100;
  }

  //SECOND ROW
  pixels=0;
  for (var i=4; i<8; i++){
    puzzleArray[4].style.top="100px";
    puzzleArray[i].style.left=pixels+"px";
    puzzleArray[i].style.top="100px";
    pixels+=100;
  }

  //THIRD ROW
  pixels=0;
  for (var i=8; i<12; i++){
    puzzleArray[8].style.top="200px";
    puzzleArray[i].style.left=pixels+"px";
    puzzleArray[i].style.top="200px";
    pixels+=100;
  }

  //FOURTH ROW
  pixels=0;
  for (var i=12; i<puzzleArray.length; i++){
    puzzleArray[12].style.top="300px";
    puzzleArray[i].style.left=pixels+"px";
    puzzleArray[i].style.top="300px";
    pixels+=100;
  }
}

function backgroundPositions(){

  //FIRST ROW
  puzzleArray[0].style.backgroundPosition= "0px 0px";
  puzzleArray[1].style.backgroundPosition= "-100px 0px";
  puzzleArray[2].style.backgroundPosition= "-200px 0px";
  puzzleArray[3].style.backgroundPosition= "-300px 0px";

  //SECOND ROW
  puzzleArray[4].style.backgroundPosition= "0px -100px";
  puzzleArray[5].style.backgroundPosition= "-100px -100px";
  puzzleArray[6].style.backgroundPosition= "-200px -100px";
  puzzleArray[7].style.backgroundPosition= "-300px -100px";

  //THIRD ROW
  puzzleArray[8].style.backgroundPosition= "0px -200px";
  puzzleArray[9].style.backgroundPosition= "-100px -200px";
  puzzleArray[10].style.backgroundPosition= "-200px -200px";
  puzzleArray[11].style.backgroundPosition= "-300px -200px";

  //FOURTH ROW
  puzzleArray[12].style.backgroundPosition= "0px -300px";
  puzzleArray[13].style.backgroundPosition= "-100px -300px";
  puzzleArray[14].style.backgroundPosition= "-200px -300px";
}

function squareIds(){

  puzzleArray[0].setAttribute("id", "square_1_1");
  puzzleArray[1].setAttribute("id", "square_1_2");
  puzzleArray[2].setAttribute("id", "square_1_3");
  puzzleArray[3].setAttribute("id", "square_1_4");

  puzzleArray[4].setAttribute("id", "square_2_1");
  puzzleArray[5].setAttribute("id", "square_2_2");
  puzzleArray[6].setAttribute("id", "square_2_3");
  puzzleArray[7].setAttribute("id", "square_2_4");

  puzzleArray[8].setAttribute("id", "square_3_1");
  puzzleArray[9].setAttribute("id", "square_3_2");
  puzzleArray[10].setAttribute("id", "square_3_3");
  puzzleArray[11].setAttribute("id", "square_3_4");

  puzzleArray[12].setAttribute("id", "square_4_1");
  puzzleArray[13].setAttribute("id", "square_4_2");
  puzzleArray[14].setAttribute("id", "square_4_3");

  /*var n=0;
  for (let i=1; i<5; i++){
    for (let j=1; j<5; j++){
        puzzleArray[n].setAttribute("row", i);
        puzzleArray[n].setAttribute("col", j);
    }
  }*/

  puzzleArray[0].setAttribute("row", "0");
  puzzleArray[0].setAttribute("col", "0");

  puzzleArray[1].setAttribute("row", "0");
  puzzleArray[1].setAttribute("col", "1");

  puzzleArray[2].setAttribute("row", "0");
  puzzleArray[2].setAttribute("col", "2");

  puzzleArray[3].setAttribute("row", "0");
  puzzleArray[3].setAttribute("col", "3");

  puzzleArray[4].setAttribute("row", "1");
  puzzleArray[4].setAttribute("col", "0");

  puzzleArray[5].setAttribute("row", "1");
  puzzleArray[5].setAttribute("col", "1");

  puzzleArray[6].setAttribute("row", "1");
  puzzleArray[6].setAttribute("col", "2");

  puzzleArray[7].setAttribute("row", "1");
  puzzleArray[7].setAttribute("col", "3");

  puzzleArray[8].setAttribute("row", "2");
  puzzleArray[8].setAttribute("col", "0");

  puzzleArray[9].setAttribute("row", "2");
  puzzleArray[9].setAttribute("col", "1");

  puzzleArray[10].setAttribute("row", "2");
  puzzleArray[10].setAttribute("col", "2");

  puzzleArray[11].setAttribute("row", "2");
  puzzleArray[11].setAttribute("col", "3");

  puzzleArray[12].setAttribute("row", "3");
  puzzleArray[12].setAttribute("col", "0");

  puzzleArray[13].setAttribute("row", "3");
  puzzleArray[13].setAttribute("col", "1");

  puzzleArray[14].setAttribute("row", "3");
  puzzleArray[14].setAttribute("col", "2");

}

function movement(){
  for(let i=0; i<puzzleArray.length; i++){
    puzzleArray[i].onclick= moveTile;
  }
}

function moveTile(){

  pieceRow= this.getAttribute("row");
  pieceCol= this.getAttribute("col");

  var rowTest1= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)-1);
  var colTest1= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)-1);
  var rowTest2= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)+1);
  var colTest2= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)+1);


  if (rowTest1){

    this.style.left= (gapCol * 100) + "px";

    tempRow= this.getAttribute("row");
    tempCol= this.getAttribute("col");

    this.setAttribute("row", gapRow);
    this.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }else if (colTest1) {

    this.style.top= (gapRow * 100) +"px";

    tempRow= this.getAttribute("row");
    tempCol= this.getAttribute("col");

    this.setAttribute("row", gapRow);
    this.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }else if (rowTest2) {

    this.style.left= (gapCol * 100) + "px";

    tempRow= this.getAttribute("row");
    tempCol= this.getAttribute("col");

    this.setAttribute("row", gapRow);
    this.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }else if (colTest2) {

    this.style.top= (gapRow * 100) + "px";

    tempRow= this.getAttribute("row");
    tempCol= this.getAttribute("col");

    this.setAttribute("row", gapRow);
    this.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }
}

function lightUp(){
  for (let i=0; i<puzzleArray.length; i++){
    puzzleArray[i].onmouseover= function(){
      pieceRow= puzzleArray[i].getAttribute("row");
      pieceCol= puzzleArray[i].getAttribute("col");

      var rowTest1= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)-1);
      var colTest1= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)-1);
      var rowTest2= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)+1);
      var colTest2= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)+1);

      if (rowTest1 || rowTest2 || colTest2 || colTest1){
        puzzleArray[i].classList.add("movablepiece");
      }
    }
    puzzleArray[i].onmouseout= function(){
      this.classList.remove("movablepiece");
    }
  }
}

function singleShuffle(){

  tileArray= findATile();
  var randomPiece= Math.floor(Math.random()* tileArray.length);
  puzzlePiece= tileArray[randomPiece];

  pieceRow= puzzlePiece.getAttribute("row");
  pieceCol= puzzlePiece.getAttribute("col");

  var rowTest1= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)-1);
  var colTest1= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)-1);
  var rowTest2= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)+1);
  var colTest2= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)+1);

  if (rowTest1){

    puzzlePiece.style.left= (gapCol * 100) + "px";

    tempRow= puzzlePiece.getAttribute("row");
    tempCol= puzzlePiece.getAttribute("col");

    puzzlePiece.setAttribute("row", gapRow);
    puzzlePiece.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }else if (colTest1) {

    puzzlePiece.style.top= (gapRow * 100) +"px";

    tempRow= puzzlePiece.getAttribute("row");
    tempCol= puzzlePiece.getAttribute("col");

    puzzlePiece.setAttribute("row", gapRow);
    puzzlePiece.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }else if (rowTest2) {

    puzzlePiece.style.left= (gapCol * 100) + "px";

    tempRow= puzzlePiece.getAttribute("row");
    tempCol= puzzlePiece.getAttribute("col");

    puzzlePiece.setAttribute("row", gapRow);
    puzzlePiece.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }else if (colTest2) {

    puzzlePiece.style.top= (gapRow * 100) + "px";

    tempRow= puzzlePiece.getAttribute("row");
    tempCol= puzzlePiece.getAttribute("col");

    puzzlePiece.setAttribute("row", gapRow);
    puzzlePiece.setAttribute("col", gapCol);

    gapRow= tempRow;
    gapCol= tempCol;
  }
}

function findATile(){
  goodTiles= [];
  for(let i=0; i<puzzleArray.length; i++){
    pieceRow= puzzleArray[i].getAttribute("row");
    pieceCol= puzzleArray[i].getAttribute("col");

    var rowTest1= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)-1);
    var colTest1= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)-1);
    var rowTest2= (pieceRow== gapRow) && (pieceCol== parseInt(gapCol)+1);
    var colTest2= (pieceCol== gapCol) && (pieceRow== parseInt(gapRow)+1);

    if (rowTest1 || rowTest2 || colTest2 || colTest1){
      goodTiles.push(puzzleArray[i]);
    }
  }
  return goodTiles;
}

function shuffle(){
  for (let i=0; i<300; i++){
    singleShuffle();
  }
}

function randomBackground(){
  var urls= ["url('drake.jpg')", "url('santan.jpg')", "url('stormzy.jpg')", "url('background.jpg')"];
  var selection= Math.floor(Math.random()*4);
  var choice= urls[selection];
  for (let i=0; i<puzzleArray.length; i++){
    puzzleArray[i].style.backgroundImage= choice;
  }
}

function backgroundSetup(){
  shuffleButton= document.getElementById("shufflebutton");
  shuffleButton.onclick= shuffle;

  var backgroundChoice= document.createElement("select");

  var popcaan= document.createElement("option");
  popcaan.text= "Popcaan";

  var drake= document.createElement("option");
  drake.text= "Drake";

  var stormzy= document.createElement("option");
  stormzy.text= "Stormzy";

  var santan= document.createElement("option");
  santan.text= "Santan Dave";

  backgroundChoice.add(popcaan);
  backgroundChoice.add(drake);
  backgroundChoice.add(stormzy);
  backgroundChoice.add(santan);

  backgroundChoice.onchange= function(){
    if (this.value=="Drake"){
      for (let i=0; i<puzzleArray.length; i++){
        puzzleArray[i].style.backgroundImage= "url('drake.jpg')";
      }
    }else if (this.value== "Santan Dave"){
      for (let i=0; i<puzzleArray.length; i++){
        puzzleArray[i].style.backgroundImage= "url('santan.jpg')";
      }
    }else if (this.value== "Stormzy"){
      for (let i=0; i<puzzleArray.length; i++){
        puzzleArray[i].style.backgroundImage= "url('stormzy.jpg')";
      }
    }else if(this.value== "Popcaan"){
      for (let i=0; i<puzzleArray.length; i++){
        puzzleArray[i].style.backgroundImage= "url('background.jpg')";
      }
    }
  }

  document.getElementById("overall").appendChild(backgroundChoice);
}
