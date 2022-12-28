import React from "react";
import "./Inventory.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiFillStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import { MdOutlineAddBusiness } from "react-icons/md";
import product1 from "../../asests/product1.png";
import product2 from "../../asests/product2.png";
import product3 from "../../asests/product3.png";
import Allocated from "../../asests/icons/Allocated.png";
import downArrow from "../../asests/icons/downArrow.png";
import doller from "../../asests/icons/doller.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AuctionCard from "../../Components/AuctionCard";
import { HiArrowTrendingUp } from "react-icons/hi2";
import chart from "../../asests/icons/chart.png";
import chartBg from "../../asests/icons/chartBg.png";
import {
  HiOutlineDotsVertical,
  HiEye,
  HiUserGroup,
  HiStar,HiOutlineChat
} from "react-icons/hi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Inventory = () => {
  const data = [
    {
      data1: 2,
      data2: 500,
    },
  ];
  return (
    <div>
      <div className="bg-white py-5 px-4">
        <div>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-medium text-[#1E1E1E]"
            >
              <AiOutlineArrowLeft /> Back
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-base font-medium text-[#1E1E1E]"
            >
              Edit
            </Link>
          </div>

          <div>
            <div className="flex gap- mt-5">
              <div className="flex w-[72%] h-[328px] items-center gap-4">
                <div className="flex flex-col gap-7">
                  <img
                    src={product1}
                    className="w-[60px] hover:border-4 border-orange-300 cursor-pointer duration-200"
                    alt=""
                  />
                  <img
                    src={product2}
                    className="w-[60px] hover:border-4 border-orange-300 cursor-pointer duration-200"
                    alt=""
                  />
                  <img
                    src={product3}
                    className="w-[60px] hover:border-4 border-orange-300 cursor-pointer duration-200"
                    alt=""
                  />
                  <img
                    src={product2}
                    className="w-[60px] hover:border-4 border-orange-300 cursor-pointer duration-200"
                    alt=""
                  />
                </div>
                <img src={product3} alt="" />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#4CAF50] mb-2">
                      Royal ACDC Outdoor
                    </h2>
                    <Link
                      to="/"
                      className="flex items-center gap-4 text-base text-[#4CAF50] font-medium"
                    >
                      Gold Leaf Flowers <BiLinkExternal />
                    </Link>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((s, idx) => (
                        <AiFillStar key={idx} />
                      ))}
                    </div>
                    <p className="text-[#858585]">4.9 (2130 reviews)</p>
                  </div>
                </div>
                <div className="my-8">
                  <div className="flex justify-between">
                    <p>Category: Flowers</p>
                    <p>Strains: Indica</p>
                    <p>Terpenes: 10</p>
                    <p>Canabinoids: 15</p>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between">
                    <p>Cultivation: Indoor</p>
                    <p>THC: 0.5%</p>
                    <p>Batch No: B54U</p>
                    <p>Brand: Gold</p>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="bg-[#4CAF50] p-6 rounded-lg">
                      <IoRadioButtonOnSharp className="mx-auto text-white" />
                      <p className="text-center text-white">Total Stock</p>
                      <h6 className="text-xl font-bold text-white text-center">
                        100Ib
                      </h6>
                    </div>

                    <div className="marketplace-bg py-3 px-3 border rounded-lg">
                      <div className="flex justify-between mb-2">
                        <p className="flex items-center gap-1 text-[#4CAF50] font-semibold">
                          <MdOutlineAddBusiness /> Marketplace
                        </p>
                        <div className="flex items-center gap-[7px]">
                          <input
                            type="checkbox"
                            className="accent-[#4CAF50] "
                            checked
                          />
                          <p className="text-gray-400">Ib</p>
                          <input
                            type="checkbox"
                            className="accent-[#4CAF50] "
                          />
                          <p className="text-gray-400">g</p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="flex items-center gap-5">
                          <div>
                            <img src={Allocated} alt="" />
                            <small>Allocated</small>
                            <p className="font-bold text-slate-800">100Ib</p>
                          </div>
                          <div>
                            <img src={downArrow} alt="" />
                            <small>Min Qty</small>
                            <p className="font-bold text-slate-800">5lb</p>
                          </div>
                          <div>
                            <img src={doller} alt="" />
                            <small>Price</small>
                            <p className="font-bold text-slate-800">$600/lb</p>
                          </div>
                        </div>
                        <div className="w-12">
                          <CircularProgressbar
                            styles={buildStyles({
                              pathColor: "#4CAF50",
                              textColor: "#4CAF50",
                            })}
                            value={66}
                            text={`${100}Ib`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="auction-bg py-3 px-3 border rounded-lg">
                      <div className="flex justify-between mb-2">
                        <p className="flex items-center gap-1 text-[#4CAF50] font-semibold">
                          <MdOutlineAddBusiness /> Auction
                        </p>
                        <div className="flex items-center gap-[7px]">
                          <input
                            type="checkbox"
                            className="accent-[#4CAF50] "
                            checked
                          />
                          <p className="text-gray-400">Ib</p>
                          <input
                            type="checkbox"
                            className="accent-[#4CAF50] "
                          />
                          <p className="text-gray-400">g</p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="flex items-center gap-5">
                          <div>
                            <img src={Allocated} alt="" />
                            <small>Allocated</small>
                            <p className="font-bold text-slate-800">85Ib</p>
                          </div>
                          <div>
                            <img src={downArrow} alt="" />
                            <small>Total Auction</small>
                            <p className="font-bold text-slate-800">3</p>
                          </div>
                        </div>
                        <div className="w-12">
                          <CircularProgressbar
                            styles={buildStyles({
                              pathColor: "#4CAF50",
                              textColor: "#4CAF50",
                            })}
                            value={66}
                            text={`${100}Ib`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-4 p-5">
        <div className="">
          <ul className="flex gap-14">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:border-b-4 hover:border-[#4CAF50] hover:text-[#4CAF50] pb-3 font-semibold"
              >
                Message
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:border-b-4 hover:border-[#4CAF50] hover:text-[#4CAF50] pb-3 font-semibold"
              >
                Auction
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:border-b-4 hover:border-[#4CAF50] hover:text-[#4CAF50] pb-3 font-semibold"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:border-b-4 hover:border-[#4CAF50] hover:text-[#4CAF50] pb-3 font-semibold"
              >
                Feedback
              </Link>
            </li>
          </ul>
          <hr className="mt-3" />
        </div>

        <div className="flex gap-3">
          <div className="mt-5 w-[65%]">
            <h4 className="text-lg font-semibold mb-10">Auction Overview</h4>
            <div className="flex flex-col gap-5">
              {[1, 2, 3].map((a) => (
                <AuctionCard key={a}></AuctionCard>
              ))}
            </div>
          </div>
          <div className="w-[35%] border p-4">
            <div className="flex justify-between items-center">
              <div>
                <h6 className="text-lg font-semibold">Insights</h6>
                <small className="text-xs">ID: A#1001</small>
              </div>
              <Link to="/" className="flex items-center underline gap-2 text-[#2B74EE]">
                Go to auction <BiLinkExternal />
              </Link>
            </div>

            <div className="mt-5">
              <div className="border p-3 rounded-md">
                <p className="flex items-center justify-between font-semibold">
                  Engagement <HiOutlineDotsVertical />
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-5">
                    <div>
                      <p className="text-2xl font-bold">219</p>
                      <small className="text-xs">Last day</small>
                    </div>
                    <p className="flex items-center px-1 rounded-md text-[#4CAF50] bg-[#E9F6ED]">
                      -1.1% <HiArrowTrendingUp />
                    </p>
                  </div>
                  <div className=" relative">
                    <img src={chart} alt="" className="absolute bottom-1" />
                    <img src={chartBg} alt="" />
                    {/* <LineChart width={220} height={100} data={data}>
                    
                    </LineChart> */}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="flex items-center gap-2 border px-3 py-2 rounded-md shadow-lg">
                  <div className="p-2 rounded-full bg-[#EFECFF]">
                    <HiEye className="text-[#5F48EF]" />
                  </div>
                  <div>
                    <small>Total View</small>
                    <p className="text-md font-bold">274</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border px-3 py-2 rounded-md shadow-lg">
                  <div className="p-2 rounded-full bg-[#4caf4f31]">
                    <HiUserGroup className="text-[#4CAF50]" />
                  </div>
                  <div>
                    <small>Participants</small>
                    <p className="text-md font-bold">56</p>
                  </div>
                </div>
                <div className="bgCard flex items-center gap-2 border px-3 py-2 rounded-md shadow-lg">
                  <div className="p-2 rounded-full bg-[#E5F8FC]">
                    <HiStar className="text-[#13BDEC]" />
                  </div>
                  <div>
                    <small>Highest Bid</small>
                    <p className="text-md font-bold">$2374</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border px-3 py-2 rounded-md shadow-lg">
                  <div className="p-2 rounded-full bg-[#FCF4F0]">
                    <HiOutlineChat className="text-[#F9B024]" />
                  </div>
                  <div>
                    <small>Messages</small>
                    <p className="text-md font-bold">50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
