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
let playerTurn = 1  //To set in boardArray
let boardArray = [[0,0,0],
                  [0,0,0],      //To set every tiles in an array
                  [0,0,0]]
let tilesArray=Array.from(tiles);

    tilesArray.forEach(function (tile,index){ //forEach method used to apply a function in every element of an array

        tile.addEventListener('click',function(){ 

            if(currentPlayer.innerHTML=="Player 'O' Turn" && tile.innerHTML=="" && match == true){ //if the player turn is O and the match is true and then if the selected tile is empty
            tile.innerHTML="O"; //to add O in the selected tile
            tile.classList.add("o"); //to add a class to the selected tile
            board(index); //to check the winning combination is satisfied for player O or match is draw
            winningCondition();
            tieCheck()
            currentPlayer.innerHTML="Player 'X' Turn"; //to change the player's turn
        }else if(currentPlayer.innerHTML=="Player 'X' Turn" && tile.innerHTML=="" && match == true){
            tile.innerHTML="X";
            tile.classList.add("x");
            board(index);
            winningCondition();
            tieCheck()
            currentPlayer.innerHTML = "Player 'O' Turn";
        }
    });
});

resetButton.addEventListener('click',function(){  //To reset the game after anyone wins or match drawn
        for(let i=0; i<tilesArray.length;i++){ //To remove the X and O from the tiles
        tilesArray[i].innerHTML=""
    }
        for(let j=0; j<tilesArray.length;j++){     //To remove the class from each tile to remove text color
        tilesArray[j].classList.remove('x')|| tilesArray[j].classList.remove('o')
    }
    result.innerHTML=""; //to empty the result
    result.classList.remove('xWin') || result.classList.remove('oWin') || result.classList.remove('tie') //to remove the class list from result 
    match=true; //to change the match to true so the game continues
        boardArray = [[0,0,0],
                      [0,0,0],  //To set the board value to default
                      [0,0,0]]
});

//To start the game from begining
        restartButton.addEventListener('click', function(){
        location.reload(); //to restart the game or the page gets reload
});

//For boardArray
function board(index){
    let col = index % 3
    let row = (index - col) / 3
    if(boardArray[col][row] == 0){
       boardArray[col][row] = playerTurn
       playerTurn *= -1
}   
}
function winningCondition(){
    for(let k=0; k<3; k++){
        let rowSum = boardArray[k][0]+boardArray[k][1]+boardArray[k][2]  //TO check row
        let colSum = boardArray[0][k]+boardArray[1][k]+boardArray[2][k]  //To check coloumn 
        
        if(rowSum === 3 || colSum === 3){
            result.innerHTML="Player 'X' won the match"
            result.classList.add('xWin')
            xScore.innerHTML ++
            match = false
        } else if(rowSum === -3 || colSum === -3){
            result.innerHTML="Player 'O' won the match"
            result.classList.add('oWin')
            oScore.innerHTML ++
            match = false
        }
    }
        let diagonal1Sum = boardArray[0][0]+boardArray[1][1]+boardArray[2][2] //To check first diagonal
        let diagonal2Sum = boardArray[2][0]+boardArray[1][1]+boardArray[0][2] //To check second diagonal
        if(diagonal1Sum === 3 || diagonal2Sum === 3){
            result.innerHTML="Player 'X' won the match"
            result.classList.add('xWin')
            xScore.innerHTML ++
            match = false
        }else if((diagonal1Sum === -3 || diagonal2Sum === -3)){
            result.innerHTML="Player 'O' won the match"
            result.classList.add('oWin')
            oScore.innerHTML ++
            match = false
        }
}
function tieCheck(){
    if(match == true && boardArray[0].indexOf(0) == -1 &&
     boardArray[1].indexOf(0)== -1 &&
     boardArray[2].indexOf(0)==-1){
        result.innerHTML = "Match Draw";
        result.classList.add('tie');
        draw.innerHTML ++
        match = false
    }
}