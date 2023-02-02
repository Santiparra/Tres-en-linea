const module = (function () {
    const gameboard =[ "X","X","X","X","O","O","O","O","X" ]; 
    const board = document.querySelectorAll(".square")

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
        button.addEventListener("click", (e) => {
            e.currentTarget.textContent = player.chip;
            chooseSquare(player.chip, button.id)
            loggear()
        });
      });


   /*  square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    })
    square0.addEventListener("click", (e) => {
        chooseSquare("0", 0)
        loggear()
    }) */

    render()
    

}
)()
    /* function fillSquare() {
        
        gameboard.splice(0, 1, player.chip);

        gameboard.splice(1, 1, player.chip); 

        gameboard.splice(2, 1, player.chip); 

        gameboard.splice(3, 1, player.chip);

        gameboard.splice(4, 1, player.chip);

        gameboard.splice(5, 1, player.chip);

        gameboard.splice(6, 1, player.chip);

        gameboard.splice(7, 1, player.chip);

        gameboard.splice(8, 1, player.chip);

            
        render()       
        } 
        
    
    square0.addEventListener("click", fillSquare());
    square1.addEventListener("click", fillSquare());
    square2.addEventListener("click", fillSquare());
    square3.addEventListener("click", fillSquare());
    square4.addEventListener("click", fillSquare());
    square5.addEventListener("click", fillSquare());
    square6.addEventListener("click", fillSquare());
    square7.addEventListener("click", fillSquare());
    square8.addEventListener("click", fillSquare());  */





/* const gameboard =["x","x","x","x","O","O","O","O", "X"];
const player = {
    chip: "0",
}
const board = document.querySelectorAll(".square");

const square0 = document.getElementById("square0");
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");



const render = function () {
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


const fillSquare = function () {
    gameboard[0] = player.chip
    gameboard[1] = player.chip 
    gameboard[2] = player.chip 
    gameboard[3] = player.chip
    gameboard[4] = player.chip
    gameboard[5] = player.chip
    gameboard[6] = player.chip
    gameboard[7] = player.chip
    gameboard[8] = player.chip
    render
}

square0.addEventListener("click", fillSquare);
square1.addEventListener("click", fillSquare);
square2.addEventListener("click", fillSquare);
square3.addEventListener("click", fillSquare);
square4.addEventListener("click", fillSquare);
square5.addEventListener("click", fillSquare);
square6.addEventListener("click", fillSquare);
square7.addEventListener("click", fillSquare);
square8.addEventListener("click", fillSquare); 
 */



/* const gameboard = (() => {
    const checkDom = (square0, square1, square2, square3, square4, square5, square6, square7, square8) =>
        square0 = document.getElementById("square0");
        square1 = document.getElementById("square1");
        square2 = document.getElementById("square2");
        square3 = document.getElementById("square3");
        square4 = document.getElementById("square4");
        square5 = document.getElementById("square5");
        square6 = document.getElementById("square6");
        square7 = document.getElementById("square7");
        square8 = document.getElementById("square8");

}


) */
/* 
switch (square) {
            gameboard[0] = player.chip;
        render();
        
            gameboard[1] = player.chip 
        render()
        
            gameboard[2] = player.chip 
        render()
        
            gameboard[3] = player.chip
        render()
        
            gameboard[4] = player.chip
        render()
        
            gameboard[5] = player.chip
        render()
        
            gameboard[6] = player.chip
        render()
        
            gameboard[7] = player.chip
        render()
                            
            gameboard[8] = player.chip
        render()
            
    default:
        
} 
 */




/* 
const gameboard = {
        squares: [x,o,x,o,o,x,x,o,o,x],
        init: function() {
            this.checkDom();
            this.render();    
    },
    checkDom: function () {
        this.square0 = document.getElementById("square0");
        this.square1 = document.getElementById("square1");
        this.square2 = document.getElementById("square2");
        this.square3 = document.getElementById("square3");
        this.square4 = document.getElementById("square4");
        this.square5 = document.getElementById("square5");
        this.square6 = document.getElementById("square6");
        this.square7 = document.getElementById("square7");
        this.square8 = document.getElementById("square8");
    },
     bindEvents: function () {
        this.square0 = square0.addEventListener("click", fillSquare);
        this.square1 = square1.addEventListener("click", fillSquare);
        this.square2 = square2.addEventListener("click", fillSquare);
        this.square3 = square3.addEventListener("click", fillSquare);
        this.square4 = square4.addEventListener("click", fillSquare);
        this.square5 = square5.addEventListener("click", fillSquare);
        this.square6 = square6.addEventListener("click", fillSquare);
        this.square7 = square7.addEventListener("click", fillSquare);
        this.square8 = square8.addEventListener("click", fillSquare);
    } 

    render: function() {
        const flow = {
            squares: this.squares,
        };
        this.square0 = square0 = this.squares[0];
        this.square1 = square0 = this.squares[1];
        this.square2 = square0 = this.squares[2];
        this.square3 = square0 = this.squares[3];
        this.square4 = square0 = this.squares[4];
        this.square5 = square0 = this.squares[5];
        this.square6 = square0 = this.squares[6];
        this.square7 = square0 = this.squares[7];
        this.square8 = square0 = this.squares[8];
    };


    gameboard.init();
    
} */