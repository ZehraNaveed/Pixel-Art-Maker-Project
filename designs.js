const colorPick = document.getElementById("colorPick");
const sizePicker = document.getElementById("sizePicker");
const boxHeight = document.getElementById("inputHeight");
const boxWidth = document.getElementById("inputWidth");
const canvasBoard = document.getElementById("pixelCanvas");

function formSubmit(event) {
    event.preventDefault();
    canvasBoard.innerHTML = "";
    makeGrid(boxHeight, boxWidth);
  };
sizePicker.addEventListener("click", function(event){
  formSubmit(event);
  makeGrid(boxHeight, boxWidth);
        })
  function makeGrid(rows, cols){
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
