import Row from "./Row"
import './Board.css'
import { useState } from 'react'

const Board = ( { 
    playerName,
    againstPlayer,
    isPlayer, 
    gameStart, 
    myTurn, 
    turn, 
    setTurn, 
    killCount,
    setKillCount,
    board, 
    setBoard, 
    selectedShip, 
    selectedPosition, 
    shipsPlaced, 
    setShipsPlaced } ) => {



    return (
        <div>
            <h2 className='Stats'>{playerName}: {killCount[myTurn]}/14 HITS</h2>
            <div className='Board'>
                {
                    board.map((row, index) => <Row key={index}
                                                againstPlayer={againstPlayer}
                                                isPlayer={isPlayer}
                                                gameStart={gameStart}
                                                myTurn={myTurn}
                                                turn={turn}
                                                setTurn={setTurn}
                                                killCount={killCount}
                                                setKillCount={setKillCount}
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