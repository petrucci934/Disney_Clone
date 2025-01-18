import { useEffect } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { useState } from 'react';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'
import { useRef } from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

function Slider()  {
    const [movieList,setMovieList] = useState([])
    const elementRef = useRef()
    const screenWidht = window.innerWidth
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    GlobalApi.getTrendingVideo.then(resp=>{
        setMovieList(resp.data.results)
    })
  };

  const sliderRight = (element)=>{
    element.scrollLeft += screenWidht -100
  }
  const sliderLeft = (element)=>{
    element.scrollLeft -= screenWidht -100
  }
  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute m-8 mt-[255px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>

        <HiChevronRight className=' hidden md:block text-white text-[30px] absolute m-8 mt-[255px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>

        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none  scroll-smooth' ref={elementRef}>
            {movieList.map((movie)=>(
                <img 
                key={movie.id} 
                src={IMAGE_BASE_URL + movie.backdrop_path} 
                alt="image movie" 
                className='min-w-full md:h-[510px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
            ))}
        </div>
    </div>
  )
};

export default Slider;
