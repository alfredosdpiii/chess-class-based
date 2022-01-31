const cells = document.querySelectorAll('.cell')
// .forEach((cell) => cell.addEventListener('click', handleCellClick))
const coordinates = Array.from(cells)
console.log(coordinates)

class Piece {
  constructor(coordinate, isWhite, type) {
    this.coordinate = coordinate
    this.white = isWhite
    this.type = type
  }
}

class Pawn extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite)
    this.value = 1
    this.type = isWhite ? '&#9823;' : '&#9817;'
  }
}
