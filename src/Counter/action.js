export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'


export function incrementCounter(){
    return{
        type: INCREMENT_COUNT
    }
}

export function decrementCounter(){
    return{
        type: DECREMENT_COUNT
    }
}