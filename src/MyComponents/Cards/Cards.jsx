import React from 'react'
import reputation from '../../images/reputation.png'
import optimization from '../../images/optimization.png'
import reputation2 from '../../images/reputation-2.png'
import areoplane from '../../images/areoplane.png'

function Cards() {
    return (
        <>
        <div className='flex flex-col items-center md:flex-row justify-evenly'>
            <div className="w-72 md:w-96 rounded-3xl overflow-hidden shadow-xl md:mt-0
            mt-14 hover:shadow-2xl bg-scroll py-6">
                <img className="w-full"
                    src={reputation}
                    alt="reputation"/>
                <div className="px-6 py-4">
                    <div className="text-purple-600 font-bold text-xl mb-2 text-center">ONLINE REPUTATION MANAGEMENT</div>
                    <p className="text-gray-700 text-base text-center">
                        Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.
                    </p>
                    <p href="/" className='text-orange-600 font-sm text-center mt-6 mb-12 hover:underline hover:cursor-pointer'>LEARN MORE</p>
                </div>
            </div>
            <div className="w-72 md:w-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl py-6 md:mt-0
            mt-14">
                <img className="w-full"
                    src={optimization}
                    alt="reputation"/>
                <div className="px-6 py-4">
                    <div className="text-purple-600 font-bold text-xl mb-2 text-center">CONVERSION RATE OPTIMIZATION</div>
                    <p className="text-gray-700 text-base text-center">
                    Turn your visitors into customers with our team of experts. We'll analyze your website and create a conversion-rate strategy.
                    </p>
                    <p href="/" className='text-orange-600 font-sm text-center mt-6 mb-12 hover:underline hover:cursor-pointer'>LEARN MORE</p>
                </div>
            </div>
            <div className="w-72 md:w-96 rounded-2xl overflow-hidden shadow-xl md:mt-0
            mt-14 hover:shadow-2xl py-6">
                <img className="w-full"
                    src={reputation2}
                    alt="reputation"/>
                <div className="px-6 py-4">
                    <div className="text-purple-600 font-bold text-xl mb-2 text-center">ONLINE REPUTATION MANAGEMENT</div>
                    <p className="text-gray-700 text-base text-center">
                    Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.
                    </p>
                    <p href="/" className='text-orange-600 font-sm text-center mt-6 mb-12 hover:underline hover:cursor-pointer'>LEARN MORE</p>
                </div>
            </div>
        </div>
        <div className='md:flex mb-20'>
            <div className='flex flex-col items-center md:flex-row md:w-full justify-center'>
                <img src={areoplane} alt="areoplane" className='mt-28 md:mt-20 w-80 md:w-4/5'/>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-gray-400 font-semibold text-sm flex text-left justify-center w-56 mt-5 md:mt-28 md:text-xl tracking-widest -ml-5 md:-ml-96 md:w-full md:mr-10'>GROW TRAFFIC &amp; INCREASE REVENUE</p>
                <p className='text-gray-700 font-bold font-sans text-4xl flex text-left justify-center w-80 ml-16 mt-5 mb-5 md:mb-10 md:text-left md:w-4/5 md:mt-7 md:text-5xl md:-ml-48'>Appear On the Front Page of Google!</p>
                <p className='w-64 text-lg md:w-full md:text-xl'>We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.</p>
                <button type="button" className="text-white font-extrabold flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-200 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 rounded-2xl w-60 mt-10 md:mt-16 md:-ml-96 md:mr-52">
                    Learn more about us
                </button>
            </div>
            </div>
        </>
    )
}
export default Cards;
