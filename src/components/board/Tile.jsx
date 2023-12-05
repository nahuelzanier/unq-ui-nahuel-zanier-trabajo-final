import './Tile.css'
import { E, S, ships } from '../../game_logic/helpers'
import { useState, useEffect } from 'react'
import Ship from '../tile_content/Ship'
import EmptyTile from '../tile_content/EmptyTile'

const Tile = ( { x, y, board, setBoard, selectedShip, selectedPosition } ) => {
    const [ship, setShip] = useState('')
    
    const unnocupiedVertical = () => {
        let ret = true
        for (let i = 0; i<selectedShip; i++){
            ret = ret && board[y+i][x]===E
        }
    }

    const placeShip = (y_pos, x_pos) => {
        let temp = [...board]
        //if (selectedPosition===1 && y+selectedShip<10 && unnocupiedVertical()){
            for (let i = 0; i<ships[selectedShip]; i++){
                temp[y_pos+i][x_pos] = S
            }
       // }
        setBoard(temp)
    }

    const placeTile = () => {
        let temp = [...board]
        temp[y][x] = S
        setShip(S)
        setBoard(temp)
    }

    const hoverShip = () => {
        if (board[y][x] === E)
            setShip(S)
    }

    const leaveHoverShip = () => {
        if (board[y][x] === E)
            setShip(E)
    }

    return (
        <div>
            <div className="Tile" onClick={placeTile} onMouseEnter={hoverShip} onMouseLeave={leaveHoverShip}>
                { ship===S ? <Ship /> : <EmptyTile /> }
            </div>
        </div>
    )
}

export default Tile