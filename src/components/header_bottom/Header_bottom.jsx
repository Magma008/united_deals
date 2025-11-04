import React, { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import { navLinks } from '../../mock/muhammad/muhammad';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import DropDown from '../dropDown/DropDown';
import SideMenu from '../sideMenu/SideMenu';


const Header_bottom = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div className='bg-blue-400'>
      <div div className="main-container" >

        <div className="relative">
          <div className="flex flex-wrap py-4 gap-2">
            {
              navLinks.map((item, i) => (
                <button onClick={() => setOpened(!opened)} key={i} className={`px-3.5 py-1.5 rounded-full ${item?.special ? "bg-black text-white" : "bg-[#F3F9FB] text-black"} cursor-pointer`}>
                  <div className="flex gap-1.5 items-center">
                    <span>{item?.name}</span>
                    <GoChevronDown className='w-[22px] h-[22px]' />
                  </div>
                </button>

              ))
            }

          </div>

          <DropDown opened={opened} />
        </div>

      </div >
    </div >
  )
}

export default Header_bottom
