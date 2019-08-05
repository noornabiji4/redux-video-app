import {GET_MOVIES} from './action'
//movie reducer 

const initialState = {
    movies : []
}

export default function(state=initialState, action){
    const {type,data} = action
    switch ( type){
        case GET_MOVIES :
        return {...state ,  movies: data}
        default : 
        return state
    }
}