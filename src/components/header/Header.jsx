import toggleImg from "./Images/bar.png"
import flash from "./Images/flashSale.png"
import { FiSearch } from "react-icons/fi"
import { FaRegHandshake } from "react-icons/fa6"
import { IoIosContact } from "react-icons/io"
import { IoCartOutline, IoChevronDown } from "react-icons/io5"

const Header = () => {
  return (
    <div>
      <div className="main-container">
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <img src={toggleImg} alt="Toggle" />
            <h1 className="">UNITED DEALS</h1>
            <img src={flash} alt="flash" />
          </div>
          <div className="p-2 flex items-center rounded-md bg-sky-200">
            <FiSearch/>
            <input className="w-[300px]" type="text" placeholder="Search essentials, groceries and more..." />
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <FaRegHandshake />
              <p>My Deals</p>
            </div>
            <p className="px-2">|</p>
            <div className="flex items-center">
              <IoIosContact />
              <p>Sign In/Sign Up</p>
            </div>
            <p className="px-2">|</p>
            <div className="flex items-center">
              <IoCartOutline />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
