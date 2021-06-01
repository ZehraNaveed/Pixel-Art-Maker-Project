// Select color input
const colorPick = document.getElementById("colorPick");
// Select size input
const sizePicker = document.getElementById("sizePicker");
const boxHeight = document.getElementById("inputHeight");
const boxWidth = document.getElementById("inputWidth");
const canvasBoard = document.getElementById("pixelCanvas");

function formSubmit(event) {
    event.preventDefault();
    canvasBoard.innerHTML = "";
    makeGrid(boxHeight, boxWidth);
  };
// sizePicker function
sizePicker.addEventListener("click", function(event){
    formSubmit(event);
    makeGrid(boxHeight, boxWidth);
        });
// when size is selected by user, call makeGrid()
function makeGrid(rows, cols){
    canvasBoard.innerHTML = '';
    for (let r = 0; r < rows.value; r++) {
        let row = canvasBoard.insertRow(0);
        console.log(row)
        for (let c = 0; c < cols.value; c++) {
            let cell = row.insertCell(0);
            console.log(cell)
            cell.addEventListener("click", e => {
              e.target.style.background = colorPicker.value;
         });
       };
    };
  };
