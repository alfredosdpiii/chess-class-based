const chessboard = document.querySelector('.chess-board')
const cells = document.querySelectorAll('.cell')
// .forEach((cell) => cell.addEventListener('click', handleCellClick))

let board = [
  ['br', 'bn', 'bb', 'bk', 'bq', 'bb', 'bn', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wn', 'wb', 'wk', 'wq', 'wb', 'wn', 'wr'],
]

// const coordinates = Array.from(cells);
// console.log(coordinates);

// coordinates.forEach((coordinate, i) => {
//   // console.log(coordinate);
// });

class Piece {
  constructor(coordinate, isWhite, type) {
    this.coordinate = coordinate
    this.white = isWhite
    this.type = type
  }
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
      case 'pawn':
        if (isWhite === false) {
          let createdPawn = new Pawn(this.coordniate, false)
          const pawnEl = document.createElement('i')
          pawnEl.className = `${createdPawn.type}`
          cell.appendChild(pawnEl)
        } else {
          let createdPawn = new Pawn(this.coordniate, true)
          const pawnEl = document.createElement('i')
          pawnEl.className = `${createdPawn.type}`
          cell.appendChild(pawnEl)
        }
        break
      case 'rook':
        if (isWhite === false) {
          let createdRook = new Rook(this.coordniate, false)
          const rookEl = document.createElement('i')
          rookEl.className = `${createdRook.type}`
          cell.appendChild(rookEl)
        } else {
          let createdRook = new Rook(this.coordniate, true)
          const rookEl = document.createElement('i')
          rookEl.className = `${createdRook.type}`
          cell.appendChild(rookEl)
        }
        break
      case 'knight':
        if (isWhite === false) {
          let createdKnight = new Knight(this.coordniate, false)
          const knightEl = document.createElement('i')
          knightEl.className = `${createdKnight.type}`
          cell.appendChild(knightEl)
        } else {
          let createdKnight = new Knight(this.coordniate, true)
          const knightEl = document.createElement('i')
          knightEl.className = `${createdKnight.type}`
          cell.appendChild(knightEl)
        }
        break
      case 'bishop':
        if (isWhite === false) {
          let createdBishop = new Bishop(this.coordniate, false)
          const bishopEl = document.createElement('i')
          bishopEl.className = `${createdBishop.type}`
          cell.appendChild(bishopEl)
        } else {
          let createdBishop = new Bishop(this.coordniate, true)
          const bishopEl = document.createElement('i')
          bishopEl.className = `${createdBishop.type}`
          cell.appendChild(bishopEl)
        }
        break
      case 'queen':
        if (isWhite === false) {
          let createdQueen = new Queen(this.coordniate, false)
          const queenEl = document.createElement('i')
          queenEl.className = `${createdQueen.type}`
          cell.appendChild(queenEl)
        } else {
          let createdQueen = new Queen(this.coordniate, true)
          const queenEl = document.createElement('i')
          queenEl.className = `${createdQueen.type}`
          cell.appendChild(queenEl)
        }
        break
      case 'king':
        if (isWhite === false) {
          let createdKing = new King(this.coordniate, false)
          const kingEl = document.createElement('i')
          kingEl.className = `${createdKing.type}`
          cell.appendChild(kingEl)
        } else {
          let createdKing = new King(this.coordniate, true)
          const kingEl = document.createElement('i')
          kingEl.className = `${createdKing.type}`
          cell.appendChild(kingEl)
        }
        break
    }
  }
}

class Pawn extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite)
    this.value = 1
    this.type = isWhite ? `fas fa-chess-pawn white` : `fas fa-chess-pawn`
  }

  // displayPiece() {
  //   coordinates[this.coordi;nate].innerHTML = this.type;
  // }
}

class Rook extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite)
    this.value = 1
    this.type = isWhite ? `fas fa-chess-rook white` : `fas fa-chess-rook`
  }
}

class Knight extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite)
    this.value = 1
    this.type = isWhite ? `fas fa-chess-knight white` : `fas fa-chess-knight`
  }
}

class Bishop extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite)
    this.value = 1
    this.type = isWhite ? `fas fa-chess-bishop white` : `fas fa-chess-bishop`
  }
}

class Queen extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite)
    this.value = 1
    this.type = isWhite ? `fas fa-chess-queen white` : `fas fa-chess-queen`
  }
}

class King extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite)
    this.value = 1
    this.type = isWhite ? `fas fa-chess-king white` : `fas fa-chess-king`
  }
}

function config() {
  let squares = 0
  for (let row = 0; row < board.length; row++) {
    const rank = board[row]
    // console.log(rank);
    for (let column = 0; column < rank.length; column++) {
      const piece = rank[column]

      const cell = document.createElement('div')
      cell.classList.add('cell')
      if (row % 2 === column % 2) {
        cell.classList.add('light-cell')
      } else {
        cell.classList.add('dark-cell')
      }
      cell.setAttribute('data-rank', row)
      cell.setAttribute('data-file', column)

      chessboard.appendChild(cell)
      //black piece
      if (board[row][column] === 'bp') {
        // let blackRook = new Rook([row][column], false);
        // cell.innerHTML = this.type;

        // let blackPawnElement = blackPawn.createPawn(cell)
        // let blackPawn = new Pawn([row][column], false);
        // console.log(created)
        let bp = new Piece()
        bp.createPiece(cell, 'pawn', false)
        console.log(bp.createPiece())
      }
      if (board[row][column] === 'br') {
        // let blackRook = new Pawn([row][column], false);
        // let blackRookElement = blackRook.createPawn(cell)
        // console.log(created)
        let br = new Piece()
        br.createPiece(cell, 'rook', false)
      }
      if (board[row][column] === 'bn') {
        let bn = new Piece()
        bn.createPiece(cell, 'knight', false)
      }
      if (board[row][column] === 'bb') {
        let bb = new Piece()
        bb.createPiece(cell, 'bishop', false)
      }
      if (board[row][column] === 'bk') {
        let bk = new Piece()
        bk.createPiece(cell, 'king', false)
      }
      if (board[row][column] === 'bq') {
        let bq = new Piece()
        bq.createPiece(cell, 'queen', false)
      }

      //white piece
      if (board[row][column] === 'wp') {
        // let whitePawn = new Pawn([row][column], true);
        //
        // console.log(cell)
        // let created = whitePawn.createPawn(cell)
        let wp = new Piece()
        wp.createPiece(cell, 'pawn', true)
      }
      if (board[row][column] === 'wr') {
        let wr = new Piece()
        wr.createPiece(cell, 'rook', true)
      }
      if (board[row][column] === 'wn') {
        let wn = new Piece()
        wn.createPiece(cell, 'knight', true)
      }
      if (board[row][column] === 'wb') {
        let wb = new Piece()
        wb.createPiece(cell, 'bishop', true)
      }
      if (board[row][column] === 'wk') {
        let wk = new Piece()
        wk.createPiece(cell, 'king', true)
      }
      if (board[row][column] === 'wq') {
        let wq = new Piece()
        wq.createPiece(cell, 'queen', true)
      }
    }
  }
}

config()
