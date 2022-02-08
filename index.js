const chessboard = document.querySelector(".chess-board");
const cells = document.querySelectorAll(".cell");
// .forEach((cell) => cell.addEventListener('click', handleCellClick))
let whiteTurn = true;
let state = false;
let board = [
  ["br", "bn", "bb", "bk", "bq", "bb", "bn", "br"],
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
  ["wr", "wn", "wb", "wk", "wq", "wb", "wn", "wr"],
];

const firstRow = board[0];
const blackPawnStart = board[1];
const whitePawnStart = board[6];
const lastRow = board[7];

// console.log(blackPawnStart);
// console.log(whitePawnStart);

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

  // checkLegalMove(piece.target.value) {
  //   console.log("test");
  // }

  createPiece(cell, piece, isWhite) {
    // if (piece === 'pawn' && isWhite === false) {
    //   let blackPawn = new Pawn(this.coordinate, false)
    //   console.log(blackPawn)
    //   const newP = document.createElement('i')
    //   newP.className = `${blackPawn.type}`
    //   cell.appendChild(newP)
    // } else if (piece === 'pawn' && isWhite === true) {
    //   let whitePawn = new Pawn(this.coordinate, true)
    //   const newP = document.createElement('i')
    //   newP.className = `${whitePawn.type}`
    //   cell.appendChild(newP)
    // } else if (piece === 'rook' && isWhite === false) {
    //   let whiteRook = new Rook(this.coordinate, false)
    //   const newP = document.createElement('i')
    //   newP.className = `${whiteRook.type}`
    //   cell.appendChild(newP)
    // }

    switch (piece) {
      case "pawn":
        if (isWhite === false) {
          let createdPawn = new Pawn(this.coordinate, false);
          const pawnEl = document.createElement("i");
          pawnEl.className = `${createdPawn.type}`;
          pawnEl.value = 1;
          cell.appendChild(pawnEl);
        } else {
          let createdPawn = new Pawn(this.coordinate, true);
          const pawnEl = document.createElement("i");
          pawnEl.className = `${createdPawn.type}`;
          pawnEl.value = 1;
          pawnEl.draggable = true;
          cell.appendChild(pawnEl);
        }
        break;
      case "rook":
        if (isWhite === false) {
          let createdRook = new Rook(this.coordinate, false);
          const rookEl = document.createElement("i");
          rookEl.className = `${createdRook.type}`;
          rookEl.value = 2;
          cell.appendChild(rookEl);
        } else {
          let createdRook = new Rook(this.coordinate, true);
          const rookEl = document.createElement("i");
          rookEl.className = `${createdRook.type}`;
          rookEl.value = 2;
          cell.appendChild(rookEl);
        }
        break;
      case "knight":
        if (isWhite === false) {
          let createdKnight = new Knight(this.coordinate, false);
          const knightEl = document.createElement("i");
          knightEl.className = `${createdKnight.type}`;
          knightEl.value = 3;
          cell.appendChild(knightEl);
        } else {
          let createdKnight = new Knight(this.coordinate, true);
          const knightEl = document.createElement("i");
          knightEl.className = `${createdKnight.type}`;
          knightEl.value = 3;
          cell.appendChild(knightEl);
        }
        break;
      case "bishop":
        if (isWhite === false) {
          let createdBishop = new Bishop(this.coordinate, false);
          const bishopEl = document.createElement("i");
          bishopEl.className = `${createdBishop.type}`;
          bishopEl.value = 4;
          cell.appendChild(bishopEl);
        } else {
          let createdBishop = new Bishop(this.coordinate, true);
          const bishopEl = document.createElement("i");
          bishopEl.className = `${createdBishop.type}`;
          bishopEl.value = 4;
          cell.appendChild(bishopEl);
        }
        break;
      case "queen":
        if (isWhite === false) {
          let createdQueen = new Queen(this.coordinate, false);
          const queenEl = document.createElement("i");
          queenEl.className = `${createdQueen.type}`;
          queenEl.value = 5;
          cell.appendChild(queenEl);
        } else {
          let createdQueen = new Queen(this.coordinate, true);
          const queenEl = document.createElement("i");
          queenEl.className = `${createdQueen.type}`;
          queenEl.value = 5;
          cell.appendChild(queenEl);
        }
        break;
      case "king":
        if (isWhite === false) {
          let createdKing = new King(this.coordinate, false);
          const kingEl = document.createElement("i");
          kingEl.className = `${createdKing.type}`;
          kingEl.value = 6;
          cell.appendChild(kingEl);
        } else {
          let createdKing = new King(this.coordinate, true);
          const kingEl = document.createElement("i");
          kingEl.className = `${createdKing.type}`;
          kingEl.value = 6;
          cell.appendChild(kingEl);
        }
        break;
    }
  }
}

