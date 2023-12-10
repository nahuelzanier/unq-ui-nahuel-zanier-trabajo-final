import './Tile.css'
import { E, H, M, ships } from '../../game_logic/helpers'
import Ship from '../tile_content/Ship'
import EmptyTile from '../tile_content/EmptyTile'
import Miss from '../tile_content/Miss'
import Hit from '../tile_content/Hit'

const Tile = ( { 
    playerName,
    setPlayerName,
    oponentName,
    againstPlayer,
    isPlayer, 
    gameStart,
    gameFinishedProp,
    setGameFinished,
    setAnnouncement,
    myTurn, 
    turn, 
    setTurn, 
    killCount, 
    setKillCount,
    x, 
    y, 
    board, 
    setBoard, 
    records,
    setRecords,
    selectedShip, 
    selectedPosition, 
    shipsPlaced, 
    setShipsPlaced } ) => {
    
    const handleClick = () => {
        if (!gameStart){
            placeShip()
        }
        else {
            if (!againstPlayer && !gameFinishedProp){
                if (myTurn != turn){
                    if (isPlayer){
                        cpu_attack()
                        setTurn((turn+1)%2)
                    } else if (board[x][y]!=H && board[x][y]!=M) {
                        attack(x,y)
                        setTurn((turn+1)%2)
                    }
                }
            } else if (!gameFinishedProp && myTurn!=turn && board[x][y]!=H && board[x][y]!=M) {
                attack(x,y)
                setTurn((turn+1)%2)
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

        if (attackHit(x_pos, y_pos)){
            updateKillCount(temp[x_pos][y_pos])
            setAnnouncement(updateAnnouncement(temp[x_pos][y_pos]))
            temp[x_pos][y_pos] = H
            if (gameFinished()){
                setAnnouncement('GANADOR: ' + oponentName)
                updateRecords()
            }
        } else {
            temp[x_pos][y_pos] = M
            setAnnouncement('Fallaste...')
        }
        setBoard([...temp])
    }

    const attack = (x_pos, y_pos) => {
        let temp = [...board]
        if (attackHit(x_pos, y_pos)){
            updateKillCount(temp[x_pos][y_pos])
            setAnnouncement(updateAnnouncement(temp[x_pos][y_pos]))
            temp[x_pos][y_pos] = H
            if (gameFinished()){
                setAnnouncement('GANADOR: ' + oponentName)
                updateRecords()
            }
        } else {
            temp[x_pos][y_pos] = M
            setAnnouncement('Fallaste...')
        }
        setBoard([...temp])
    }

    const attackHit = (x_pos, y_pos) => {
        switch (board[x_pos][y_pos]) {
            case 0:
                return true;
            case 1:
                return true;
            case 2:
                return true;
            case 3:
                return true;
            case E:
                return false;
            case H:
                return false;
            case M:
                return false;
            default:
                return <div>Something went wrong</div>
        }
    }

    const placeShip = () => {
        if (!shipsPlaced.includes(selectedShip)){
            
            if ( selectedPosition==1 && unnocupiedVertical() ){
                let tempShips = [...shipsPlaced]
                tempShips.push(selectedShip)
                let temp = [...board]
                for (let i = 0; i<ships[selectedShip].size; i++){
                    temp[x][y+i] = ships[selectedShip].selector
                }
                setShipsPlaced([...tempShips])
                setBoard([...temp])

            } else if ( selectedPosition==0 && unnocupiedHorizontal() ){
                let tempShips = [...shipsPlaced]
                tempShips.push(selectedShip)
                let temp = [...board]
                for (let i = 0; i<ships[selectedShip].size; i++){
                    temp[x+i][y] = ships[selectedShip].selector
                }
                setShipsPlaced([...tempShips])
                setBoard([...temp])
            }
        }
    }

    const gameFinished = () => {
        let kills = killCount.reduce((total, a) => total + a, 0)
        setGameFinished(kills == 13)
        return kills == 13
    }

    const unnocupiedVertical = () => {
        let ret = y+ships[selectedShip].size <= 10
        for (let i = 0; i<ships[selectedShip].size; i++){
            ret = ret && board[x][y+i]==E
        }
        return ret
    }
    const unnocupiedHorizontal = () => {
        let ret = x+ships[selectedShip].size <= 10
        for (let i = 0; i<ships[selectedShip].size; i++){
            ret = ret && board[x+i][y]==E
        }
        return ret
    }

    const updateKillCount = (shipSelector) => {
        let kill = killCount.slice()
        kill[ships[shipSelector].selector] = kill[ships[shipSelector].selector] + 1
        setKillCount(kill)
    }

    const updateAnnouncement = (index) => {
        if (ships[index].size - killCount[index] == 1){
            return (ships[index].type + ' de ' + playerName + ' hundido!!!')
        } else {
            return (ships[index].type + ' de ' + playerName + ' golpeado!')
        }        
    }

    const updateTile = (tile) => {
        switch (tile) {
            case 0:
                return <Ship />;
            case 1:
                return <Ship />;
            case 2:
                return <Ship />;
            case 3:
                return <Ship />;
            case E:
                return <EmptyTile />;
            case H:
                return <Hit />;
            case M:
                return <Miss />;
            default:
                return <div>Something went wrong</div>
        }
    }

    const updateTileHidden = (tile) => {
        switch (tile) {
            case 0:
                return <EmptyTile />;
            case 1:
                return <EmptyTile />;
            case 2:
                return <EmptyTile />;
            case 3:
                return <EmptyTile />;
            case E:
                return <EmptyTile />;
            case H:
                return <Hit />;
            case M:
                return <Miss />;
            default:
                return <div>Something went wrong</div>
        }
    }

    const updateRecords = () => {
        let recTemp = [...records]
        let currRecord = (recTemp.find((record) => record[0]==oponentName))
        currRecord = currRecord ? [oponentName, currRecord[1]+1] : [oponentName, 1]
        recTemp = recTemp.filter((record) => record[0]!=oponentName)
        recTemp.push(currRecord)
        recTemp = recTemp.sort((r1, r2) => r2[1] - r1[1])
        if (recTemp.length > 16) {
            recTemp.pop()
        }
        setRecords(recTemp)
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