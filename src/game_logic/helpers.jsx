//SHIPS
//BOARD
export const AV = 'PORTAAVIONES'
export const BC = 'CRUCERO'
export const SB = 'SUBMARINO'
export const DD = 'LANCHA'
export const E = 'empty'
export const S = 'ship'
export const H = 'hit'
export const M = 'miss'

const LANCHA = {
    type: 'lancha',
    size: 2,
    tag: DD,
    selector: 0
}
const SUBMARINO = {
    type: 'submarino',
    size: 3,
    tag: SB,
    selector: 1
}
const CRUCERO = {
    type: 'crucero',
    size: 4,
    tag: BC,
    selector: 2
}
const PORTAAVIONES = {
    type: 'portaaviones',
    size: 5,
    tag: AV,
    selector: 3
}
export const ships = [LANCHA, SUBMARINO, CRUCERO, PORTAAVIONES]


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
                board[x_pos][Math.min(y_pos+j, 9)] = shipsToPlace[i].selector
            }
        } else {
            for (let j = 0; j<shipsToPlace[i].size; j++){
                board[Math.min(x_pos+j, 9)][y_pos] = shipsToPlace[i].selector
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