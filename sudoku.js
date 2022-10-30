let numSelected = null;
let tileSelected = null;

let errors = 0;

let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

let solution = [
  "387491625",
  "241568379",
  "567327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675932941",
  "812845763",
];

window.onload = function () {
  setGame();
};

function setGame() {
  //Digits 1-9
  for (let i = 1; i <= 9; i++) {
    //<div id="1" class="number">1</div>

    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  // Board 9x9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      // I don't understand how this is pointing to the particular character inside the array of strings. It seems to be pointing to a coordinate.
      if (board[r][c] != "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      if (r == 2 || r == 5) {
        tile.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        tile.classList.add("vertical-line");
      }

      tile.classList.add("tile");
      document.getElementById("board").append(tile);
      tile.addEventListener("click", selectTile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
  // This adds another Class to the HTML element. My question is why is it after the class added in the function setGame on line 43?
}

function selectTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }

    // "0-0" "0-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] == numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      errors += 1;
      document.getElementById("errors").innerText = errors;
    }
  }
}
