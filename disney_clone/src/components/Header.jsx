import logo from '../assets/disney-logo.png'
import avatar from '../assets/avatar.png'
import { HiHome,HiStar,HiMagnifyingGlass,HiPlayCircle,HiTv} from 'react-icons/hi2'
import {HiPlus } from 'react-icons/hi'
import HeaderItem from './HeaderItem'

const Header = () => {
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
            jj:"hero"
        },
    ]
  return (
    
    < div className='flex items-center  justify-between p-5'>
        <div className='flex gap-8 items-center'>
            <img 
                className='w-[80px] md:w-[115px] object-cover' 
                src={logo} 
                alt="Disney Logo" />
                {menu.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <HeaderItem key={item.name} name={item.name} Icon={item.icon} 
            />
            ))}
        </div>
        <img
        className='w-[40px] rounded-full flex' 
        src={avatar} 
        alt="avatar" />
    </div>
    
  )
}

export default Header