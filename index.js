const chessboard = document.querySelector(".chess-board");
let state = false;

let board = [
  ["br", "bn", "bb", "bk", "bq", "bb", "bn", "br"],
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
  ["wr", "wn", "wb", "wk", "wq", "wb", "wn", "wr"],
];

// const coordinates = Array.from(cells);
// console.log(coordinates);

// coordinates.forEach((coordinate, i) => {
//   // console.log(coordinate);
// });

class Piece {
  constructor(coordinate, isWhite, type) {
    this.coordinate = coordinate;
    this.white = isWhite;
    this.type = type;
  }
}

class Pawn extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9817;;" : "&#9823;";
  }
}

class Rook extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9814;" : "&#9820;";
  }
}

class Knight extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9816;" : "&#9822;";
  }
}

class Bishop extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9815;" : "&#9821;";
  }
}

class Queen extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9813;" : "&#9819;";
  }
}

class King extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9812;" : "&#9818;";
  }
}

function config() {
  for (let row = 0; row < board.length; row++) {
    const rank = board[row];
    // console.log(rank);
    for (let column = 0; column < rank.length; column++) {
      const piece = rank[column];

      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (row % 2 === column % 2) {
        cell.classList.add("cell-light");
      } else {
        cell.classList.add("cell-dark");
      }
      cell.setAttribute("data-rank", row);
      cell.setAttribute("data-file", column);

      chessboard.appendChild(cell);

      let coordinate = [row][column];
      //black piece
      if (board[row][column] === "bp") {
        const blackPawn = new Pawn(`[${row}][${column}]`, false);
        cell.innerHTML = blackPawn.type;
        // console.log(blackPawn);
      }
      if (board[row][column] === "br") {
        cell.innerHTML = "&#9820;";
      }
      if (board[row][column] === "bn") {
        cell.innerHTML = "&#9822;";
      }
      if (board[row][column] === "bb") {
        cell.innerHTML = "&#9821;";
      }
      if (board[row][column] === "bk") {
        cell.innerHTML = "&#9818;";
      }
      if (board[row][column] === "bq") {
        cell.innerHTML = "&#9819;";
      }

      //white piece
      if (board[row][column] === "wp") {
        cell.innerHTML = "&#9817;";
      }
      if (board[row][column] === "wr") {
        cell.innerHTML = "&#9814;";
      }
      if (board[row][column] === "wn") {
        cell.innerHTML = "&#9816;";
      }
      if (board[row][column] === "wb") {
        cell.innerHTML = "&#9815;";
      }
      if (board[row][column] === "wk") {
        cell.innerHTML = "&#9812;";
      }
      if (board[row][column] === "wq") {
        cell.innerHTML = "&#9813;";
      }
    }
  }
}

config();
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", clickHandler);
});

function clickHandler(e) {
  const targetCell = e.target;
  let rank = targetCell.dataset.rank;
  let file = targetCell.dataset.file;
  let currentBoardItem;

  if (!state) {
    state = true;
    currentCell = targetCell;
    currentPiece = targetCell.innerHTML;
    currentBoardItem = board[rank][file];
    currentSquare = board[rank][file];
  } else {
    e.target.innerHTML = currentPiece;
    currentCell.innerHTML = "";
    state = false;
    currentSquare = "";
    board[e.target.dataset.rank][e.target.dataset.file] = currentBoardItem;
  }

  console.log(board);
}
