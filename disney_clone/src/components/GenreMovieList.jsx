import GenresList from './Constant/GenresList'
import MovieList from '../components/MovieList'

const GenreMovieList = () => {
  return (
    <div>
      
        {GenresList.genere.map((item,index)=>index <= 3 && (
            <div key={item.id} className='p-8 px-8 md:px-16'> 
                <h2 className='text-white font-bold text-[20px]'>{item.name}</h2>
                    <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList