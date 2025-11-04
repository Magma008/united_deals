import React from 'react'
import { Link } from 'react-router-dom'
import { sideLinks } from '../../mock/muhammad/muhammad'
import ps5 from "../header/Images/ps5.png"
import cctv from "../header/Images/cctv.png"
import phone from "../header/Images/phone.png"
import banner from "../header/Images/banner.png"

const SideMenu = ({ open, setOpen }) => {
    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className={`absolute  transition-all  duration-400 ${open ? "left-[110%]" : "left-[-2000px]"} hidden xl:block backdrop-blur-xs bg-black/20 rounded-md `}>
            <div className="main-container">
                <div className={`flex p-2 items-center gap-3 w-max`}>

                    <ul className="flex flex-col text-[13px] md:text-base p-2 bg-white/50 rounded-md">
                        {
                            sideLinks.map((item, i) => (
                                <li key={i} className='py-[3px] min-w-[150px] hover:text-white cursor-pointer hover:bg-cyan-500/40 px-2 transition-all duration-300'>
                                    <Link to={"/"}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="flex flex-col w-max p-2.5 rounded-md bg-white/50 h-full">
                        <h3 className="uppercase">Featured Phones</h3>
                        <ul className='flex flex-col gap-2'>
                            <Link>
                                <li className='flex items-center gap-4 p-2 border rounded-md bg-white'>
                                    <img src={ps5} alt="ps5" />
                                    <div className="flex flex-col">
                                        <p>Samsung Electronics <br /> Samsung Galaxy S25 Ultra 5G</p>
                                        <p className="text-green-500">998$</p>
                                    </div>
                                </li>
                            </Link>
                            <Link>
                                <li className='flex items-center gap-4 p-2 border rounded-md bg-white'>
                                    <img src={phone} alt="phone" />
                                    <div className="flex flex-col">
                                        <p>Simple Mobile 5G LTE Galaxy <br /> 12 Mini 512GB Gaming Phone</p>
                                        <p className="text-green-500">555$</p>
                                    </div>
                                </li>
                            </Link>
                            <Link>
                                <li className='flex items-center gap-4 p-2 border rounded-md bg-white'>
                                    <img src={cctv} alt="cctv" />
                                    <div className="flex flex-col">
                                        <p>Sony DSCHX8 High Zoom <br /> Point & Shoot Camera</p>
                                        <p className="text-green-500">230$</p>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="flex flex-col bg-[#F7E99E] gap-3 p-5 h-full rounded-md text-center">
                        <img src={banner} alt="banner" />
                        <h1 className="text-[28px] font-semibold">21% Discount</h1>
                        <p>Escape the noise, It’s time to hear <br /> the magic with Xiaomi Earbuds.</p>
                        <div className="flex gap-3 items-center justify-center">
                            <span className="text-[14px]">Starting Price:</span>
                            <div className="bg-white rounded-md p-1 px-2 text-black">99$ USD</div>
                        </div>
                        <button className="p-2 px-4 bg-[#FA8232] text-white transition-all duration-300">Shop Now →</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideMenu
