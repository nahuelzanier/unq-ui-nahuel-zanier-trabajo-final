import './ShipSelector.css'

const ShipSelector = ( { setSelectedShip, setSelectedPosition, setGameStart } ) => {

    const handleShipChange = () => {
        setSelectedShip(event.target.value)
    }
    const handlePositionChange = () => {
        setSelectedPosition(event.target.value)
    }
    const handleGameStart = () => {
        setGameStart(true)
    }

    return (
        <div>
            <div className="ShipSelector" onChange={handleShipChange}>
                <h2 className='shipSelect'>Selecciona Barco</h2>
                <div>
                    <input type="radio" key='rad_avion' name='ship' value={3}></input>
                    <label className='label' htmlFor='rad_avion'>PORTAAVIONES</label>            
                </div>
                <div>
                    <input type="radio" key='rad_cruc' name='ship' value={2}></input>
                    <label className='label' htmlFor='rad_cruc'>CRUCERO</label>
                </div>
                <div>
                    <input type="radio" key='rad_sub' name='ship' value={1}></input>
                    <label className='label' htmlFor='rad_sub'>SUBMARINO</label>
                </div>
                <div>
                    <input type="radio" key='rad_lancha' name='ship' value={0}></input>
                    <label className='label' htmlFor='rad_lancha'>LANCHA</label>
                </div>
            </div>
            <div className='ShipPositionSelector' onChange={handlePositionChange}>
                <h2 className='shipSelect'>Selecciona posicion</h2>
                <div>
                    <input type="radio" key='vertical' name='position' value={1}></input>
                    <label className='label' htmlFor='vertical'>VERTICAL</label>
                </div>
                <div>
                    <input type="radio" key='horizontal' name='position' value={0}></input>
                    <label className='label' htmlFor='horizontal'>HORIZONTAL</label>
                </div>
            </div>
            <button className="start_button" onClick={handleGameStart}>START BATTLE</button>
        </div>
    )
}

export default ShipSelector