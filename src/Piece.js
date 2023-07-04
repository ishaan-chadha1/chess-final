import React from 'react';
import { useDrag } from 'react-dnd';
import { canMovePiece, movePiece } from './GameEngine';

 function Piece({ piece, position }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'piece', position },
    canDrag: canMovePiece,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        movePiece(item.position, dropResult.position);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      {getPieceUnicode(piece)}
    </div>
  );
}

function getPieceUnicode(piece) {
  switch (piece) {
    case 'p':
      return '♟️';
    case 'r':
      return '♜';
    case 'n':
      return '♞';
    case 'b':
      return '♝';
    case 'q':
      return '♛';
    case 'k':
      return '♚';
    case 'P':
      return '♙';
    case 'R':
      return '♖';
    case 'N':
      return '♘';
    case 'B':
      return '♗';
    case 'Q':
      return '♕';
    case 'K':
      return '♔';
    default:
      return '';
  }
}


export default Piece;