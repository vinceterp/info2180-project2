window.onload= function events(){
  puzzlePieces();
  backgroundPositions();
  squareIds();
}

function puzzlePieces(){

  puzzleArray= document.getElementById("puzzlearea").children;

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

  puzzleArray= document.getElementById("puzzlearea").children;

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

  puzzleArray= document.getElementById("puzzlearea").children;

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
}
