import Tile from "./Tile"
import './Row.css'

const Row = ( { tiles, x, board, setBoard, selectedShip, selectedPosition } ) => {    
    return (
        <div className='Row'>
            {
                tiles.map( (tile, index) => <Tile key={index}
                                                  x={x}
                                                  y={index}
                                                  board={board}
                                                  setBoard={setBoard}
                                                  selectedShip={selectedShip}
                                                  selectedPosition={selectedPosition}/>)
            }
        </div>
    )
}

export default Row