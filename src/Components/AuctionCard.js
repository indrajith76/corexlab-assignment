import React from 'react';
import hammer from '../asests/icons/hammer.png';
import leap from '../asests/icons/leap.png';
import calender from '../asests/icons/calender.png';
import box from '../asests/icons/box.png';
import time from '../asests/icons/time.png';
import greenDollar from '../asests/icons/greenDollar.png';
import greenDot from '../asests/icons/greenDot.png';


const AuctionCard = () => {
    return (
        <div className='border px-5 py-4 rounded-lg'>
            <p className='text-xs flex items-center gap-1 mb-2'>
                <img className='w-[6px]' src={greenDot} alt="" />
                Live
            </p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-9 p-2 border rounded-md shadow-md' src={hammer} alt="" />
                    <div>
                        <small className='text-xs'>Auction ID</small>
                        <p className='font-bold text-sm'>A#1002</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-9 p-2 border rounded-md shadow-md' src={leap} alt="" />
                    <div>
                        <small className='text-xs'>Quantity</small>
                        <p className='font-bold text-sm'>35lb</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-9 p-2 border rounded-md shadow-md' src={calender} alt="" />
                    <div>
                        <small className='text-xs'>Start Date</small>
                        <p className='font-bold text-sm'>10.03.22</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-9 p-2 border rounded-md shadow-md' src={box} alt="" />
                    <div>
                        <small className='text-xs'>Min Quantity</small>
                        <p className='font-bold text-sm'>4Ib</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-9 p-2 border rounded-md shadow-md' src={time} alt="" />
                    <div>
                        <small className='text-xs'>Duration</small>
                        <p className='font-bold text-sm'>4 days</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-9 p-2 border rounded-md shadow-md' src={greenDollar} alt="" />
                    <div>
                        <small className='text-xs'>Reserve</small>
                        <p className='font-bold text-sm'>$200</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;