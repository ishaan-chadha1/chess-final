import React from 'react';
import Square from './Square';
import Piece from './Piece';
import { getPieceAtPosition } from './GameEngine';

function renderSquare(i, [x, y]) {
  const black = (x + y) % 2 === 1;
  const piece = getPieceAtPosition(`${String.fromCharCode(97 + x)}${8 - y}`);

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>
        <Piece piece={piece} position={`${String.fromCharCode(97 + x)}${8 - y}`} />
      </Square>
    </div>
  );
}

function Board({ fen }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, [i % 8, Math.floor(i / 8)]));
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap▼',
      }}
    >
      {squares}
    </div>
  );
}
export default Board;