import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  console.log("main container start");
  const movies = useSelector(store=> store.movies?.nowPlayingMovies);
  if(!movies) return null;
  console.log(movies);
  const mainMovie = movies[0];
  console.log("main movie 0")
  console.log(mainMovie);
  const { original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer;