import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Link , Route ,Switch} from 'react-router-dom'
const Movie =(props)=> {
return(
    <Link to={`${props.movie.imdb_id}`}>
<Poster
   src={props.movie.images.poster}
  
/>
</Link>
)
}

export default Movie

export const Poster = styled.img`
box-shadow : 0 0 35px black;
width: 200px
height: 250px
`

