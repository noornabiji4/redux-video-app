import axios from 'axios'

export const GET_MOVIES = 'GET_MOVIES'


export function getMovies(){
    return async function(dispatch){
    const res = await axios.get('https://tv-v2.api-fetch.website/movies/3?sort=trending&order=1&genre=documentary')
        return dispatch({
            type: GET_MOVIES,
            data : res.data
        })
    }

}