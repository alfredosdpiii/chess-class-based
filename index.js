const chessboard = document.querySelector(".chess-board");
const cells = document.querySelectorAll(".cell");
// .forEach((cell) => cell.addEventListener('click', handleCellClick))

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
    this.type = isWhite ? `fas fa-chess-pawn white` : `fas fa-chess-pawn`;
  }

  // displayPiece() {
  //   coordinates[this.coordi;nate].innerHTML = this.type;
  // }

  createPawn(cell){
      const newP = document.createElement('i')
      // const text = document.createTextNode(this.type)
      // newP.appendChild(text)
      newP.className = `${this.type}`
      cell.appendChild(newP)
    };
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
  let squares = 0;
  for (let row = 0; row < board.length; row++) {
    const rank = board[row];
    // console.log(rank);
    for (let column = 0; column < rank.length; column++) {
      const piece = rank[column];

      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (row % 2 === column % 2) {
        cell.classList.add("light-cell");
      } else {
        cell.classList.add("dark-cell");
      }
      cell.setAttribute("data-rank", row);
      cell.setAttribute("data-file", column);

      chessboard.appendChild(cell);
      //black piece
      if (board[row][column] === "bp") {
        // let blackRook = new Rook([row][column], false);
        // cell.innerHTML = this.type;
        
        let testPawn = new Pawn([row][column], false);
        let created = testPawn.createPawn(cell)
        console.log(created)
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
        let whitePawn = new Pawn([row][column], true);

        console.log(cell)
        let created = whitePawn.createPawn(cell)
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

config()
