import Tile from "./Tile"
import './Row.css'

const Row = ( { 
    againstPlayer, 
    isPlayer, 
    gameStart, 
    myTurn, 
    turn, 
    setTurn, 
    killCount, 
    setKillCount,
    tiles, 
    y, 
    board, 
    setBoard, 
    selectedShip, 
    selectedPosition, 
    shipsPlaced, 
    setShipsPlaced } ) => {    
    return (
        <div className='Row'>
            {
                tiles.map( (tile, index) => <Tile key={index}
                                                  againstPlayer={againstPlayer}
                                                  isPlayer={isPlayer}
                                                  gameStart={gameStart}
                                                  myTurn={myTurn}
                                                  turn={turn}
                                                  setTurn={setTurn}
                                                  killCount={killCount}
                                                  setKillCount={setKillCount}
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