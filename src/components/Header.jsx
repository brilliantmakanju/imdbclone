import React from 'react'
import Link from 'next/link'
import MenuItem from './MenuItem'
import DarkModeSwitch from './DarkMode'
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"

const Header = () => {
  return (
    <div className='flex py-[5px] px-[20px] justify-between items-center' >
      <div className='flex justify-between  ' >
        <MenuItem title="Home" link="/" Icon={AiFillHome} />
        <MenuItem title="About" link="about" Icon={BsFillInfoCircleFill} />
      </div>
     <div className='text-2xl flex items-center space-x-5 ' >
     	<DarkModeSwitch />
        <h2 className='text-2xl flex items-center  ' >
          <span className='bg-amber-500 mx-[6px] p-[6px] rounded-[5px] font-bold  ' >IMDB</span>
          <span className="hidden lg:inline" >Clone</span>
        </h2>
     </div>
    </div>
  ) 
}

export default Header
