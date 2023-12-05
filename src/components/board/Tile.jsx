import './Tile.css'
import { E, S, ships } from '../../game_logic/helpers'
import Ship from '../tile_content/Ship'
import EmptyTile from '../tile_content/EmptyTile'

const Tile = ( { x, y, board, setBoard, selectedShip, selectedPosition, shipsPlaced, setShipsPlaced } ) => {
    
    const unnocupiedVertical = () => {
        let ret = true
        for (let i = 0; i<ships[selectedShip].size; i++){
            ret = ret && board[x][y+i]==E
        }
        return ret
    }
    const unnocupiedHorizontal = () => {
        let ret = true
        for (let i = 0; i<ships[selectedShip].size; i++){
            ret = ret && board[x+i][y]==E
        }
        return ret
    }

    const placeShip = () => {
        if (!shipsPlaced.includes(selectedShip)){
            
            if ( selectedPosition==1 && unnocupiedVertical() ){
                let tempShips = [...shipsPlaced]
                tempShips.push(selectedShip)
                let temp = [...board]
                for (let i = 0; i<ships[selectedShip].size; i++){
                    temp[x][y+i] = S
                }
                setShipsPlaced([...tempShips])
                setBoard([...temp])
            }


            else if ( selectedPosition==0 && unnocupiedHorizontal() ){
                let tempShips = [...shipsPlaced]
                tempShips.push(selectedShip)
                let temp = [...board]
                for (let i = 0; i<ships[selectedShip].size; i++){
                    temp[x+i][y] = S
                }
                setShipsPlaced([...tempShips])
                setBoard([...temp])
            }
        }
    }

    return (
        <div>
            <div board={board} className="Tile" onClick={placeShip}>
                { board[x][y]===S ? <Ship /> : <EmptyTile /> }
            </div>
            
        </div>
    )
}

export default Tile