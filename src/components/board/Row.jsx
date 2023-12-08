import Tile from "./Tile"
import './Row.css'

const Row = ( { 
    playerName,
    setPlayerName,
    againstPlayer, 
    isPlayer, 
    gameStart,
    setAnnouncement,
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
                                                  playerName={playerName}
                                                  setPlayerName={setPlayerName}
                                                  againstPlayer={againstPlayer}
                                                  isPlayer={isPlayer}
                                                  gameStart={gameStart}
                                                  setAnnouncement={setAnnouncement}
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