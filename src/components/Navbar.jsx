/* eslint-disable react/prop-types */
import Logo from "../assets/logo.png";
import Coin from "../assets/coin.png";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ coin }) => {
  return (
    <div className="py-4 px-2">
      <nav className="flex items-center justify-between">
        <div>
          <img className="w-full" src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 text-md font-semibold text-gray-500 ">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Fixture</li>
            <li className="hover:text-black cursor-pointer">Teams</li>
            <li className="hover:text-black cursor-pointer">Schedules</li>
          </ul>
          <div className="flex items-center border py-1 px-2 rounded-xl">
            <p className="font-bold text-lg mr-2">{coin} Coin</p>
            <img className="size-5" src={Coin} alt="coin" />
          </div>
          <div className="md:hidden">
            <IoMdMenu className="text-3xl text-gray-500 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
