import React from 'react'
import climb from '../../images/climb.png'

function Body1() {
    return (
        <div className='mt-3 md:flex'>
            <div className='flex flex-col items-center md:items-start'>
                <p className='text-gray-400 font-semibold text-sm flex text-center justify-center md:ml-44 md:mt-20 md:text-xl md:tracking-wide'>DIGITAL MARKETING STRATEGY</p>
                <p className="text-gray-600 font-extrabold font-sans text-6xl flex text-center justify-center w-40 md:text-left md:ml-44 md:w-3/4 md:mt-7">We bring you new customers</p>
                <p className='text-gray-400 font-semibold text-sm flex text-center justify-center mt-5 w-44 md:w-3/5 md:text-xl md:text-left md:ml-44'>We build effective strategies to help you reach customers and prospects across the entire web</p>
                <button type="button" className="text-white font-extrabold flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-200 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 rounded-3xl w-40 mt-10 md:ml-44 md:mt-16">
                    Get a Quote
                </button>
            </div>
            <div className='md:w-3/4'>
                <img src={climb}
                    alt="climb"
                    className='mt-3'/>
            </div>
        </div>
    )
}
export default Body1;
