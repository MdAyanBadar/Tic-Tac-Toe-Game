let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let winningCont = document.querySelector('.msg-container');
let winningMsg = document.querySelector("#msg");
let newButton = document.querySelector("#new-btn");

let turnO = true;

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];  
const resetGame = ()=>{
    turnO = true;     
    enableBoxes();
    winningCont.classList.add("hide");
}

boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turnO) {
      boxes.innerHTML = "O";
      turnO = false;
    } else {
      boxes.innerHTML = "X";
      turnO = true;
    }
    boxes.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
        resetButton.classList.remove("hide");
    }
}

const showWinner = (winner) =>{
    winningMsg.innerHTML = `Winner is ${winner}`;
    winningCont.classList.remove("hide");
    resetButton.classList.add("hide");  
}

const checkWinner = () => {
    for (pattern of winningPattern) {
      
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
          if(pos1Val === pos2Val && pos2Val === pos3Val){
              disableBoxes();
              showWinner(pos1Val);
          }
      }
  
    }
  };

  newButton.addEventListener("click", resetGame);
  resetButton.addEventListener("click", resetGame);