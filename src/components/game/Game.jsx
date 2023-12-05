import Board from "../board/Board"
import BoardCPU from "../board_cpu/BoardCPU"
import ShipSelector from "./ShipSelector"
import './Game.css'
import { useState } from "react"

const Game = () => {
    const [selectedShip, setSelectedShip] = useState(-1)
    const [selectedPosition, setSelectedPosition] = useState(-1)
    const [gameStart, setGameStart] = useState(false)

    return (
        <div>
            {
                gameStart ?
                (
                    <div className='Game'>
                        <BoardCPU selectedShip={selectedShip} selectedPosition={selectedPosition}/>
                    </div>
                ) :
                (
                    <div className='Game'>
                        <Board selectedShip={selectedShip} selectedPosition={selectedPosition}/>
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