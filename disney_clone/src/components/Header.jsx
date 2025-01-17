import logo from '../assets/disney-logo.png'
import avatar from '../assets/avatar.png'
import { HiHome,HiStar,HiMagnifyingGlass,HiPlayCircle,HiTv} from 'react-icons/hi2'
import {HiDotsVertical, HiPlus } from 'react-icons/hi'
import HeaderItem from './HeaderItem'
import { useState } from 'react'

const Header = () => {
    const [toggle,setToggle] = useState(false)
    const menu = [
        {
            name:'HOME',
            icon:HiHome,
            
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass,

        },
        {
            name:'WHATCH LIST',
            icon:HiPlus,
        },
        {
            name:'ORIGINALS',
            icon:HiStar,
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle,
        },
        {
            name:'SERIES',
            icon:HiTv,
            
        },
    ]
  return (
    
    < div className='flex items-center  justify-between p-5'>
        <div className='flex gap-8 items-center'>

            <img 
                src={logo} 
                alt="Disney Logo" 
                className='w-[80px] md:w-[115px] object-cover' />
                <div className=' gap-8 md:flex hidden'>
                    {menu.map((item)=>(
                    <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-8'>
                    {menu.map((item,index)=>index < 3 && (
                    <HeaderItem key={item.name} name={''} Icon={item.icon}/>
                    ))}
                    <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical}/> 

                     {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 '>
                      {menu.map((item,index)=>index > 2  && ( 
                    <HeaderItem key={item.icon} name={item.name} Icon={item.icon}/>
                    ))}
                     </div>:null}
                    </div>
                </div>
               
        </div>
        
        <img
        className='w-[40px] rounded-full flex' 
        src={avatar} 
        alt="avatar" />
    </div>
    
  )
}

export default Header