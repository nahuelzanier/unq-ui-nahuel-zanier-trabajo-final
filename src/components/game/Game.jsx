import Board from "../board/Board"
import { cpu_board, E } from "../../game_logic/helpers"
import ShipSelector from "./ShipSelector"
import './Game.css'
import { useState } from "react"

const Game = () => {

    const [board, setBoard] = useState([
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E],
                                            [E,E,E,E,E,E,E,E,E,E]
                                        ])
    const [cpuBoard, setCpuBoard] = useState(cpu_board())
    const [ramdomBoard, setRandomBoard] = useState(cpu_board())
    const [againstPlayer, setAgainsPlayer] = useState(false)
    const [selectedShip, setSelectedShip] = useState(-1)
    const [selectedPosition, setSelectedPosition] = useState(-1)
    const [shipsPlaced, setShipsPlaced] = useState([])
    const [gameStart, setGameStart] = useState(false)
    const [turn, setTurn] = useState(0)
    const [player01Name, setPlayer01Name] = useState('Player 01')
    const [player02Name, setPlayer02Name] = useState('Player 02')
    const [cpuName, setCpuName] = useState('CPU')
    const [announcement, setAnnouncement] = useState('Posiciona tus barcos')

    const handleReiniciarJuego = () => {
        setSelectedShip(-1)
        setSelectedPosition(-1)
        setTurn(0)
        setShipsPlaced([])
        setAgainsPlayer(false)
        setAnnouncement('Posiciona tus barcos')
        setBoard([
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E],
            [E,E,E,E,E,E,E,E,E,E]
        ])
        setCpuBoard(cpu_board())
        setRandomBoard(cpu_board())
        setGameStart(false)
    }

    const handleTwoPlayerGame = () => {
        setAgainsPlayer(true)
        let turnTemp = Math.floor(Math.random()*2)
        setAnnouncement('Empieza ' + ((turnTemp%2)==0 ? player01Name : player02Name))
        setTurn(turnTemp)
        setGameStart(true)
    }

    return (
        <div>
            <h1 className="Title">BATTLESHIP</h1>
            { gameStart 
            ? <button className="buttonGameMode" onClick={handleReiniciarJuego}>REINICIAR JUEGO</button> 
            : <button className="buttonGameMode" onClick={handleTwoPlayerGame}>VERSUS PLAYER</button>
            }
            <h2 className="Announcement">{announcement}</h2>
            <div>
                {
                gameStart ?
                (
                    againstPlayer ?
                    <div className='Game'>
                        <Board playerName={player01Name}
                                setPlayerName={setPlayer01Name}
                                againstPlayer={againstPlayer}
                                isPlayer={false}
                                gameStart={gameStart}
                                setAnnouncement={setAnnouncement}
                                myTurn={0}
                                turn={turn}
                                setTurn={setTurn}
                                board={ramdomBoard}
                                setBoard={setRandomBoard}
                                selectedShip={selectedShip}
                                selectedPosition={selectedPosition}
                                shipsPlaced={shipsPlaced}
                                setShipsPlaced={setShipsPlaced}/>
                        <Board playerName={player02Name}
                                setPlayerName={setPlayer02Name}
                                againstPlayer={againstPlayer}
                                isPlayer={false}
                                gameStart={gameStart}
                                setAnnouncement={setAnnouncement}
                                myTurn={1}
                                turn={turn}
                                setTurn={setTurn}
                                board={cpuBoard}
                                setBoard={setCpuBoard}
                                selectedShip={selectedShip}
                                selectedPosition={selectedPosition}
                                shipsPlaced={shipsPlaced}
                                setShipsPlaced={setShipsPlaced}/>
                    </div>
                    :
                    <div className='Game'>
                        <Board playerName={player01Name}
                                setPlayerName={setPlayer01Name}
                                againstPlayer={againstPlayer}
                                isPlayer={true}
                                gameStart={gameStart}
                                setAnnouncement={setAnnouncement}
                                myTurn={0}
                                turn={turn}
                                setTurn={setTurn}
                                board={board}
                                setBoard={setBoard}
                                selectedShip={selectedShip}
                                selectedPosition={selectedPosition}
                                shipsPlaced={shipsPlaced}
                                setShipsPlaced={setShipsPlaced}/>
                        <Board playerName={cpuName}
                                setPlayerName={setCpuName}
                                againstPlayer={againstPlayer}
                                isPlayer={false}
                                gameStart={gameStart}
                                setAnnouncement={setAnnouncement}
                                myTurn={1}
                                turn={turn}
                                setTurn={setTurn}
                                board={cpuBoard}
                                setBoard={setCpuBoard}
                                selectedShip={selectedShip}
                                selectedPosition={selectedPosition}
                                shipsPlaced={shipsPlaced}
                                setShipsPlaced={setShipsPlaced}/>
                    </div>
                ) :
                (
                    <div className='Game'>
                        <Board playerName={player01Name}
                                setPlayerName={setPlayer01Name}
                                againstPlayer={againstPlayer}
                                isPlayer={true}
                                gameStart={gameStart}
                                setAnnouncement={setAnnouncement}
                                myTurn={0}
                                turn={turn}
                                setTurn={setTurn}
                                board={board}
                                setBoard={setBoard}
                                selectedShip={selectedShip}
                                selectedPosition={selectedPosition}
                                shipsPlaced={shipsPlaced}
                                setShipsPlaced={setShipsPlaced}/>
                        <ShipSelector setSelectedShip={setSelectedShip}
                                    shipsPlaced={shipsPlaced}
                                    setSelectedPosition={setSelectedPosition}
                                    setAnnouncement={setAnnouncement}
                                    setGameStart={setGameStart}/>
                    </div>
                  
                )
            }
            </div>
        </div>
    )
}

export default Game