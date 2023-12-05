import Row from "./Row"
import './Board.css'
import { useState } from 'react'

const Board = ( { againstPlayer, isPlayer, gameStart, myTurn, turn, setTurn, board, setBoard, selectedShip, selectedPosition, shipsPlaced, setShipsPlaced } ) => {

    return (
        <div>
            <div className='Board'>
                {
                    board.map((row, index) => <Row key={index}
                                                againstPlayer={againstPlayer}
                                                isPlayer={isPlayer}
                                                gameStart={gameStart}
                                                myTurn={myTurn}
                                                turn={turn}
                                                setTurn={setTurn}
                                                tiles={row} 
                                                y={index} 
                                                board={board}
                                                setBoard={setBoard}
                                                selectedShip={selectedShip}
                                                selectedPosition={selectedPosition} 
                                                shipsPlaced={shipsPlaced}
                                                setShipsPlaced={setShipsPlaced}/>)
                }
            </div>
        </div>
    )
}

export default Board