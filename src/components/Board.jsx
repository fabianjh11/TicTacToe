import React, { Fragment, useState } from 'react'
import { Square } from './Square'

let cont = 0;
let contO = 0;
let contX = 0;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isO, setIsO] = useState(true);
  const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleClick = (index) => {
    if(squares[index] || calcWin())return;
    squares[index] = isO? 'O' : 'X';
    setSquares(squares);
    setIsO(!isO);
    cont++;
  }

  const calcWin = () => {
    for (let i = 0; i < pattern.length; i++) {
      const [cA, cB, cC] = pattern [i];
      if( squares[cA] && squares[cA] === squares[cB] && squares[cA] === squares[cC]) {
        return squares[cA];
      }
    }
    return null;
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsO(true);
    cont = 0;
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={ () => handleClick(i) }/>;
  }

  const winner = calcWin();
  let status;
  if(winner) {
    status = 'Ha ganado ' + winner;
    winner==='O'? contO++ : contX++;
  } else if(cont === 9) {
    status = 'Empate';
  }
  else {
    status = 'Turno de ' + (isO? 'O' : 'X');
  }

  return (
    <Fragment>
      <br />
      <br />
      <div className="wins">
        <h3>Victorias de O: <strong>{ contO }</strong></h3>
        <h3>Victorias de X: <strong>{ contX }</strong></h3>
      </div>
      <br />
      <br />
      <div className="state"><h3>{ status }</h3></div>
      <br />
      <br />
      <div className='board'>
        <div className="boardrow">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="boardrow">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="boardrow">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
      <div className="inf">
      <button className='restart' onClick={ () => handleRestart() }>Reiniciar</button>
      </div>
    </Fragment>
  )
}
