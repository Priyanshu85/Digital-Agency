import React from 'react'
import socialmedia1 from './../../images/social-media1.png'
import organic from './../../images/organic-clock.png'
import analytics from './../../images/analytics.png'
import socialmedia from './../../images/social-media.png'

function BlueBody() {
    return (
        <>
            <div className='h-full bg-[#8574E9] w-screen'>
                <div className='flex flex-col  justify-center items-center md:flex-col'>
                    <p className='text-blue-900 tracking-widest text-xl w-52 mr-24 mt-28 md:w-full md:text-center md:ml-20'>SEARCH ENGINE &amp; SOCIAL MEDIA OPTIMIZATION</p>
                    <p className="text-white font-extrabold font-sans text-5xl flex text-left justify-center leading-tight w-80 mt-10 md:text-left md:ml-20 md:w-3/4 md:mt-3 md:mb-5">Full Service Digital Marketing Agency</p>
                    <div className='md:flex mb-20'>
                        <div className="w-80 bg-[#8878E9] md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl text-center flex flex-col items-center md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-2.5">
                            <img className="w-full"
                                src={socialmedia1}
                                alt="socialmedia1"/>
                            <div className="px-6 py-4">
                                <div className="text-white font-[1000] text-xl mb-2 w-48 text-center">SOCIAL MEDIA MARKETING</div>
                            </div>
                        </div>
                        <div className="w-80 bg-[#8878E9] md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-6">
                            <img className="w-full"
                                src={organic}
                                alt="organic"/>
                            <div className="px-6 py-4">
                                <div className="text-white font-black text-xl mb-2 text-center">ORGANIC LONG-TERM SEO</div>
                            </div>
                        </div>
                        <div className="w-80 bg-[#8878E9] md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-6">
                            <img className="w-full"
                                src={analytics}
                                alt="analytics"/>
                            <div className="px-6 py-4">
                                <div className="text-white font-black text-xl mb-2 text-center">ADVANCED ANALYTICS</div>
                            </div>
                        </div>
                        <div className="w-80 bg-[#8878E9] md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl text-center flex flex-col items-center md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-2.5">
                            <img className="w-full"
                                src={socialmedia}
                                alt="socialmedia"/>
                            <div className="px-6 py-4">
                                <div className="text-white font-[1000] text-xl mb-2 w-48 text-center">SOCIAL MEDIA MARKETING</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlueBody;