class Pawn extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.type = isWhite ? `fas fa-chess-pawn white` : `fas fa-chess-pawn`;
  }

  // displayPiece() {
  //   coordinates[this.coordi;nate].innerHTML = this.type;
  // }
}

class Rook extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.type = isWhite ? `fas fa-chess-rook white` : `fas fa-chess-rook`;
  }
}

class Knight extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.type = isWhite ? `fas fa-chess-knight white` : `fas fa-chess-knight`;
  }
}

class Bishop extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.type = isWhite ? `fas fa-chess-bishop white` : `fas fa-chess-bishop`;
  }
}

class Queen extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.type = isWhite ? `fas fa-chess-queen white` : `fas fa-chess-queen`;
  }
}

class King extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.type = isWhite ? `fas fa-chess-king white` : `fas fa-chess-king`;
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
      cell.classList.add(`${row}${column}`);
      cell.setAttribute("data-row", row);
      cell.setAttribute("data-column", column);

      chessboard.appendChild(cell);
      //black piece
      if (board[row][column] === "bp") {
        // let blackRook = new Rook([row][column], false);
        // cell.innerHTML = this.type;

        // let blackPawnElement = blackPawn.createPawn(cell)
        // let blackPawn = new Pawn([row][column], false);
        // console.log(created)
        let bp = new Piece();
        bp.createPiece(cell, "pawn", false);
      }
      if (board[row][column] === "br") {
        // let blackRook = new Pawn([row][column], false);
        // let blackRookElement = blackRook.createPawn(cell)
        // console.log(created)
        let br = new Piece();
        br.createPiece(cell, "rook", false);
      }
      if (board[row][column] === "bn") {
        let bn = new Piece();
        bn.createPiece(cell, "knight", false);
      }
      if (board[row][column] === "bb") {
        let bb = new Piece();
        bb.createPiece(cell, "bishop", false);
      }
      if (board[row][column] === "bk") {
        let bk = new Piece();
        bk.createPiece(cell, "king", false);
      }
      if (board[row][column] === "bq") {
        let bq = new Piece();
        bq.createPiece(cell, "queen", false);
      }

      //white piece
      if (board[row][column] === "wp") {
        // let whitePawn = new Pawn([row][column], true);
        //
        // console.log(cell)
        // let created = whitePawn.createPawn(cell)
        let wp = new Piece();
        wp.createPiece(cell, "pawn", true);
      }
      if (board[row][column] === "wr") {
        let wr = new Piece();
        wr.createPiece(cell, "rook", true);
      }
      if (board[row][column] === "wn") {
        let wn = new Piece();
        wn.createPiece(cell, "knight", true);
      }
      if (board[row][column] === "wb") {
        let wb = new Piece();
        wb.createPiece(cell, "bishop", true);
      }
      if (board[row][column] === "wk") {
        let wk = new Piece();
        wk.createPiece(cell, "king", true);
      }
      if (board[row][column] === "wq") {
        let wq = new Piece();
        wq.createPiece(cell, "queen", true);
      }
    }
  }
}
// const pawn = document.querySelectorAll(".fa-chess-pawn");
// pawn.forEach((pawn, i) => {
//   pawn.addEventListener(handleClick(pawn));
// });
// console.log(pawn);

//UNCOMMENT IF NEED TO RESET
/////////////////////////////////////////////////////////
// const pieceNames = ["pawn", "king", "queen", "rook", "bishop", "knight"];

