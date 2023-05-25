
import React from 'react'
import data from "../../assets/data/portfolioData"
import { Link } from 'react-scroll'


function Portfolio() {
  return <section id="portfolio">
        <div className="container">


            <div className="flex  items-center justify-between flex-wrap mt-10">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2rem] font-[700]">My Recent Project</h3>
                </div>

                <div className='flex gap-3'>

                    <Link to="about" smooth={true} duration={500}><button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor text-[12px]'>About Me</button></Link>
                    <Link to="portfolio" smooth={true} duration={500}><button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor text-[12px]'>Portfolios</button></Link>
                    <Link to="contact" smooth={true} duration={500}><button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor text-[12px]'>Contact Me</button></Link>

                </div>

                </div>

            <div className="flex items-center   gap-4 flex-wrap mt-12">
                {
                    data.map((portfolio, index)=>(
                        <div data-aos="zoom-in" data-aos-duration="800" className='group bg-white rounded shadow p-4  min-w-[300px] max-w-full  relative z-[1] mx-auto sm:mb-[10px]'>
                            <figure>
                                <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />

                                <p className='text-smallTextColor font-[700] text-xl  pt-3'>{ portfolio.title}</p>
                            </figure>

                            <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <a href={portfolio.siteUrl}>
                                    <button className='text-white bg-headingColor  hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 '>View Project</button> </a>
                                    </div>
                            </div>

                        </div>
                    ))
                }
            </div>


        </div>


  </section> 
  
}

export default Portfolio
