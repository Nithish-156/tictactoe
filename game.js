    //To set variables for the required elements

let currentPlayer = document.querySelector(".playerStats"); //to display player's turn
let xScore = document.querySelector(".xScore"); //to display the Player 'X' score
let oScore = document.querySelector(".oScore"); //to display the Player's 'O' score
let draw = document.querySelector(".draw"); //to display how many times the match become draw
let tiles = document.querySelectorAll(".tile"); //play area
let result = document.querySelector(".result"); //to display the current game winner
let restartButton = document.querySelector(".restart"); //to restart the game
let resetButton = document.querySelector(".reset"); //to reset the game or to play the next game
let match = true; //to stop the game when a player wins or draw

//To set every tiles in an array

let tilesArray=Array.from(tiles);

tilesArray.forEach(function (tile){ //forEach method used to apply a function in every element of an array
    tile.addEventListener('click',function(){ 
        if(currentPlayer.innerHTML=="Player 'O' Turn" && tile.innerHTML=="" && match == true){ //if the player turn is O and the match is true and then if the selected tile is empty
            tile.innerHTML="O"; //to add O in the selected tile
            tile.classList.add("o"); //to add a class to the selected tile
            matchResult(); //to check the winning combination is satisfied for player O or match is draw
            currentPlayer.innerHTML="Player 'X' Turn"; //to change the player's turn

        }else if(currentPlayer.innerHTML=="Player 'X' Turn" && tile.innerHTML=="" && match == true){
            tile.innerHTML="X";
            tile.classList.add("x");
            matchResult();
            currentPlayer.innerHTML = "Player 'O' Turn";
        }
    });
});

//To check who wins the game or the game become draw

function matchResult(){
    // If player X win the match
    if(tilesArray.at(0).innerHTML =="X" &&
       tilesArray.at(3).innerHTML =="X" &&
       tilesArray.at(6).innerHTML =="X" ||
       tilesArray.at(1).innerHTML =="X" &&
       tilesArray.at(4).innerHTML =="X" &&
       tilesArray.at(7).innerHTML =="X" ||
       tilesArray.at(2).innerHTML =="X" &&
       tilesArray.at(5).innerHTML =="X" &&
       tilesArray.at(8).innerHTML =="X" ||
       tilesArray.at(0).innerHTML =="X" &&
       tilesArray.at(1).innerHTML =="X" &&
       tilesArray.at(2).innerHTML =="X" ||
       tilesArray.at(3).innerHTML =="X" &&
       tilesArray.at(4).innerHTML =="X" &&
       tilesArray.at(5).innerHTML =="X" ||
       tilesArray.at(6).innerHTML =="X" &&
       tilesArray.at(7).innerHTML =="X" &&
       tilesArray.at(8).innerHTML =="X" ||
       tilesArray.at(6).innerHTML =="X" &&
       tilesArray.at(4).innerHTML =="X" &&
       tilesArray.at(2).innerHTML =="X" ||
       tilesArray.at(0).innerHTML =="X" &&
       tilesArray.at(4).innerHTML =="X" && 
       tilesArray.at(8).innerHTML =="X"){
            result.innerHTML="Player 'X' Wins the game"; // then display Player x is winner in the result place
            result.classList.add('xWin'); // to add a class x to show in color
            match = false; //also change the match to false So game cannot be continue
            xScore.innerHTML ++ ; // also add 1 point to the xScore
        
    //Else player O win the watch

        }else if(tilesArray.at(0).innerHTML =="O" &&
                 tilesArray.at(3).innerHTML =="O" && 
                 tilesArray.at(6).innerHTML =="O" || 
                 tilesArray.at(1).innerHTML =="O" && 
                 tilesArray.at(4).innerHTML =="O" &&
                 tilesArray.at(7).innerHTML =="O" ||
                 tilesArray.at(2).innerHTML =="O" &&
                 tilesArray.at(5).innerHTML =="O" &&
                 tilesArray.at(8).innerHTML =="O" ||
                 tilesArray.at(0).innerHTML =="O" &&
                 tilesArray.at(1).innerHTML =="O" &&
                 tilesArray.at(2).innerHTML =="O" ||
                 tilesArray.at(3).innerHTML =="O" &&
                 tilesArray.at(4).innerHTML =="O" &&
                 tilesArray.at(5).innerHTML =="O" ||
                 tilesArray.at(6).innerHTML =="O" &&
                 tilesArray.at(7).innerHTML =="O" &&
                 tilesArray.at(8).innerHTML =="O" ||
                 tilesArray.at(6).innerHTML =="O" &&
                 tilesArray.at(4).innerHTML =="O" && 
                 tilesArray.at(2).innerHTML =="O" ||
                 tilesArray.at(0).innerHTML =="O" && 
                 tilesArray.at(4).innerHTML =="O" && 
                 tilesArray.at(8).innerHTML=="O"){
             
                    result.innerHTML="Player 'O' Wins the game";
                    result.classList.add('oWin');
                    match = false;
                    oScore.innerHTML ++;

        //Else the match is draw

        }else if(tilesArray.at(0).innerHTML != "" && tilesArray.at(1).innerHTML != "" && tilesArray.at(2).innerHTML !="" &&
                 tilesArray.at(3).innerHTML != "" && tilesArray.at(4).innerHTML != "" && tilesArray.at(5).innerHTML !="" &&
                 tilesArray.at(6).innerHTML != "" && tilesArray.at(7).innerHTML != "" && tilesArray.at(8).innerHTML !=""){
                    result.innerHTML = "Match Draw";
                    result.classList.add('drawResult')
                    match = false;
                    draw.innerHTML ++;
         }
}

     
    
 
    //To reset the game after anyone wins or match drawn

    resetButton.addEventListener('click',function(){

    //To remove the X and O from the tiles

    for(let i=0; i<tilesArray.length;i++){
        tilesArray[i].innerHTML=""
    }

        //To remove the class from each tile to remove text color

    for(let j=0; j<tilesArray.length;j++){
        tilesArray[j].classList.remove('x')|| tilesArray[j].classList.remove('o')
    }
    
    result.innerHTML=""; //to empty the result
    result.classList.remove('xWin') || result.classList.remove('oWin') || result.classList.remove('drawResult') //to remove the class list from result 
    match=true; //to change the match to true so the game continues
});

   //To start the game from begining

    restartButton.addEventListener('click', function(){
        location.reload(); //to restart the game or the page gets reload
});