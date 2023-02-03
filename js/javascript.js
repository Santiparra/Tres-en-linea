//Crear fabrica de jugadores
const Player = (chip, turn) => {
    this.chip = chip;
    this.turn = turn;
    const getChip =  chip;
    const getTurn =  turn;

    return {getChip, getTurn}
};

//Crear tablero

const gameboard = (() => {
    let gameboard =[ "","","","","","","","","" ];

    const resetBoard = () => {
        gameboard =["","","","","","","","",""];
    }   

    const checkGameboard = (index) => {
        return gameboard[index];
    }

    const chooseSquare = (pChip, sqN) => {
        gameboard.splice(sqN, 1, pChip)
        console.log(gameboard)
    }

return { resetBoard, chooseSquare, checkGameboard }
})();


//Crear display y logica           

const gamelogic = (() => {
     
    let player1 = Player("X", true);
    let player2 = Player("O", false);
    let round = 0;
        
    const board = document.querySelectorAll(".square")
    const resultMsg = document.querySelector(".gameResult")
    const resetButton = document.querySelectorAll(".reset")

    const tempBoard = Array.from(board)
    
    const reset = () => {
        player1.getTurn = true;
        player2.getTurn = false;
        round = 0;
        resultMsg.textContent = "Comienza el juego";
        gameboard.resetBoard();
        for (const squares of board) {
            squares.classList.remove(player1.getChip);
            squares.classList.remove(player2.getChip);
        }
    }

    const checkWin = (currentPlayer) => {
        if (gameboard.checkGameboard(0) === currentPlayer && 
            gameboard.checkGameboard(1) === currentPlayer && 
            gameboard.checkGameboard(2) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(3) === currentPlayer && 
            gameboard.checkGameboard(4) === currentPlayer && 
            gameboard.checkGameboard(5) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(6) === currentPlayer && 
            gameboard.checkGameboard(7) === currentPlayer && 
            gameboard.checkGameboard(8) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(0) === currentPlayer && 
            gameboard.checkGameboard(3) === currentPlayer && 
            gameboard.checkGameboard(6) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(1) === currentPlayer && 
            gameboard.checkGameboard(4) === currentPlayer && 
            gameboard.checkGameboard(7) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(2) === currentPlayer && 
            gameboard.checkGameboard(5) === currentPlayer && 
            gameboard.checkGameboard(8) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(0) === currentPlayer && 
            gameboard.checkGameboard(4) === currentPlayer && 
            gameboard.checkGameboard(8) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(2) === currentPlayer && 
            gameboard.checkGameboard(4) === currentPlayer && 
            gameboard.checkGameboard(6) === currentPlayer) {
            return true 
        }  else if (gameboard.checkGameboard(0) !== "" && 
            gameboard.checkGameboard(1) !== "" && 
            gameboard.checkGameboard(2) !== "" && 
            gameboard.checkGameboard(3) !== "" && 
            gameboard.checkGameboard(4) !== "" && 
            gameboard.checkGameboard(5) !== "" && 
            gameboard.checkGameboard(6) !== "" && 
            gameboard.checkGameboard(7) !== "" && 
            gameboard.checkGameboard(8) !== "") {
            return "tie"
        }  else {return false}
    }  

    const wasTie = () => {
        resultMsg.textContent = "Fue un empate!";
        killGame()
    }

    const gameResults = () => {
        const gameEnd = checkWin(whosTurn(), round)
        if (gameEnd === true) {
            resultMsg.textContent = `${whosTurn()} fue el vencedor!`;
            killGame();    
        } else if (gameEnd === "tie"){
            wasTie();
        } else {updateDisplay()}
    }

    const updateDisplay = () => {
        if (whosTurn() === "X") {
            resultMsg.textContent = "Es el turno de O"
        } else if (whosTurn() === "O") {
            resultMsg.textContent = "Es el turno de X"
        }               
    }

    const killGame = () => {
        for (let i = 0; i < 9; i++) {
            gameboard.chooseSquare("X",i)         
        }
    }

    const checkBoard = (e) => {
        const selectedSquare = e.target;
        const index = tempBoard.indexOf(e.currentTarget)
        if (gameboard.checkGameboard(index) === "") {
            gameboard.chooseSquare(whosTurn(),index)                 
            putChip(selectedSquare, whosTurn()) 
            gameResults(); 
            rounds()
        } else {return}    
        console.log(player1.getTurn) 
        console.log(whosTurn()) 
        console.log(round)  
    }    
    
    const whosTurn = () => {      
        return player1.getTurn ? player1.getChip : player2.getChip
    };
    
    resetButton.forEach((button) => {
        button.addEventListener("click", reset);
    });   

    board.forEach((div) => {
        div.addEventListener("click", checkBoard);
    });     
    
    const putChip = (selectedSquare, whosTurn) => {
        selectedSquare.classList.add(whosTurn)
    }

    const rounds = () => {
        player1.getTurn = !player1.getTurn;
        player2.getTurn = !player2.getTurn;
        round++
    }    
})();
