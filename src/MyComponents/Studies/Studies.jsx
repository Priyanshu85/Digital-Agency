import React from 'react'
import studies from './../../images/studies.png'
import tremely from './../../images/tremely.png'
import plainst from './../../images/plainst.png'

function Studies() {
    return (
        <div className='bg-gray-100 mt-10 flex flex-col items-center'>
            <div>
            <p className='text-3xl font-[1000] font-sans mt-20 mr-16 md:mr-[60rem] md:text-4xl'>Our case studies</p>
            <p className='hover:text-red-400 cursor-pointer mr-40 mt-16'>|  &nbsp;&nbsp;&nbsp;&nbsp;See all projects</p>
            </div>
            <div className='md:flex cursor-pointer justify-evenly -mt-12 md:mt-2'>
            <div className="w-80 bg-[#ffffff] md:w-96 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl md:mr-10 mt-14 hover:shadow-2xl bg-scroll mb-20">
                <img className="w-full"
                    src={studies}
                    alt="studies"/>
                <div className="px-9 py-12">
                    <div className="text-black font-black text-xl mb-2 text-center">OPERTRAY DIVISION</div>
                    <p>This website achieved Google ranking in four months: Ranks #1-#3 for keyword</p>
                </div>
            </div>
            <div className="hidden md:block w-80 bg-[#ffffff] md:w-96 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl md:mr-10 mt-14 hover:shadow-2xl bg-scroll mb-20">
                <img className="w-full"
                    src={tremely}
                    alt="tremely"/>
                <div className="px-9 py-12">
                    <div className="text-black font-black text-xl mb-2 text-center">TREMELY DESIGNS</div>
                    <p>This sire applies a smart SEO strategy to acquire online clients via long-tail search...</p>
                </div>
            </div>
            <div className="hidden md:block w-80 bg-[#ffffff] md:w-96 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl md:mr-10 mt-14 hover:shadow-2xl bg-scroll mb-20">
                <img className="w-full"
                    src={plainst}
                    alt="plainist"/>
                <div className="px-9 py-12">
                    <div className="text-black font-black text-xl mb-2 text-center">PLAINIST TECH</div>
                    <p>Currently, 65% of the total traffic on the site and most of the online...</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Studies;
