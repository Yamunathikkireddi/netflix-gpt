import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
const useNowPlayingMovies = () => {
  console.log("now playing movies start")
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS); 
      const json = await data.json();
      console.log(json);
      console.log("json results start")
      console.log(json.results[0]);
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;