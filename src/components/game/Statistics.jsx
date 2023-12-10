import Record from "./Record"
import './Statistics.css'

const Statistics = ( {records, setShowStatistics} ) => {

    const toggleStatistics = () => {
        setShowStatistics(false)
    }

    return (
        <div className="Statistics">
            <h2 className="titulo">Estadisticas</h2>
            {
                records.map((record, index) => <Record key={index} record={record}/>)
            }
            <button onClick={toggleStatistics} className='buttonVolver'>VOLVER</button>
        </div>
        
    )
}

export default Statistics