// function addEventHandlers() {
//   for (let i = 0; i < pieceNames.length; i++) {
//     let pieces = document.querySelectorAll(`.fa-chess-${pieceNames[i]}`);
//     // console.log(pieces);
//     pieces.forEach((piece, i) => {
//       piece.style.cursor = "pointer";
//       piece.addEventListener("click", handleClick);
//     });
//   }
// }
////////////////////////////////////////////////////

const pieceNames = ["pawn", "king", "queen", "rook", "bishop", "knight"];

function addEventHandlers() {
  for (let i = 0; i < pieceNames.length; i++) {
    let pieces = document.querySelectorAll(`.fa-chess-${pieceNames[i]}`);
    // console.log(pieces);
    pieces.forEach((piece, i) => {
      piece.style.cursor = "pointer";
      // piece.addEventListener("click", handleClick);
    });

    let squares = document.querySelectorAll(".cell");
    squares.forEach((square, i) => {
      square.addEventListener("click", handleClick);
    });
  }
}

config();
addEventHandlers();

function handleClick(piece) {
  if (!state) {
    state = true;

    let squares = [...document.querySelectorAll(".cell")].filter(
      (square) => !square.querySelector(`i`)
    );
    squares.forEach((square, i) => {
      square.style.cursor = "pointer";
    });

    targetPiece = piece.target;
    targetDiv = targetPiece.parentNode;
    x = targetPiece.parentNode.dataset.row;
    y = targetPiece.parentNode.dataset.column;

    boardItem = board[x][y];
    legalMove(targetPiece);
  } else {
    let squares = [...document.querySelectorAll(".cell")].filter(
      (square) => !square.querySelector(`.highlight`)
    );
    squares.forEach((square, i) => {
      square.classList.remove("highlight");
    });

    state = false;
    board[x][y] = " ";

    landingSquare = piece.target;
    landingSquare.appendChild(targetPiece);

    let x2 = piece.target.dataset.row;
    let y2 = piece.target.dataset.column;
    board[x2][y2] = boardItem;

    if (whiteTurn === true) {
      whiteTurn = false;
    } else {
      whiteTurn = true;
    }
    console.log(whiteTurn);
  }
}

////// UNCOMMENT IF NEED TO RESET
// //////////////////////////////////////////////////////////
// function handleClick(piece) {
//   let squares = [...document.querySelectorAll(".cell")].filter(
//     (square) => !square.querySelector(`i`)
//   );
//   squares.forEach((square, i) => {
//     square.style.cursor = "pointer";
//     square.addEventListener("click", handleClick, { once: true });
//   });
//   if (!state) {
//     state = true;
//     targetPiece = piece.target;
//     x = targetPiece.parentNode.dataset.row;
//     y = targetPiece.parentNode.dataset.column;

//     boardItem = board[x][y];
//     console.log(boardItem);
//     // let squares = [...document.querySelectorAll(".cell")].filter(
//     //   (square) => !square.querySelector(`i`)
//     // );
//     // squares.forEach((square, i) => {
//     //   square.style.cursor = "pointer";
//     //   // square.addEventListener("click", test);
//     // });
//     legalMove(targetPiece);
//     console.log(x, y);
//     console.log(board);
//   } else {
//     state = false;
//     board[x][y] = " ";
//     let x2 = piece.target.parentNode.dataset.row;
//     let y2 = piece.target.parentNode.dataset.column;
//     console.log(x2, y2);
//     board[x2][y2] = boardItem;

//     console.log(board);
//   }
// }

// function test() {
//   console.log("test");
// }
////////////////////////////////////////////////////////////////////////////////

