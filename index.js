const chessboard = document.querySelector(".chess-board");
const cells = document.querySelectorAll(".cell");

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

class Piece {
  constructor(coordinate, isWhite, type) {
    this.coordinate = coordinate;
    this.white = isWhite;
    this.type = type;
  }

  createPiece(cell, piece, isWhite) {
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
    for (let column = 0; column < rank.length; column++) {
      const piece = rank[column];

      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add(`${row}${column}`);
      cell.setAttribute("id", `${row}`);
      if (row % 2 === column % 2) {
        cell.classList.add("light-cell");
      } else {
        cell.classList.add("dark-cell");
      }
      cell.setAttribute("data-row", row);
      cell.setAttribute("data-column", column);

      chessboard.appendChild(cell);
      //black piece
      if (board[row][column] === "bp") {
        let bp = new Piece();
        bp.createPiece(cell, "pawn", false);
      }
      if (board[row][column] === "br") {
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

const pieceNames = ["pawn", "king", "queen", "rook", "bishop", "knight"];

function addEventHandlers() {
  for (let i = 0; i < pieceNames.length; i++) {
    let pieces = document.querySelectorAll(`.fa-chess-${pieceNames[i]}`);
    pieces.forEach((piece, i) => {
      piece.style.cursor = "pointer";
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

function legalMove(targetPiece) {
  let row = targetPiece.parentNode.dataset.row;
  let column = targetPiece.parentNode.dataset.column;

  if (targetPiece.value === 1) {
    let moves = [];
    let pawnIsWhite = true;
    let squareIDWhiteStart = "6";
    let squares = document.querySelectorAll(
      `#${CSS.escape(squareIDWhiteStart)}`
    );
    let squareChildNode = [];
    squares.forEach((square) => {
      squareChildNode.push(square.firstChild);
    });

    console.log(squareChildNode);
  }
  // if (targetPiece.value === 1) {
  //   let possibleMoves = [];
  //   if (whiteTurn === true) {
  //     if (row === "6") {
  //       for (i = 1; i < 3; i++) {
  //         let possibleMove = row - i + column;
  //         possibleMoves.push(possibleMove);
  //         let targetSquare = document.querySelector(
  //           `.${CSS.escape(possibleMove)}`
  //         );
  //         targetSquare.classList.add("highlight");
  //       }
  //     } else {
  //       possibleMove = row - 1 + column;
  //       targetSquareWhite = document.querySelector(
  //         `.${CSS.escape(possibleMove)}`
  //       );
  //       targetSquareWhite.classList.add("highlight");
  //     }
  //   } else {
  //     if (row === "1") {
  //       for (i = 1; i < 3; i++) {
  //         possibleMove = Number(row) + Number(i) + column;
  //         possibleMoves.push(possibleMove);
  //         targetSquareBlack = document.querySelector(
  //           `.${CSS.escape(possibleMove)}`
  //         );
  //         targetSquareBlack.classList.add("highlight");
  //       }
  //     } else {
  //       possibleMove = row + 1 + column;
  //       targetSquare = document.querySelector(`.${CSS.escape(possibleMove)}`);
  //       targetSquare.classList.add("highlight");
  //     }
  //   }
  // }

  if (targetPiece.value === 2) {
    let moves = [];
    let minUp = row;
    let minDown = row;
    const maxDown = 7;
    const maxRight = 7;
    let minLeft = column;
    let minRight = column;

    //movementUp
    let rangeUp = Number(minUp) + 1;
    for (let i = 1; i < rangeUp; i++) {
      movementUp = row - i;
      possibleMoveUp = movementUp + column;
      if (movementUp >= 0) {
        moves.push(possibleMoveUp);
      }
    }

    //movementRight
    let rangeRight = maxRight - minRight + Number(1);
    for (let i = 1; i < rangeRight; i++) {
      movementRight = Number(column) + Number(i);
      possibleMoveRight = row + movementRight;
      if (movementRight <= 7) {
        moves.push(possibleMoveRight);
      }
    }

    //movementLeft
    let rangeLeft = Number(minLeft) + 1;
    for (let i = 1; i < rangeLeft; i++) {
      movementLeft = Number(column) - i;
      possibleMoveLeft = row + movementLeft;
      if (movementLeft >= 0) {
        moves.push(possibleMoveLeft);
      }
    }

    //movementDown
    let rangeDown = maxDown - minDown + Number(1);
    for (let i = 1; i < rangeDown; i++) {
      movementDown = Number(row) + Number(i);
      possibleMoveDown = movementDown + column;
      if (movementDown <= 7) {
        moves.push(possibleMoveDown);
      }
    }

    moves.forEach((move, i) => {
      targetSquare = document.querySelector(`.${CSS.escape(moves[i])}`);
      targetSquare.classList.add("highlight");
    });
  }
  if (targetPiece.value === 3) {
    // console.log("horse");
    let moveUpCheck = [];
    let moveDownCheck = [];
    let moveRightCheck = [];
    let moveLeftCheck = [];
    let knightMovement = [];

    //move upwards
    for (i = 1; i < 3; i++) {
      movementUp = row - i;
      possibleMoveUp = row - i + column;
      moveUpCheck.push(movementUp);
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
    }
    let lastMoveDown = moveDownCheck[1];
    movementDownRight = lastMoveDown + movementRight.toString();
    movementDownLeft = lastMoveDown + movementLeft.toString();

    //moveSideRight
    for (i = 1; i < 3; i++) {
      movementSideRight = Number(column) + i;
      possibleMoveSideRight = row + movementSideRight;
      moveRightCheck.push(movementSideRight);
    }
    let moveRSideRowUp = row - 1;
    let moveRSideRowDown = Number(row) + 1;
    let lastmoveRight = moveRightCheck[1];
    movementRightUp = moveRSideRowUp.toString() + lastmoveRight;
    movementRightDown = moveRSideRowDown.toString() + lastmoveRight;

    //moveSideLeft
    for (i = 1; i < 3; i++) {
      movementSideLeft = column - i;
      possibleMoveSideLeft = row + movementSideLeft;
      moveLeftCheck.push(movementSideLeft);
    }
    let moveLSideRowUp = row - 1;
    let moveLSideRowDown = Number(row) + 1;
    let lastmoveLeft = moveLeftCheck[1];
    movementLeftUp = moveLSideRowUp.toString() + lastmoveLeft;
    movementLeftDown = moveLSideRowDown.toString() + lastmoveLeft;

    // setting left/right/up/down movements
    knightMovement.push(movementLeftUp);
    knightMovement.push(movementLeftDown);
    knightMovement.push(movementRightUp);
    knightMovement.push(movementRightDown);
    knightMovement.push(movementUpRight);
    knightMovement.push(movementUpLeft);
    knightMovement.push(movementDownRight);
    knightMovement.push(movementDownLeft);

    // adding highlight
    knightMovement.forEach((move, i) => {
      targetSquare = document.querySelector(
        `.${CSS.escape(knightMovement[i])}`
      );
      targetSquare.classList.add("highlight");
    });
  }

  if (targetPiece.value === 4) {
    let moves = [];
    let rangeRight = 7 - column;
    let maxMovementUpRight;
    let rangeLeft = column;
    let maxMovementUpLeft;
    let rangeDown = 7 - row;
    let maxMovementDownRight;
    let maxMovementDownLeft;

    //movement up-right
    if (rangeRight > row) {
      maxMovementUpRight = Number(row) + 1;
      for (let i = 1; i < maxMovementUpRight; i++) {
        movementUpR = row - i;
        moveUpRight = Number(column) + Number(i);
        movementUpRight = movementUpR + moveUpRight.toString();
        if (movementUpR >= 0 && moveUpRight <= 7) {
          moves.push(movementUpRight);
        }
      }
    } else if (rangeRight < row) {
      maxMovementUpRight = Number(rangeRight) + 1;
      for (let i = 1; i < maxMovementUpRight; i++) {
        movementUpR = row - i;
        moveUpRight = Number(column) + Number(i);
        movementUpRight = movementUpR + moveUpRight.toString();
        if (movementUpR >= 0 && moveUpRight <= 7) {
          moves.push(movementUpRight);
        }
      }
    } else {
      maxMovementUpRight = Number(row) + 1;
      for (let i = 1; i < maxMovementUpRight; i++) {
        movementUpR = row - i;
        moveUpRight = Number(column) + Number(i);
        movementUpRight = movementUpR + moveUpRight.toString();
        if (movementUpR >= 0 && moveUpRight <= 7) {
          moves.push(movementUpRight);
        }
      }
    }

    //movement up-left
    if (rangeLeft < row) {
      maxMovementUpLeft = Number(column) + 1;
      for (let i = 1; i < maxMovementUpLeft; i++) {
        movementUpL = row - i;
        moveUpLeft = column - i;
        movementUpLeft = movementUpL + moveUpLeft.toString();
        if (movementUpL >= 0 && moveUpLeft >= 0 && moveUpLeft <= 7) {
          moves.push(movementUpLeft);
        }
      }
    } else if (rangeLeft > row) {
      maxMovementUpLeft = Number(row) + 1;
      for (let i = 1; i < maxMovementUpLeft; i++) {
        movementUpL = row - i;
        moveUpLeft = column - i;
        movementUpLeft = movementUpL + moveUpLeft.toString();
        if (movementUpL >= 0 && moveUpLeft >= 0 && moveUpLeft <= 7) {
          moves.push(movementUpLeft);
        }
      }
    } else {
      maxMovementUpLeft = Number(column) + 1;
      for (let i = 1; i < maxMovementUpLeft; i++) {
        movementUpL = row - i;
        moveUpLeft = column - i;
        movementUpLeft = movementUpL + moveUpLeft.toString();
        if (movementUpL >= 0 && moveUpLeft >= 0 && moveUpLeft <= 7) {
          moves.push(movementUpLeft);
        }
      }
    }

    //movement down-right
    if (rangeDown > rangeRight) {
      maxMovementDownRight = Number(rangeRight) + 1;
      for (let i = 1; i < maxMovementDownRight; i++) {
        movementDownR = Number(row) + Number(i);
        moveDownRight = Number(column) + Number(i);
        movementDownRight = movementDownR + moveDownRight.toString();
        if (movementDownR <= 7 && moveDownRight <= 7) {
          moves.push(movementDownRight);
        }
      }
    } else if (rangeDown < rangeRight) {
      maxMovementDownRight = Number(rangeDown) + 1;
      for (let i = 1; i < maxMovementDownRight; i++) {
        movementDownR = Number(row) + Number(i);
        moveDownRight = Number(column) + Number(i);
        movementDownRight = movementDownR + moveDownRight.toString();
        if (movementDownR <= 7 && moveDownRight <= 7) {
          moves.push(movementDownRight);
        }
      }
    } else {
      maxMovementDownRight = Number(rangeRight) + 1;
      for (let i = 1; i < maxMovementDownRight; i++) {
        movementDownR = Number(row) + Number(i);
        moveDownRight = Number(column) + Number(i);
        movementDownRight = movementDownR + moveDownRight.toString();
        if (movementDownR <= 7 && moveDownRight <= 7) {
          moves.push(movementDownRight);
        }
      }
    }

    //movement down-left
    if (rangeDown > rangeLeft) {
      maxMovementDownLeft = Number(rangeLeft) + 1;
      for (let i = 1; i < maxMovementDownLeft; i++) {
        movementDownL = Number(row) + Number(i);
        moveDownLeft = column - i;
        movementDownLeft = movementDownL + moveDownLeft.toString();
        if (movementDownL <= 7 && moveDownLeft >= 0) {
          moves.push(movementDownLeft);
        }
      }
    } else if (rangeDown < rangeLeft) {
      maxMovementDownLeft = Number(rangeDown) + 1;
      for (let i = 1; i < maxMovementDownLeft; i++) {
        movementDownL = Number(row) + Number(i);
        moveDownLeft = column - i;
        movementDownLeft = movementDownL + moveDownLeft.toString();
        if (movementDownL <= 7 && moveDownLeft >= 0) {
          moves.push(movementDownLeft);
        }
      }
    } else {
      maxMovementDownLeft = Number(rangeLeft) + 1;
      for (let i = 1; i < maxMovementDownLeft; i++) {
        movementDownL = Number(row) + Number(i);
        moveDownLeft = column - i;
        movementDownLeft = movementDownL + moveDownLeft.toString();
        if (movementDownL <= 7 && moveDownLeft >= 0) {
          moves.push(movementDownLeft);
        }
      }
    }

    //highlight all moves
    moves.forEach((move, i) => {
      targetSquare = document.querySelector(`.${CSS.escape(moves[i])}`);
      targetSquare.classList.add("highlight");
    });
  }

  if (targetPiece.value === 5) {
    //STRAIGHTS
    let moves = [];
    let minUp = row;
    let minDown = row;
    const maxDown = 7;
    const maxRight = 7;
    let minLeft = column;
    let minRight = column;

    //movementUp
    let rangeUp = Number(minUp) + 1;
    for (let i = 1; i < rangeUp; i++) {
      movementUp = row - i;
      possibleMoveUp = movementUp + column;
      if (movementUp >= 0) {
        moves.push(possibleMoveUp);
      }
    }

    //movementRight
    let rangeRight = maxRight - minRight + Number(1);
    for (let i = 1; i < rangeRight; i++) {
      movementRight = Number(column) + Number(i);
      possibleMoveRight = row + movementRight;
      if (movementRight <= 7) {
        moves.push(possibleMoveRight);
      }
    }

    //movementLeft
    let rangeLeft = Number(minLeft) + 1;
    for (let i = 1; i < rangeLeft; i++) {
      movementLeft = Number(column) - i;
      possibleMoveLeft = row + movementLeft;
      if (movementLeft >= 0) {
        moves.push(possibleMoveLeft);
      }
    }

    //movementDown
    let rangeDown = maxDown - minDown + Number(1);
    for (let i = 1; i < rangeDown; i++) {
      movementDown = Number(row) + Number(i);
      possibleMoveDown = movementDown + column;
      if (movementDown <= 7) {
        moves.push(possibleMoveDown);
      }
    }

    //DIAGONALS
    let rangeRightD = 7 - column;
    let maxMovementUpRight;
    let rangeLeftD = column;
    let maxMovementUpLeft;
    let rangeDownD = 7 - row;
    let maxMovementDownRight;
    let maxMovementDownLeft;

    //movement up-right
    if (rangeRightD > row) {
      maxMovementUpRight = Number(row) + 1;
      for (let i = 1; i < maxMovementUpRight; i++) {
        movementUpR = row - i;
        moveUpRight = Number(column) + Number(i);
        movementUpRight = movementUpR + moveUpRight.toString();
        if (movementUpR >= 0 && moveUpRight <= 7) {
          moves.push(movementUpRight);
        }
      }
    } else if (rangeRightD < row) {
      maxMovementUpRight = Number(rangeRight);
      for (let i = 1; i < maxMovementUpRight; i++) {
        movementUpR = row - i;
        moveUpRight = Number(column) + Number(i);
        movementUpRight = movementUpR + moveUpRight.toString();
        if (movementUpR >= 0 && moveUpRight <= 7) {
          moves.push(movementUpRight);
        }
      }
    } else {
      maxMovementUpRight = Number(row) + 1;
      for (let i = 1; i < maxMovementUpRight; i++) {
        movementUpR = row - i;
        moveUpRight = Number(column) + Number(i);
        movementUpRight = movementUpR + moveUpRight.toString();
        if (movementUpR >= 0 && moveUpRight <= 7) {
          moves.push(movementUpRight);
        }
      }
    }

    //movement up-left
    if (rangeLeft < row) {
      maxMovementUpLeft = Number(column) + 1;
      for (let i = 1; i < maxMovementUpLeft; i++) {
        movementUpL = row - i;
        moveUpLeft = column - i;
        movementUpLeft = movementUpL + moveUpLeft.toString();
        if (movementUpL >= 0 && moveUpLeft >= 0) {
          moves.push(movementUpLeft);
        }
      }
    } else if (rangeLeft > row) {
      maxMovementUpLeft = Number(row) + 1;
      for (let i = 1; i < maxMovementUpLeft; i++) {
        movementUpL = row - i;
        moveUpLeft = column - i;
        movementUpLeft = movementUpL + moveUpLeft.toString();
        if (movementUpL >= 0 && moveUpLeft >= 0) {
          moves.push(movementUpLeft);
        }
      }
    } else {
      maxMovementUpLeft = Number(column) + 1;
      for (let i = 1; i < maxMovementUpLeft; i++) {
        movementUpL = row - i;
        moveUpLeft = column - i;
        movementUpLeft = movementUpL + moveUpLeft.toString();
        if (movementUpL >= 0 && moveUpLeft >= 0) {
          moves.push(movementUpLeft);
        }
      }
    }

    //movement down-right
    if (rangeDown > rangeRight) {
      maxMovementDownRight = Number(rangeRight);
      for (let i = 1; i < maxMovementDownRight; i++) {
        movementDownR = Number(row) + Number(i);
        moveDownRight = Number(column) + Number(i);
        movementDownRight = movementDownR + moveDownRight.toString();
        if (movementDownR <= 7 && moveDownRight <= 7) {
          moves.push(movementDownRight);
        }
      }
    } else if (rangeDown < rangeRight) {
      maxMovementDownRight = Number(rangeDown);
      for (let i = 1; i < maxMovementDownRight; i++) {
        movementDownR = Number(row) + Number(i);
        moveDownRight = Number(column) + Number(i);
        movementDownRight = movementDownR + moveDownRight.toString();
        if (movementDownR <= 7 && moveDownRight <= 7) {
          moves.push(movementDownRight);
        }
      }
    } else {
      maxMovementDownRight = Number(rangeRight);
      for (let i = 1; i < maxMovementDownRight; i++) {
        movementDownR = Number(row) + Number(i);
        moveDownRight = Number(column) + Number(i);
        movementDownRight = movementDownR + moveDownRight.toString();
        if (movementDownR <= 7 && moveDownRight <= 7) {
          moves.push(movementDownRight);
        }
      }
    }

    //movement down-left
    if (rangeDown > rangeLeft) {
      maxMovementDownLeft = Number(rangeLeft);
      for (let i = 1; i < maxMovementDownLeft; i++) {
        movementDownL = Number(row) + Number(i);
        moveDownLeft = column - i;
        movementDownLeft = movementDownL + moveDownLeft.toString();
        if (movementDownL <= 7 && moveDownLeft >= 0) {
          moves.push(movementDownLeft);
        }
      }
    } else if (rangeDown < rangeLeft) {
      maxMovementDownLeft = Number(rangeDown);
      for (let i = 1; i < maxMovementDownLeft; i++) {
        movementDownL = Number(row) + Number(i);
        moveDownLeft = column - i;
        movementDownLeft = movementDownL + moveDownLeft.toString();
        if (movementDownL <= 7 && moveDownLeft >= 0) {
          moves.push(movementDownLeft);
        }
      }
    } else {
      maxMovementDownLeft = Number(rangeLeft);
      for (let i = 1; i < maxMovementDownLeft; i++) {
        movementDownL = Number(row) + Number(i);
        moveDownLeft = column - i;
        movementDownLeft = movementDownL + moveDownLeft.toString();
        if (movementDownL <= 7 && moveDownLeft >= 0) {
          moves.push(movementDownLeft);
        }
      }
    }

    //highlight all moves
    moves.forEach((move, i) => {
      targetSquare = document.querySelector(`.${CSS.escape(moves[i])}`);
      targetSquare.classList.add("highlight");
    });
  }

  if (targetPiece.value === 6) {
    let moves = [];

    //Up
    moveUp = row - 1;
    movementUp = moveUp + column;
    if (moveUp > 0) {
      moves.push(movementUp);
    }

    //Right
    moveRight = Number(column) + 1;
    movementRight = row + moveRight.toString();
    if (moveRight < 7) {
      moves.push(movementRight);
    }

    //Left
    moveLeft = column - 1;
    movementLeft = row + moveLeft.toString();
    if (moveLeft > 0) {
      moves.push(movementLeft);
    }

    //Down
    moveDown = Number(row) + 1;
    movementDown = moveDown + column;
    if (moveDown < 7) {
      moves.push(movementDown);
    }

    //highlight all moves
    moves.forEach((move, i) => {
      targetSquare = document.querySelector(`.${CSS.escape(moves[i])}`);
      targetSquare.classList.add("highlight");
    });
  }
}
