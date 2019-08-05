import {TOGGLE_MESSAGE} from './action'

const initialState = {
    toggleMessageShow: false,
}


export default function(state=initialState, action){
    const {type} = action
    switch(type){
        case TOGGLE_MESSAGE:
        return {...state,toggleMessageShow: !state.toggleMessageShow }
        default :
        return state
    }
}