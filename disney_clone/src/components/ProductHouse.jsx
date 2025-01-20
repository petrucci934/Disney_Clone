import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import nationalG from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwars from '../assets/Images/starwar.png'

import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGV from'../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import starwarsV from '../assets/Videos/star-wars.mp4'

 
const ProductHouse = () => {
    const productionHouseList = [
    {
        id:1,
        image:disney,
        video:disneyV
    },
    {
        id:2,
        image:marvel,
        video:marvelV
    },
    {
        id:3,
        image:nationalG,
        video:nationalGV
    },
    {
        id:4,
        image:pixar,
        video:pixarV
    },
    {
        id:5,
        image:starwars,
        video:starwarsV
    }

    ]
  return (
    <div className='flex gap-2 md:gap-5 px-5 p-2 md:px-16'>
        {productionHouseList.map((item)=>(
            <div 
            key={item.id} 
            className='relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800 overflow-hidden'>
                <video 
                src={item.video} 
                autoPlay 
                loop 
                playsInline
                muted 
                className='absolute inset-0 w-full h-full object-cover rounded-md opacity-0 hover:opacity-50'/>

                <img  src={item.image} alt="logo" className='w-full  ' />            
            </div>
        ))}
    </div>
  )
}

export default ProductHouse