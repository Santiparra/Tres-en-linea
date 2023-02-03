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
    //event listeners
        
        //quitar EL y revisar si hay ganador
        
        //revisar si el juego termino
       
          //si termino reiniciar
   
      //llevar conteo turnos            

const gamelogic = (() => {
     
    let player1 = Player("X", true);
    let player2 = Player("O", false);
    let round = 1;
        
    const board = document.querySelectorAll(".square")
    const tempBoard = Array.from(board)
    /* let gameEnd = false; */

    const reset = () => {
        player1.getTurn = true;
        player2.getTurn = false;
        round = 0;
        gameboard.resetBoard()
        /* gameEnd = false; */
        for (const squares of board) {
            squares.classList.remove(player1.getChip);
            squares.classList.remove(player2.getChip);
        }
    }

    const checkWin = (currentPlayer) => {
        if (gameboard.checkGameboard(0) === currentPlayer && gameboard.checkGameboard(1) === currentPlayer && gameboard.checkGameboard(2) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(3) === currentPlayer && gameboard.checkGameboard(4) === currentPlayer && gameboard.checkGameboard(5) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(6) === currentPlayer && gameboard.checkGameboard(7) === currentPlayer && gameboard.checkGameboard(8) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(0) === currentPlayer && gameboard.checkGameboard(3) === currentPlayer && gameboard.checkGameboard(6) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(1) === currentPlayer && gameboard.checkGameboard(4) === currentPlayer && gameboard.checkGameboard(7) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(2) === currentPlayer && gameboard.checkGameboard(5) === currentPlayer && gameboard.checkGameboard(8) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(0) === currentPlayer && gameboard.checkGameboard(4) === currentPlayer && gameboard.checkGameboard(8) === currentPlayer) {
            return true
        } else if (gameboard.checkGameboard(2) === currentPlayer && gameboard.checkGameboard(4) === currentPlayer && gameboard.checkGameboard(6) === currentPlayer) {
            return true
        } else {return false}
    }  

    const gameResults = () => {
        const gameEnd = checkWin(whosTurn())
        if (gameEnd === true) {
            reset()
            gameStart()
        } else if (round > 8) {
            reset()
            gameStart()
        } else {return}
    }

    const checkBoard = (e) => {
        const selectedSquare = e.target;
        index = tempBoard.indexOf(e.currentTarget)
        gameboard.chooseSquare(whosTurn(),index)
        console.log(selectedSquare) 
        console.log(player1.getTurn) 
        console.log(whosTurn()) 
        console.log(round)          
        putChip(selectedSquare, whosTurn()) 
        gameResults() 
        rounds()         
        /* console.log(checkWin())  */
        console.log(board) 
        /* console.log(winConditions) */
        console.log(gameboard.checkGameboard(0))
        selectedSquare.removeEventListener("click", checkBoard)
    }    
    
    const whosTurn = () => {      
        return player1.getTurn ? player1.getChip : player2.getChip
    };
    const gameStart = () => {
        board.forEach((div) => {
            div.addEventListener("click", checkBoard);
        });     
    }
    const putChip = (selectedSquare, whosTurn) => {
        selectedSquare.classList.add(whosTurn)
    }

    const rounds = () => {
        player1.getTurn = !player1.getTurn;
        player2.getTurn = !player2.getTurn;
        round++
    }
    gameStart()    
})();
