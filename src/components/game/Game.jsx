import Board from "../board/Board"
import { BOARD, cpu_board } from "../../game_logic/helpers"
import ShipSelector from "./ShipSelector"
import './Game.css'
import { useState } from "react"

const Game = () => {

    const [board, setBoard] = useState(BOARD)
    const [cpuBoard, setCpuBoard] = useState(cpu_board())
    const [selectedShip, setSelectedShip] = useState(-1)
    const [selectedPosition, setSelectedPosition] = useState(-1)
    const [shipsPlaced, setShipsPlaced] = useState([])
    const [gameStart, setGameStart] = useState(false)
    const [turn, setTurn] = useState(0)
    const [player01Name, setPlayer01Name] = useState('Player 01')
    const [announcement, setAnnouncement] = useState('START THE MATCH')

    return (
        <div>
            <h1 className="Title">BATTLESHIP</h1>
            <h2 className="Announcement">{announcement}</h2>
            <div className='Game'>
                <Board playerName={player01Name}
                        againstPlayer={false}
                        isPlayer={true}
                        gameStart={gameStart}
                        setAnnouncement={setAnnouncement}
                        myTurn={0}
                        turn={turn}
                        setTurn={setTurn}
                        board={board} setBoard={setBoard}
                        selectedShip={selectedShip}
                        selectedPosition={selectedPosition}
                        shipsPlaced={shipsPlaced}
                        setShipsPlaced={setShipsPlaced}/>
                {
                gameStart ?
                (
                    <Board playerName={'CPU'}
                            againstPlayer={false}
                            isPlayer={false}
                            gameStart={gameStart}
                            setAnnouncement={setAnnouncement}
                            myTurn={1}
                            turn={turn}
                            setTurn={setTurn}
                            killCount={killCount}
                            setKillCount={setKillCount}
                            board={cpuBoard}
                            setBoard={setCpuBoard}
                            selectedShip={selectedShip}
                            selectedPosition={selectedPosition}
                            shipsPlaced={shipsPlaced}
                            setShipsPlaced={setShipsPlaced}/>
                ) :
                (
                    <ShipSelector setSelectedShip={setSelectedShip}
                                  setSelectedPosition={setSelectedPosition}
                                  setGameStart={setGameStart}/>
                  
                )
            }
            </div>
        </div>
    )
}

export default Game