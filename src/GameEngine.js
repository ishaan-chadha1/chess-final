import Chess from 'chess.js';

let game = new Chess();

function observe(o) {
  setInterval(() => o(game.fen()), 500);
}

function canMovePiece(sourceSquare, targetSquare) {
  const move = { from: sourceSquare, to: targetSquare };
  const tempMove = game.move(move);

  // If the move is illegal, undo it and return false
  if (tempMove === null) {
    return false;
  }

  game.undo();
  return true;
}

function movePiece(sourceSquare, targetSquare) {
  const move = { from: sourceSquare, to: targetSquare };
  game.move(move);
}

function getPieceAtPosition(square) {
  const piece = game.get(square);
  return piece ? piece.type + piece.color : '';
}

function isGameOver() {
  return game.game_over();
}

function getTurn() {
  return game.turn();
}

export {
  observe,
  canMovePiece,
  movePiece,
  getPieceAtPosition,
  isGameOver,
  getTurn
};
