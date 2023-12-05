import './Tile.css'
import { E, S, H, M, ships } from '../../game_logic/helpers'
import Ship from '../tile_content/Ship'
import EmptyTile from '../tile_content/EmptyTile'
import Miss from '../tile_content/Miss'
import Hit from '../tile_content/Hit'

const Tile = ( { againstPlayer, isPlayer, gameStart, myTurn, turn, setTurn, x, y, board, setBoard, selectedShip, selectedPosition, shipsPlaced, setShipsPlaced } ) => {
    
    const handleClick = () => {
        console.log(turn)
        console.log(myTurn)
        if (!gameStart){
            placeShip()
        }
        else {
            if (!againstPlayer){
                if (myTurn != turn){
                    if (isPlayer){
                        cpu_attack()
                        setTurn((turn+1)%2)
                    } else if (board[x][y]!=H && board[x][y]!=M ) {
                        attack(x,y)
                        setTurn((turn+1)%2)
                    }
                }
            }
        }
    }

    const cpu_attack = () => {
        let x_pos = Math.floor(Math.random()*10)
        let y_pos = Math.floor(Math.random()*10)

        let temp = [...board]
        let i = 0
        while ((temp[x_pos][y_pos]==H || temp[x_pos][y_pos]==M) && i<=100){
            x_pos = Math.floor(Math.random()*10)
            y_pos = Math.floor(Math.random()*10)
            i++
        }
        temp[x_pos][y_pos] = temp[x_pos][y_pos]==S ? H : M
        setBoard([...temp])
    }

    const attack = (x_pos, y_pos) => {
        let temp = [...board]
        temp[x_pos][y_pos] = temp[x_pos][y_pos]==S ? H : M
        setBoard([...temp])
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

            } else if ( selectedPosition==0 && unnocupiedHorizontal() ){
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

    const updateTile = (tile) => {
        switch (tile) {
            case S:
                return <Ship />;
                break;
            case E:
                return <EmptyTile />;
                break;
            case H:
                return <Hit />;
                break;
            case M:
                return <Miss />;
                break;
            default:
                return <div>Something when wrong</div>
        }
    }

    const updateTileHidden = (tile) => {
        switch (tile) {
            case S:
                return <EmptyTile />;
                break;
            case E:
                return <EmptyTile />;
                break;
            case H:
                return <Hit />;
                break;
            case M:
                return <Miss />;
                break;
            default:
                return <div>Something when wrong</div>
        }
    }

    return (
        <div>
            <div board={board} className="Tile" onClick={handleClick}>
                { 
                    isPlayer && !againstPlayer ?
                    updateTile(board[x][y]) : updateTileHidden(board[x][y])
                }
            </div>
        </div>
    )
}

export default Tile