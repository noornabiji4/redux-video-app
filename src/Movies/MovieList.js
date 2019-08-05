import React, { Component } from 'react';
import Movie from './Movie'
import styled from 'styled-components'
import {getMovies} from './action'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

class MovieList extends Component {
   

    componentDidMount(){
        this.props.getMovies()
     }
    render() { 
        const {movies} = this.props 
        return ( 
            <MovieGrid>
          {movies.map((movie)=> <Movie key={movie._id} movie={movie} /> )}
            </MovieGrid>
          );
    }
}

const mapStateToProps = state => ({
  movies : state.moviestate.movies
})
 
const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);

const MovieGrid = styled.div`
display : grid;
padding : 1rem;
grid-template-columns: repeat(6, 1fr);
grid-row-gap : 1rem
`