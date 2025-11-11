import React, { useState } from 'react'
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { dropLinks } from '../../mock/muhammad/muhammad'
import SideMenu from '../sideMenu/SideMenu';

const DropDown = ({ opened }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`absolute transition-all z-[100000]  hidden sm:flex duration-400 ${!opened && "translate-y-[-800px]"} left-[30px]`}>
            <ul className='flex flex-col text-[13px] md:text-base bg-black/20 backdrop-blur-xs w-fit p-2 md:p-4 rounded-md'>
                {
                    dropLinks.map((item, i) => (
                        <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} key={i} className='flex group cursor-pointer items-center transition-all duration-300 py-[3px] hover:bg-cyan-400 p-1 justify-between gap-2 md:gap-5'>
                            <span>{item.name}</span>
                            <FiChevronRight className='transition-all duration-300 text-black/20 group-hover:text-black' />
 
                        </li>
                    ))
                }
            </ul>
            <SideMenu open={open} setOpen={setOpen}/>
        </div>
    )
}

export default DropDown
