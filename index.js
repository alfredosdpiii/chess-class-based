const cells = document.querySelectorAll(".cell");
// .forEach((cell) => cell.addEventListener('click', handleCellClick))
const coordinates = Array.from(cells);
// console.log(coordinates);

coordinates.forEach((coordinate, i) => {
  console.log(coordinate);
});

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
    this.type = isWhite ? "&#9823;" : "&#9817;";
  }
}

class Rook extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9820;" : "&#9814;";
  }
}

class Knight extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9822;" : "&#9816;";
  }
}

class Bishop extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9821;" : "&#9815;";
  }
}

class Queen extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9819;" : "&#9813;";
  }
}

class King extends Piece {
  constructor(coordinate, isWhite) {
    super(coordinate, isWhite);
    this.value = 1;
    this.type = isWhite ? "&#9818;" : "&#9812;";
  }
}