function legalMove(targetPiece) {
  let row = targetPiece.parentNode.dataset.row;
  let column = targetPiece.parentNode.dataset.column;

  // let possibleMoves = [];
  if (targetPiece.value === 1) {
    console.log(whiteTurn);
    let possibleMoves = [];
    if (whiteTurn === true) {
      if (row === "6") {
        for (i = 1; i < 3; i++) {
          let possibleMove = row - i + column;
          possibleMoves.push(possibleMove);
          let targetSquare = document.querySelector(
            `.${CSS.escape(possibleMove)}`
          );
          targetSquare.classList.add("highlight");
        }
      } else {
        possibleMove = row - 1 + column;
        targetSquareWhite = document.querySelector(
          `.${CSS.escape(possibleMove)}`
        );
        targetSquareWhite.classList.add("highlight");
      }
    } else {
      if (row === "1") {
        for (i = 1; i < 3; i++) {
          possibleMove = Number(row) + Number(i) + column;
          possibleMoves.push(possibleMove);
          targetSquareBlack = document.querySelector(
            `.${CSS.escape(possibleMove)}`
          );
          targetSquareBlack.classList.add("highlight");
        }
      } else {
        possibleMove = row + 1 + column;
        targetSquare = document.querySelector(`.${CSS.escape(possibleMove)}`);
        targetSquare.classList.add("highlight");
      }
    }

    // } else if (targetPiece.value === 1) {
    // let possibleMove = row - 1 + column;
    // let targetSquare = document.querySelector(`.${CSS.escape(possibleMove)}`);
    // targetSquare.classList.add("highlight");
  }
  if (targetPiece.value === 2) {
    let min = row; //piece location in 'row'
    let max = 0; //end of board going up

    let range = min - max;
    // console.log(min);
    for (let i = max + 1; i < range + 1; i++) {
      // console.log(i);
      let possibleMove = row - i + column;
      let targetSquare = document.querySelector(`.${CSS.escape(possibleMove)}`);
      targetSquare.classList.add("highlight");
    }
  }
  if (targetPiece.value === 3) {
    // console.log("horse");
    let moveUpCheck = [];
    let moveDownCheck = [];
    let knightMovement = [];

    //move upwards
    for (i = 1; i < 3; i++) {
      movementUp = row - i;
      possibleMoveUp = row - i + column;
      moveUpCheck.push(movementUp);
      targetSquareUp = document.querySelector(`.${CSS.escape(possibleMoveUp)}`);
      targetSquareUp.classList.add("highlight");
    }
    let movementRight = Number(column) + 1;
    let movementLeft = Number(column) - 1;
    let lastMoveUp = moveUpCheck[1];
    let movementUpRight = lastMoveUp + movementRight.toString();
    let movementUpLeft = lastMoveUp + movementLeft.toString();

    //move downwards
    for (i = 1; i < 3; i++) {
      movementDown = Number(row) + i;
      possibleMoveDown = movementDown + column;
      moveDownCheck.push(movementDown);
      targetSquareDown = document.querySelector(
        `.${CSS.escape(possibleMoveDown)}`
      );
      targetSquareDown.classList.add("highlight");
    }
    let lastMoveDown = moveDownCheck[1];
    movementDownRight = lastMoveDown + movementRight.toString();
    movementDownLeft = lastMoveDown + movementLeft.toString();

    // setting left/right movements
    knightMovement.push(movementUpRight);
    knightMovement.push(movementUpLeft);
    knightMovement.push(movementDownRight);
    knightMovement.push(movementDownLeft);
    knightMovement.forEach((move, i) => {
      targetSquare = document.querySelector(
        `.${CSS.escape(knightMovement[i])}`
      );
      targetSquare.classList.add("highlight");
    });
  }

  if (targetPiece.value === 4) {
    // console.log("bishop");
    let range = 8 - column;
    let moves = [];
    let min = column;
    let max = 8 - min;
    let minRight = min;
    let maxLeft = 8 - range;
    let goLeft = maxLeft;

    //movement up-right
    for (let i = 0; i < max; i++) {
      movementUp = row - i;
      movementRight = Number(minRight++);
      movementUpRight = movementUp + movementRight.toString();
      // console.log(movementUpRight);
      moves.push(movementUpRight);
      // console.log(moves);
    }

    // movement up-left
    for (let i = 0; i < maxLeft + 1; i++) {
      movementUpp = row - i;
      movementLeft = Number(goLeft--);
      movementUpLeft = movementUpp + movementLeft.toString();
      console.log(movementLeft);
      console.log(movementUpLeft);
      moves.push(movementUpLeft);
    }

    moves.forEach((move, i) => {
      targetSquare = document.querySelector(`.${CSS.escape(moves[i])}`);
      targetSquare.classList.add("highlight");
    });
  }
}

function capturePiece(targetPiece) {}
