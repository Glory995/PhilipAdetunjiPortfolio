
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import HireMe from '../UI/HireMe';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  const handleHireMeClick = () => {
    window.location.href = 'mailto:glorysimon995@gmail.com';
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-2 flex items-center h-[100px]  justify-between">
        <div className="flex items-center gap-2">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center"> P</span>

            <div className='leading-[20px]'>
             <h2 className=' text-smallTextColor font-[800]'>Philip</h2>
             <p className='text-smallTextColor text-[14px] font-[500]'>Portfolio</p>
           </div>
        </div>
        <div className="hidden sm:block">
          <ul className="ml-4 flex items-center space-x-4">
            <li>
              <a href="/" className="text-smallTextColor font-[600]">
                Home
              </a>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="text-smallTextColor font-[600] hover:cursor-pointer">
                About
              </Link>
            </li>
            <li>
            <Link to="section" smooth={true} duration={500} className="text-smallTextColor font-[600] hover:cursor-pointer">
                Services
              </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500} className="text-smallTextColor font-[600] hover:cursor-pointer">
                Contact
              </Link>
            </li>

            <li>
            <Link to="portfolio" smooth={true} duration={500} className="text-smallTextColor font-[600] hover:cursor-pointer">
                Portfolio
              </Link>
            </li>

            <div className='flex flex-center gap-4'>

              <button onClick={handleHireMeClick} className=' text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-100'> <i class="ri-send-plane-line"></i> Let's talk</button>
            </div>
          </ul>


        </div>
        <div className="block sm:hidden">
        <button
            className="text-smallTextColor  text-[20px] hover:text-primaryColor focus:outline-none focus:text-smallTextColor"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <i class="ri-close-line"></i>
              
            ) : (
              <i class="ri-menu-line"></i>
            )}
          </button>
        </div>
      </div>
      <div className={`${isNavOpen ? 'block' : 'hidden'} sm:hidden`}>
        <ul className="px-2 pt-2 pb-4 space-y-2">
          <li>
            <a
              href="/"
              className="block px-4 py-2 text-smallTextColor font-[600] hover:bg-gray-700 hover:text-white rounded"
            >
              Home
            </a>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}
              className="block px-4 py-2 text-smallTextColor font-[600] hover:bg-gray-700 hover:text-white rounded"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="section" smooth={true} duration={500}
              className="block px-4 py-2 text-smallTextColor font-[600] hover:bg-gray-700 hover:text-white rounded"
            >
              Services
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}
              className="block px-4 py-2 text-smallTextColor font-[600] hover:bg-gray-700 hover:text-white rounded"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link to="portfolio" smooth={true} duration={500}
              className="block px-4 py-2 text-smallTextColor font-[600] hover:bg-gray-700 hover:text-white rounded"
            >
              Portfolio
            </Link>
          </li>

          <div className='flex flex-center gap-4'>

              <button onClick={handleHireMeClick} className=' text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-headingColor hover:text-white hover:font-[500] ease-in duration-100'> <i class="ri-send-plane-line"></i> Let's talk</button>
            </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;







