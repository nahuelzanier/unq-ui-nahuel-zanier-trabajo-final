import Tile from "./Tile"
import './Row.css'

const Row = ( { 
    playerName,
    setPlayerName,
    oponentName,
    againstPlayer, 
    isPlayer, 
    gameStart,
    gameFinished,
    setGameFinished,
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
    records,
    setRecords,
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
                                                  oponentName={oponentName}
                                                  againstPlayer={againstPlayer}
                                                  isPlayer={isPlayer}
                                                  gameStart={gameStart}
                                                  gameFinishedProp={gameFinished}
                                                  setGameFinished={setGameFinished}
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
                                                  records={records}
                                                  setRecords={setRecords}
                                                  selectedShip={selectedShip}
                                                  selectedPosition={selectedPosition}
                                                  shipsPlaced={shipsPlaced}
                                                  setShipsPlaced={setShipsPlaced}/>)
            }
        </div>
    )
}

export default Row