import Board from "../board/Board"
import { BOARD, cpu_board } from "../../game_logic/helpers"
import ShipSelector from "./ShipSelector"
import './Game.css'
import { useEffect, useState } from "react"

const Game = () => {
    const [board, setBoard] = useState(BOARD)
    const [cpuBoard, setCpuBoard] = useState(cpu_board())
    const [selectedShip, setSelectedShip] = useState(-1)
    const [selectedPosition, setSelectedPosition] = useState(-1)
    const [shipsPlaced, setShipsPlaced] = useState([])
    const [gameStart, setGameStart] = useState(false)
    const [turn, setTurn] = useState(0)
    const [killCount, setKillCount] = useState([0,0])

    return (
        <div>
            <h1 className="Title">BATTLESHIP</h1>
            <div className='Game'>
                <Board againstPlayer={false}
                        isPlayer={true}
                        gameStart={gameStart}
                        myTurn={0}
                        turn={turn}
                        setTurn={setTurn}
                        killCount={killCount}
                        setKillCount={setKillCount}
                        board={board} setBoard={setBoard}
                        selectedShip={selectedShip}
                        selectedPosition={selectedPosition}
                        shipsPlaced={shipsPlaced}
                        setShipsPlaced={setShipsPlaced}/>
                {
                gameStart ?
                (
                    <Board againstPlayer={false}
                            isPlayer={false}
                            gameStart={gameStart}
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