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
    const [gameStart, setGameStart] = useState(false)

    return (
        <div>
            {
                gameStart ?
                (
                    <div className='Game'>
                        <Board board={cpuBoard} setBoard={setBoard} selectedShip={selectedShip} selectedPosition={selectedPosition}/>
                    </div>
                ) :
                (
                    <div className='Game'>
                        <Board board={board} setBoard={setBoard} selectedShip={selectedShip} selectedPosition={selectedPosition}/>
                        <ShipSelector setSelectedShip={setSelectedShip}
                                      setSelectedPosition={setSelectedPosition}
                                      setGameStart={setGameStart}/>
                    </div>  
                )
            }
        </div>
    )
}

export default Game