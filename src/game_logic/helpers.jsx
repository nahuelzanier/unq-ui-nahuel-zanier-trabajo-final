

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
    size: 4
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