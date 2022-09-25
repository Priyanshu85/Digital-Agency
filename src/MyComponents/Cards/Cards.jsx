import React from 'react'
import reputation from '../../images/reputation.png'
import optimization from '../../images/optimization.png'
import reputation2 from '../../images/reputation-2.png'

function Cards() {
    return (
        <div className='flex flex-col items-center mt-5 md:flex-row md:justify-around'>
            <div className="w-72 md:w-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl md:-mb-16 hover:cursor-pointer">
                <img className="w-full"
                    src={reputation}
                    alt="reputation"/>
                <div className="px-6 py-4">
                    <div className="text-purple-600 font-bold text-xl mb-2 text-center">ONLINE REPUTATION MANAGEMENT</div>
                    <p className="text-gray-700 text-base text-center">
                        Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.
                    </p>
                    <p href="/" className='text-orange-600 font-sm text-center mt-6 mb-12'>LEARN MORE</p>
                </div>
            </div>
            <div className="w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg mt-14 hover:shadow-2xl hover:cursor-pointer">
                <img className="w-full"
                    src={optimization}
                    alt="reputation"/>
                <div className="px-6 py-4">
                    <div className="text-purple-600 font-bold text-xl mb-2 text-center">CONVERSION RATE OPTIMIZATION</div>
                    <p className="text-gray-700 text-base text-center">
                    Turn your visitors into customers with our team of experts. We'll analyze your website and create a conversion-rate strategy.
                    </p>
                    <p href="/" className='text-orange-600 font-sm text-center mt-6 mb-12'>LEARN MORE</p>
                </div>
            </div>
            <div className="w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg mt-14 hover:shadow-2xl hover:cursor-pointer">
                <img className="w-full"
                    src={reputation2}
                    alt="reputation"/>
                <div className="px-6 py-4">
                    <div className="text-purple-600 font-bold text-xl mb-2 text-center">ONLINE REPUTATION MANAGEMENT</div>
                    <p className="text-gray-700 text-base text-center">
                    Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.
                    </p>
                    <p href="/" className='text-orange-600 font-sm text-center mt-6 mb-12'>LEARN MORE</p>
                </div>
            </div>
        </div>
    )
}
export default Cards;
