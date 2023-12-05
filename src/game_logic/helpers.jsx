//SHIPS
const LANCHA = {
    type: 'lancha',
    size: 2
}
const SUBMARINO = {
    type: 'submarino',
    size: 3
}
const CRUCERO = {
    type: 'crucero',
    size: 4
}
const PORTAAVIONES = {
    type: 'portaaviones',
    size: 5
}
export const ships = [LANCHA, SUBMARINO, CRUCERO, PORTAAVIONES]




//BOARD
export const E = 'empty'
export const S = 'ship'

export const BOARD = [
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
]




//CPU BOARD
export const cpu_board = () => {
    let board = [
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
    ]

    let shipsToPlace = [LANCHA, SUBMARINO, CRUCERO, PORTAAVIONES]

    for (let i = 0; i < 4; i++){
        let position = Math.floor(Math.random()*2)
        let x_pos = Math.floor(Math.random()*10)
        let y_pos = Math.floor(Math.random()*10)

        while (!( unnocupiedVertical(position, x_pos, y_pos, shipsToPlace[i], board)
               || unnocupiedHorizontal(position, x_pos, y_pos, shipsToPlace[i], board) )){
            position = Math.floor(Math.random()*2)
            x_pos = Math.floor(Math.random()*10)
            y_pos = Math.floor(Math.random()*10)
        }

        if (position == 1) {
            for (let j = 0; j<shipsToPlace[i].size; j++){
                board[x_pos][Math.min(y_pos+j, 9)] = S
            }
        } else {
            for (let j = 0; j<shipsToPlace[i].size; j++){
                board[Math.min(x_pos+j, 9)][y_pos] = S
            }
        }
    }
    return board
}

const unnocupiedVertical = (position, x_pos, y_pos, selectedShip, board) => {
    let ret = position==1
    for (let i = 0; i<selectedShip.size; i++){
        if (y_pos+i<10){
            ret = ret && board[x_pos][y_pos+i]==E
        }
        else {
            ret = false
        }
        
    }
    return ret
}
const unnocupiedHorizontal = (position, x_pos, y_pos, selectedShip, board) => {
    let ret = position==0
    for (let i = 0; i<selectedShip.size; i++){
        if (x_pos+i<10){
            ret = ret && board[x_pos+i][y_pos]==E
        }
        else {
            ret = false
        }
        
    }
    return ret
}