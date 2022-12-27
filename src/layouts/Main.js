import React from "react";
import notification from "../asests/icons/notification.png";
import message from "../asests/icons/message.png";
import active from "../asests/icons/active.png";
import avatar from "../asests/avatar.png";
import logo from "../asests/logo.png";
import { HiOutlineLogout } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdOutlineInventory2,MdOutlineAddBusiness } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";
import { TbCheckupList } from "react-icons/tb";
import { FaTruckPickup } from "react-icons/fa";
import { GiDrippingTube } from "react-icons/gi";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

const Main = () => {
  return (
    <div className="2xl:container flex mx-auto">
      <div className="w-[323px] h-screen">
        <img src={logo} className="mx-auto mt-5" alt="" />
        <h6 className="bg-[#47CC4D] text-center text-xl font-bold text-white">
          Grower
        </h6>
        <div className="mt-8">
          <ul>
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <MdOutlineSpaceDashboard className="text-2xl" /> Dashboard
            </li>
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <MdOutlineInventory2 className="text-2xl" /> Inventory
            </li> 
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <MdOutlineAddBusiness className="text-2xl" /> Marketplace
            </li> 
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <ImHammer2 className="text-2xl" /> Auction                             
            </li> 
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <TbCheckupList className="text-2xl" /> Orders                             
            </li> 
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <FaTruckPickup className="text-2xl" /> Transports                             
            </li> 
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <GiDrippingTube className="text-2xl" /> Laboratories                             
            </li> 
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <BsArrowLeftRight className="text-2xl" /> Transaction                             
            </li> 
            <li className="text-[#333333] pl-[53px] text-lg flex items-center gap-6 py-5 hover:bg-[#4caf502b] hover:text-[#4CAF50] hover:border-l-[6px] border-[#4CAF50] duration-200 cursor-pointer">
              <AiOutlineSetting className="text-2xl" /> Settings                             
            </li> 
          </ul>
        </div>
      </div>
      <div className="w-full">
        <nav className="py-5 px-7 flex items-center justify-between">
          <div>
            <p className="text-gray-400">
              Products /{" "}
              <span className="text-black">Add New Items Preview</span>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <img src={notification} className="w-[23px]" alt="" />
              <img src={active} className="absolute top-0 right-0" alt="" />
            </div>
            <div className="relative">
              <img src={message} className="w-[23px]" alt="" />
              <img src={active} className="absolute top-0 right-0" alt="" />
            </div>
            <div>
              <img src={avatar} alt="" />
            </div>
            <button className="text-2xl">
              <HiOutlineLogout />
            </button>
          </div>
        </nav>

        <div className="bg-slate-100 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
