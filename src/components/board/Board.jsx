import Row from "./Row"
import './Board.css'
import { useState } from 'react'

const Board = ( { 
    playerName,
    againstPlayer,
    isPlayer, 
    gameStart,
    setAnnouncement,
    myTurn, 
    turn, 
    setTurn, 
    board, 
    setBoard, 
    selectedShip, 
    selectedPosition, 
    shipsPlaced, 
    setShipsPlaced } ) => {

    const [killCount, setKillCount] = useState([0,0,0,0])

    return (
        <div>
            <h2 className='PlayerName'>{playerName}</h2>
            <h2 className="Stats">Lancha({2-killCount[0]}) Sub({3-killCount[1]}) Cruecero({4-killCount[2]}) Portaaviones({5-killCount[3]})</h2>
            <div className='Board'>
                {
                    board.map((row, index) => <Row key={index}
                                                againstPlayer={againstPlayer}
                                                isPlayer={isPlayer}
                                                gameStart={gameStart}
                                                setAnnouncement={setAnnouncement}
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