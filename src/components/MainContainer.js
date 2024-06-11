import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector(store=> store.movies?.nowPlayingMovies);
  if(!movies) return null;
  const mainMovie = movies[0];
  console.log("main movie 0")
  console.log(mainMovie);
  const { original_title, overview} = mainMovie;
  return (
    <div>
      <VideoTitle/>
      <VideoBackground/>
    </div>
  )
}

export default MainContainer;