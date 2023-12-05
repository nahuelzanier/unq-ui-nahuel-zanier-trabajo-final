import Tile from "./Tile"
import './Row.css'

const Row = ( { tiles, y, board, setBoard, selectedShip, selectedPosition, shipsPlaced, setShipsPlaced } ) => {    
    return (
        <div className='Row'>
            {
                tiles.map( (tile, index) => <Tile key={index}
                                                  y={y}
                                                  x={index}
                                                  board={board}
                                                  setBoard={setBoard}
                                                  selectedShip={selectedShip}
                                                  selectedPosition={selectedPosition}
                                                  shipsPlaced={shipsPlaced}
                                                  setShipsPlaced={setShipsPlaced}/>)
            }
        </div>
    )
}

export default Row