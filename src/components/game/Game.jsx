import Board from "../board/Board"
import ShipSelector from "./ShipSelector"
import './Game.css'
import { useState } from "react"

const Game = () => {
    const [selectedShip, setSelectedShip] = useState(-1)
    const [selectedPosition, setSelectedPosition] = useState(-1)

    return (
        <div className='Game'>
            <Board selectedShip={selectedShip} selectedPosition={selectedPosition}/>
            <ShipSelector setSelectedShip={setSelectedShip} setSelectedPosition={setSelectedPosition}/>
        </div>
    )
}

export default Game