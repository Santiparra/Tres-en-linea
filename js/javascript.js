const module = (function () {
    const gameboard =["","","","","","","","",""]; 
    const board = document.querySelectorAll(".square")
    const tempBoard = Array.from(board)

    const player = { chip: "S",}

    function checkDom() {
        const square0 = document.getElementById("square0");
        const square1 = document.getElementById("square1");
        const square2 = document.getElementById("square2");
        const square3 = document.getElementById("square3");
        const square4 = document.getElementById("square4");
        const square5 = document.getElementById("square5");
        const square6 = document.getElementById("square6");
        const square7 = document.getElementById("square7");
        const square8 = document.getElementById("square8");  
    }

    function chooseSquare(pChip, sqN) {
        gameboard.splice(sqN, 1, pChip)
        render()
    }

    function render() {
        square0.textContent = gameboard[0]
        square1.textContent = gameboard[1]
        square2.textContent = gameboard[2]
        square3.textContent = gameboard[3]
        square4.textContent = gameboard[4]
        square5.textContent = gameboard[5]
        square6.textContent = gameboard[6]
        square7.textContent = gameboard[7]
        square8.textContent = gameboard[8]
    }
    function loggear () {
        console.log(gameboard)
    }

    board.forEach((button) => {
        button.addEventListener("click", function (e,index)  {
            index = tempBoard.indexOf(e.currentTarget)
            if (e.currentTarget.textContent === "") {
                chooseSquare(player.chip ,index)
                console.log(gameboard) 
                render()
            } else {return}   
        });
      }); 

    render()   

}
)()


/* 
const gameboard = (() => {
    
    const board = document.querySelectorAll(".square");
    let currentBoard = Array.from(board)
    const player = { chip: "0",}


    function checkDom() {
        const square0 = document.getElementById("square0");
        const square1 = document.getElementById("square1");
        const square2 = document.getElementById("square2");
        const square3 = document.getElementById("square3");
        const square4 = document.getElementById("square4");
        const square5 = document.getElementById("square5");
        const square6 = document.getElementById("square6");
        const square7 = document.getElementById("square7");
        const square8 = document.getElementById("square8");  
    }
     function chooseSquare(pChip, sqN) {
        gameboard.splice(sqN, 1, pChip)
        render()
    } 
    function render() {
        square0.textContent = currentBoard[0]
        square1.textContent = currentBoard[1]
        square2.textContent = currentBoard[2]
        square3.textContent = currentBoard[3]
        square4.textContent = currentBoard[4]
        square5.textContent = currentBoard[5]
        square6.textContent = currentBoard[6]
        square7.textContent = currentBoard[7]
        square8.textContent = currentBoard[8]
    }



    currentBoard.forEach((button) => {
        button.addEventListener("click", function (e,index)  {
            index = currentBoard.indexOf(e.currentTarget)
            if (e.currentTarget.textContent !== "") {
                e.currentTarget.textContent = "x"; 
                console.log(currentBoard) 
                render(index, "X")
            } else { console.log(currentBoard)}
            
            
        });
      }); 

    function newBoard () {       
        currentBoard = Array.from(board)          
    }

    function clearBoard() {
        currentBoard.slice(0,9);
    }
    function render(index, tex) {
        currentBoard[index].textContent = tex
    }
 return currentBoard 
render()
 console.log(Array.from(board)) 
})(); */