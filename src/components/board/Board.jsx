import Row from "./Row"
import './Board.css'
import { useState, useEffect } from 'react'

const Board = ( { 
    playerName,
    setPlayerName,
    oponentName,
    againstPlayer,
    isPlayer, 
    gameStart,
    gameFinished,
    setGameFinished,
    setAnnouncement,
    myTurn, 
    turn, 
    setTurn, 
    board, 
    setBoard, 
    records,
    setRecords,
    selectedShip, 
    selectedPosition, 
    shipsPlaced, 
    setShipsPlaced } ) => {

    const [killCount, setKillCount] = useState([0,0,0,0])
    const [nameChange, setNameChange] = useState(false)

    const handleNameChangeToggle = () => {
        setNameChange(!nameChange)
    }

    const handleNameChange = () => {
        setPlayerName(event.target.value)       
    }

    useEffect(() => {
        setKillCount([0,0,0,0])
    }, [gameStart])

    return (
        <div>
            <div className="PlayerProfile">
                {nameChange
                ? <input className="nameInput" value={playerName} onChange={handleNameChange}></input>
                : <h2 className='PlayerName'>{playerName}</h2>
                }
                <button className='ProfButton' onClick={handleNameChangeToggle}>...</button>
            </div>
            <h2 className="Stats">Lancha({2-killCount[0]}) Sub({3-killCount[1]}) Cruecero({4-killCount[2]}) Portaaviones({5-killCount[3]})</h2>
            <div className='Board'>
                {
                    board.map((row, index) => <Row key={index}
                                                playerName={playerName}
                                                setPlayerName={setPlayerName}
                                                oponentName={oponentName}
                                                againstPlayer={againstPlayer}
                                                isPlayer={isPlayer}
                                                gameStart={gameStart}
                                                gameFinished={gameFinished}
                                                setGameFinished={setGameFinished}
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
                                                records={records}
                                                setRecords={setRecords}
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