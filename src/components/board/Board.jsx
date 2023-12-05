import Row from "./Row"
import './Board.css'
import { useState } from 'react'

const Board = ( { board, setBoard, selectedShip, selectedPosition} ) => {
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

export default Board