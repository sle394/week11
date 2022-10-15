let playerX = true;

let xArray = [];
let oArray = [];

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

//restarting the game and clearing the board
function restartBtn(){
    location.reload();
    document.getElementById('#restartBtn').innerHTML = '';
}

//game playthrough
function cellClick(currentCell) {
    let currentIndex =  parseInt(currentCell.id);

    //console.log(currentIndex + 1);
    if(playerX == true){
        //X playing
        document.getElementById(currentCell.id).innerHTML = "X"; //placing X on the board
        xArray.push(currentIndex);
        document.getElementById("alert").innerHTML = "O's turn!" //turn announcement
        playerX = false;
    }
    else {
        //O playing
        document.getElementById(currentCell.id).innerHTML = "O"; // placing O on the board
        oArray.push(currentIndex);
        document.getElementById("alert").innerHTML = "X's turn!" //turn announcement
        playerX = true;
    }

    
    let result =  winner();

    if (result != "") {
        document.getElementById("alert").innerHTML = result;
    }
    console.log(xArray);
    console.log(oArray);
}


//function to check for winner and announcing the winner
function winner(){
    let xWin = false;
    let oWin = false;
    for (i = 0; i < winConditions.length; i++) {

        if (xWin == true || oWin == true) {
            break;
        }

        //defaulted to winner
        xWin = true;
        oWin= true;
        let currentWinArray = winConditions[i];

        for (a = 0; a < currentWinArray.length; a++) {
            let currentWinNumber = currentWinArray[a]; //comparing current board to win condition for each number in array
            
            if (!xArray.includes(currentWinNumber)) {
                xWin = false; //if number isn't in the wins, then false
            }

            if (!oArray.includes(currentWinNumber)) {
                oWin = false; //if number isn't in the wins, then false
            }
        }
    }

    if (xWin == true) {
        return "X IS THE WINNER";
    }
 
    if (oWin == true) {
        return "O IS THE WINNER";
    }
    isBoardFull();

    return "";
}

//checking board for a draw
function isBoardFull() {
    let boardlength = (xArray.length + oArray.length);
    
    if (boardlength >= 9){
        document.getElementById("alert").innerHTML = "IT'S A DRAW! EVERYONE WINS!";
        return true;
    }
}