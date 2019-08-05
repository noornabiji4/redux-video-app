import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Poster } from './Movie';
// import ReactPlayer from 'react-player'
class MovieDetail extends Component {
    state = { 
        movie : {}
     }
    async componentDidMount(){
        console.log("wheen is this update ?")
        const {match} = this.props
         const res= await axios.get(`https://tv-v2.api-fetch.website/movie/${match.params.id}`)
         this.setState({
             movie: res.data
         })
     }
    render() { 
        console.log("render pehle")
        const {movie} = this.state 
        if(!movie._id) return null;
        return ( 
         
           
            <div>
                <MovieWrapper backdrop={movie.images.fanart}>
                <MovieInfo>
                   <Poster src={movie.images.poster}/>
                   <Moveup>
                 <h2> {movie.title}</h2>
                 </Moveup>
               </MovieInfo>
               </MovieWrapper>
            </div>
          
         );
    }
}
 
export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 15%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -10rem;
  }
`;

const Moveup = styled.div`
margin-top : -6rem
`
