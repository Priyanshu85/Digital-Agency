import React from 'react'
import message from '../../images/message.svg'
import logo from '../../images/logo.png'
import message1 from '../../images/message1.svg'
import share from '../../images/share.svg'

function Header()
{
  return (
    <>
    <div>
    <div className='flex w-screen bg-[#F8F8F8] justify-center'>
    <div className='h-9 flex'>
        <p className='text-gray-500 font-semibold text-sm  mt-2 flex text-center'>YOUR LOCAL DIGITAL MARKETING AGENCY</p>
        </div>
        <div className='hidden mt-2 md:flex ml-96 pl-48'>
            <div className='flex px-5'>
            <img src={message} alt='message-icon' className='h-5 px-2'/>
            <p className='text-gray-500 font-semibold text-sm'>+91 9876543210</p>
            </div>
            <div className='flex px-5'>
            <img src={message1} alt='message-icon' className='h-5 px-2'/>
            <p className='text-gray-500 font-semibold text-sm'>info@demo.com</p>
            </div>
            <div className='flex px-5'>
            <img src={share} alt='message-icon' className='h-5 px-2'/>
            <p className='text-gray-500 font-semibold text-sm'>Follow Us</p>
            </div>
    </div>
    </div>
    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  md:bg-white shadow-md md:shadow-lg">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={ ()=>{
      const hamBurger=document.getElementById('navbar-default');
      hamBurger.classList.toggle('hidden');
      hamBurger.classList.toggle('block');
    }}>
      {/* <span className="sr-only">Open main menu</span> */}
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hover:underline" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">About</a>
        </li>
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">Services</a>
        </li>
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">Pricing</a>
        </li>
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Header;
