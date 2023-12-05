import { BOARD } from "../../game_logic/helpers"
import Row from "./Row"
import './Board.css'
import { useState, useEffect } from 'react'

const Board = ( {selectedShip, selectedPosition} ) => {
    const [board, setBoard] = useState([])

    useEffect(() => {
        setBoard(BOARD)
    }, [BOARD])

    return (
        <div className='Board'>
            {
                BOARD.map((row, index) => <Row key={index} 
                                               tiles={row} 
                                               x={index} 
                                               board={board}
                                               setBoard={setBoard}
                                               selectedShip={selectedShip}
                                               selectedPosition={selectedPosition}/>)
            }
            <div>{board}</div>
        </div>
    )
}

export default Board