import { BOARD, cpu_board } from "../../game_logic/helpers"
import Row from "../board/Row"
import './BoardCPU.css'
import { useState } from 'react'

const BoardCPU = ( {selectedShip, selectedPosition} ) => {
    const [board, setBoard] = useState(cpu_board())
    const [shipsPlaced, setShipsPlaced] = useState([])

    return (
        <div>
            <div className='Board'>
                {
                    board.map((row, index) => <Row key={index} 
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

export default BoardCPU