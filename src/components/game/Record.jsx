import './Record.css'

const Record = ( { record } ) => {

    return (
        <div className='record'>
            <div>{record[0]}</div>
            <div className='wins'>WINS {record[1]}</div>
        </div>
    )
}

export default Record