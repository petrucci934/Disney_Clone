import { useEffect } from "react"
import GlobalApi from "../Services/GlobalApi"
import { useState } from "react"
import MovieCard from "./MovieCard"

// eslint-disable-next-line react/prop-types
const MovieList = ({genreId}) => {
    const [movieList,setMovieList] = useState([])
    useEffect(()=>{
      getMovieByGenreId()
    },[])
    const getMovieByGenreId =()=>{
      GlobalApi.getMovieByGenreId(genreId).then(resp=>{
        setMovieList(resp.data.results)
      })
    }
    return(
      <div className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4">
        {movieList.map((item) => (
            <MovieCard key={item.id} movie={item}/>
        ))}
      </div>        
    )
}

export default MovieList