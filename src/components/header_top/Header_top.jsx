import { Link } from 'react-router-dom'

const Header_top = () => {
  return (
    <div>
    <div className="bg-black text-white py-2 text-[14px]">
      <div className="main-container">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="">Welcome to worldwide Megamart!</p>
          <ul className="flex gap-1 sm:gap-2 items-center text-[11.5px] sm:text-base">
            <li>
              <Link to="/">
                <p className="cursor-pointer" >Deliver to 423651</p>
              </ Link>
            </li>
            <li className="px-[4.5px] sm:px-[5.5px]">
              <p>|</p>
            </li>
            <li>
              <Link to="/">
                <p className="cursor-pointer" >Track your order</p>
              </ Link>
            </li>
            <li className="px-[4.5px] sm:px-[5.5px]">
              <p>|</p>
            </li>
            <li>
              <Link to="/">
                <p className="cursor-pointer" >All Offers</p>
              </ Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header_top
