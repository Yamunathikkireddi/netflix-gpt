import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () =>{      
   console.log("popular movies start")
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS); 
      const json = await data.json();
      console.log(json);
      console.log("json results start")
      console.log(json.results[0]);
      dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
      getPopularMovies();
    },[])
}
export default usePopularMovies;