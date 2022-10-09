import React from 'react'
import cogs from './../../images/small-icon-cogs.png'
import coin from './../../images/small-icon-coin.png'
import globe from './../../images/small-icon-globe.png'
import mail from './../../images/small-icon-mail.png'
import target from './../../images/small-icon-target.png'
import notebook from './../../images/small-icon-notebook.png'

function WhiteBody() {
    return (
        <>
            <div>
                <div className='flex flex-col items-center'>
                    <p className='text-gray-400 font-semibold text-sm flex text-left justify-center w-56 mt-5 md:mt-28 md:text-xl tracking-widest -ml-5 md:w-full md:mr-10'>GROW TRAFFIC &amp; INCREASE REVENUE</p>
                    <p className='text-gray-700 font-extrabold font-sans text-4xl flex text-left justify-center w-44 mr-20 mt-5 mb-5 md:mb-10 md:w-full md:mt-7 md:text-5xl'>Appear On the Front Page of Google!</p>
                    <p className='w-48 mr-14 mb-20 text-lg md:w-3/4 md:text-xl md:text-center'>We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.</p>
                </div>
                <div className='flex flex-wrap md:justify-around'>
                    <div className='flex flex-col mx-10 mt-5 md:mt-14 md:w-[21rem]'>
                        <img src={target}
                            alt="target"
                            className='md:w-20 w-24'/>
                        <p className='text-purple-700 text-2xl md:text-lg md:tracking-wide font-extrabold w-45 mt-5 text-left'>LOGICAL SEARCH STRATEGY</p>
                        <p className='mt-5 md:w-11/12'>Maximize your presence on search engine results pages on a local scale.</p>
                    </div>
                    <div className='flex flex-col mx-10 mt-5 md:mt-14 md:w-[21rem]'>
                        <img src={cogs}
                            alt="cogs"
                            className='md:w-20 w-24'/>
                        <p className='text-purple-700 text-2xl md:text-lg md:tracking-wide font-extrabold w-45 mt-5'>LINK BUILDING &amp; CONTENT</p>
                        <p className='mt-5 md:w-11/12'>Link building is a tremendously important component of Search Engine Optimization.</p>
                    </div>
                    <div className='flex flex-col mx-10 mt-5 md:mt-14 md:w-[21rem]'>
                        <img src={notebook}
                            alt="notebook"
                            className='md:w-20 w-24'/>
                        <p className='text-purple-700 text-2xl md:text-lg md:tracking-wide font-extrabold w-45 mt-5'>CUSTOM WEBSITE DESIGN</p>
                        <p className='mt-5 md:w-11/12'>Our team specializes in affordable web design and e-commerce.</p>
                    </div>
                    <div className='flex flex-col mx-10 mt-5 md:mt-14 md:w-[21rem]'>
                        <img src={globe}
                            alt="globe"
                            className='md:w-20 w-24'/>
                        <p className='text-purple-700 text-2xl md:text-lg md:tracking-wide font-extrabold w-45 md:w-65 mt-5'>MAP SEARCH OPTIMIZATION</p>
                        <p className='mt-5 md:w-11/12'>Google Maps Optimization is an important part for your local marketing strategy.</p>
                    </div>
                    <div className='flex flex-col mx-10 mt-5 md:mt-14 md:w-[21rem]'>
                        <img src={coin}
                            alt="coin"
                            className='md:w-20 w-24'/>
                        <p className='text-purple-700 text-2xl md:text-lg md:tracking-wide font-extrabold w-45 md:w-65 mt-5'>PAID SEARCH ADVERTISING</p>
                        <p className='mt-5 md:w-11/12'>Paid listings on Google AdWords can help you reach new customers.</p>
                    </div>
                    <div className='flex flex-col mx-10 mt-5 md:mt-14 md:w-[21rem]'>
                        <img src={mail}
                            alt="mail"
                            className='md:w-20 w-24'/>
                        <p className='text-purple-700 text-2xl md:text-lg md:tracking-wide font-extrabold w-45 md:w-65 mt-5'>EMAIL CAMPAIGN DESIGN</p>
                        <p className='mt-5 md:w-11/12'>Custom email templates that speak to your customers and resonate with your brand.</p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center md:mt-5'>
                    <button type="button" className="text-white text-xl font-extrabold flex items-center justify-center bg-gradient-to-t from-purple-600 to-purple-200 hover:from-pink-500 hover:to-yellow-500 px-12 py-5 rounded-2xl w-72 mt-7 md:mt-16 md:w-80 md:py-4 md:mr-14">
                        Free SEO Consultation
                    </button>
                    <button type="button" className="text-white text-xl font-extrabold flex items-center justify-center bg-gradient-to-t from-orange-400 to-orange-200 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 rounded-2xl w-72 mt-16 md:ml-14">
                        Request a Free Quote
                    </button>
                </div>
            </div>
        </>
    )
}
export default WhiteBody;

// flex-col items-center md:flex-row md:justify-center md:mt-3