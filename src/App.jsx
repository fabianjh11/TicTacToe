import React, { Fragment, useState } from 'react'
import { Board } from './components/Board'

export function App() {
  return (
    <Fragment>
      <div className="title"><h1>Tic-Tac-Toe</h1></div>
      <Board />
    </Fragment>
  )
}

