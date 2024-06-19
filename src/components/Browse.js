import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 useNowPlayingMovies();
 usePopularMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ? <GPTSearch/>: 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
       }

     { /*
      MainContainer
      -VideoBackground
      -videoTitle
      Secondary Container
      - Movielist * n
      - cards * n
  */}
      </div>
  )
}

export default Browse