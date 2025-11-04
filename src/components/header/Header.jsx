import toggleImg from "./Images/bar.png"
import flash from "./Images/flashSale.png"
import { FiSearch } from "react-icons/fi"
import { FaRegHandshake } from "react-icons/fa6"
import { IoIosContact } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
    <div className="sticky top-0 left-0 z-20 bg-white/50 backdrop-blur-[6px] items-center">
      <div className="main-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 sm:justify-between h-min ">

          <div className="flex justify-between w-full sm:w-auto items-center gap-4">
            <img className={`cursor-pointer transition-all duration-300 ${isOpen && "rotate-90"} w-[35px] h-[35px] sm:hidden`} onClick={() => setIsOpen(!isOpen)} src={toggleImg} alt="Toggle" />
            <img className="cursor-pointer hidden sm:block w-[35px] h-[35px] md:w-auto md:h-auto" src={toggleImg} alt="Toggle" />
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold leading-4">UNITED DEALS</h1>
            <img className="lg:w-[90px] lg:h-[90px] w-[65px] h-[65px]" src={flash} alt="flash" />
          </div>

          <div className="p-1 md:p-2 gap-1.5 items-center rounded-md bg-sky-200 hidden sm:flex">
            <FiSearch />
            <input id="fromBig" className="w-[250px] xl:w-[300px] outline-0" type="text" placeholder="Search essentials, groceries and more..." />
          </div>

          <div className="items-center cursor-pointer hidden sm:flex">
            <div className="flex items-center gap-1 text-[#FC7901]">
              <FaRegHandshake />
              <p className="hidden lg:block">My Deals</p>
            </div>
            <p className="px-1.5 lg:px-2 xl:px-4">|</p>
            <div className="flex items-center gap-1 cursor-pointer">
              <IoIosContact />
              <p className="hidden lg:block">Sign In/Sign Up</p>
            </div>
            <p className="px-1.5 lg:px-2 xl:px-4">|</p>
            <div className="flex items-center gap-1 cursor-pointer">
              <IoCartOutline />
              <p className="hidden lg:block">Cart</p>
            </div>
          </div>

          <div className={`miniBar sm:hidden  w-full px-2 ${isOpen ? "h-[145px] py-2" : "h-0"} overflow-hidden transition-all duration-300`}>
            <div className="flex flex-col gap-3">

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 text-[#FC7901]">
                  <FaRegHandshake className="w-[18px] h-[18px]" />
                  <p className="">My Deals</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <IoIosContact className="w-[18px] h-[18px]" />
                  <p className="">Sign In/Sign Up</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <IoCartOutline className="w-[18px] h-[18px]" />
                  <p className="">Cart</p>
                </div>
              </div>

              <div className="p-1 gap-1.5 items-center rounded-md bg-sky-200 flex">
                <FiSearch />
                <input id="formSmall" className="w-full text-[14px] placeholder:text-[14px] outline-0" type="text" placeholder="Search essentials, groceries and more..." />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
