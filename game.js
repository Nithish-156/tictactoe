    //To set variables for the required elements
let currentPlayer = document.querySelector(".playerStats"); //To display player's turn
let xScore = document.querySelector(".xScore"); //To display the Player 'X' score
let oScore = document.querySelector(".oScore"); //To display the Player's 'O' score
let draw = document.querySelector(".draw"); //To display how many times the match become draw
let tiles = document.querySelectorAll(".tile"); //Play area
let result = document.querySelector(".result"); //To display the current game winner
let restartButton = document.querySelector(".restart"); //To restart the game
let resetButton = document.querySelector(".reset"); //To reset the game or to play the next game
let match = true; //To stop the game when a player wins or draw
let playerTurn = 1  //To assume in board -1 for player 'X' && -1 for player'O'
let boardValue = [[0,0,0],
                  [0,0,0],      //To set value to each row in board
                  [0,0,0]];
let tilesArray = Array.from(tiles);
    tilesArray.forEach(function (tile,index){ //forEach method used to apply a function in every element of an array
        tile.addEventListener('click',function(){ 
            if(currentPlayer.innerHTML == "Player 'O' Turn" && tile.innerHTML == "" && match == true){ //if the player turn is O and the match is true and then if the selected tile is empty
            tile.innerHTML="O"; //to add O in the selected tile
            tile.classList.add("o"); //to add a class to the selected tile
            gameboard(index);
            winnerCheck();
            tieCheck();
            currentPlayer.innerHTML = "Player 'X' Turn"; //to change the player's turn
        }else if(currentPlayer.innerHTML == "Player 'X' Turn" && tile.innerHTML == "" && match == true){
            tile.innerHTML = "X";
            tile.classList.add("x");
            gameboard(index);
            winnerCheck();
            tieCheck();
            currentPlayer.innerHTML = "Player 'O' Turn";
        }
    });
});

resetButton.addEventListener('click',function(){  //To reset the game after anyone wins or match drawn
        for(let i=0; i<tilesArray.length; i++){ //To remove the X and O from the tiles
        tilesArray[i].innerHTML = "";
    }
        for(let j=0; j<tilesArray.length; j++){     //To remove the class from each tile to remove text color
        tilesArray[j].classList.remove('x') || tilesArray[j].classList.remove('o');
    }
    result.innerHTML = ""; //to empty the result
    result.classList.remove('xWin') || result.classList.remove('oWin') || result.classList.remove('tie') //to remove the class list from result 
    match = true; //to change the match to true so the game continues
    boardValue = [[0,0,0],
                  [0,0,0],  //To set the board value to default
                  [0,0,0]];
});

//To start the game from begining
        restartButton.addEventListener('click', function(){
        location.reload(); //to restart the game or the page gets reload
});

//For board to find the exact row and coloumn
function gameboard(index){
    let row = index % 3; //To find column in board
    let col = (index - row) / 3; //To find rowArray
    if(boardValue[row][col] == 0){
       boardValue[row][col] = playerTurn;
       playerTurn *= -1;
}   
}
function winnerCheck(){
    for(let k=0; k<3; k++){
        let rowSum = boardValue[k][0]+boardValue[k][1]+boardValue[k][2];  //TO add in row-wise
        let colSum = boardValue[0][k]+boardValue[1][k]+boardValue[2][k] ; //To add coloumn-wise
        if(rowSum === 3 ||
           colSum === 3){
            result.innerHTML="Player 'X' won the match";
            result.classList.add('xWin');
            xScore.innerHTML ++;
            match = false;
            return;
        } else if(rowSum === -3 || 
                  colSum === -3){
            result.innerHTML="Player 'O' won the match";
            result.classList.add('oWin');
            oScore.innerHTML ++;
            match = false;
            return;
        }
    }
        let diagonal1Sum = boardValue[0][0]+boardValue[1][1]+boardValue[2][2]; //To check first diagonal
        let diagonal2Sum = boardValue[2][0]+boardValue[1][1]+boardValue[0][2]; //To check second diagonal
        if(diagonal1Sum === 3 ||
           diagonal2Sum === 3){
            result.innerHTML="Player 'X' won the match";
            result.classList.add('xWin');
            xScore.innerHTML ++;
            match = false;
        }else if((diagonal1Sum === -3 ||
                  diagonal2Sum === -3)){
            result.innerHTML="Player 'O' won the match";
            result.classList.add('oWin');
            oScore.innerHTML ++;
            match = false;
        }
}
function tieCheck(){
    if(match == true && 
       boardValue[0].indexOf(0) == -1 &&
       boardValue[1].indexOf(0) == -1 &&
       boardValue[2].indexOf(0) == -1){
        result.innerHTML = "Match Draw";
        result.classList.add('tie');
        draw.innerHTML ++;
        match = false;
    }
}