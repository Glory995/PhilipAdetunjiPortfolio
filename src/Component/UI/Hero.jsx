
import React from 'react'
import CountUp from 'react-countup'
import HireMe from './HireMe'

import { Link } from 'react-scroll'

import heroimg from '../../assets/images/hip.jpg'
import cvFile from  '../../assets/images/cv.pdf'

function Hero() {
  return (
    <section className='pt-0' id='about'>

        <div className="container pt-4">

            <div className=' md:flex items-center justify-between sm:flex-col md:flex-row '>
                    {/* hero-left */}

                <div className="w-full md:basis-1/2">
                    <h5 data-aos="fade-right" data-aos-duration="1500" className='text-headingColor  font-[600] text-[18px] sm:text-[30px]'>Hello welcome </h5>
                    <h1 data-aos="fade-up" data-aos-duration="1500" className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-4'> i'm Philip Adetunji <br /> A Data Analyst </h1>
                    <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200" className='flex items-center gap-6 mt-7'>
                        
                        <Link to="contact" smooth={true} duration={500}>
                        <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-line"></i>Hire Me</button>
                        </Link>
                        <a href={cvFile} download="cv.pdf" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'> Download Cv</a>
                       
                    </div>
                    
                    <p data-aos="fade-left" data-aos-duration="1500" className='flex gap-2 justify  text-headingColor font-[500] text-[15px] leading-7 mt-10 sm:pr-10 ' >
                        <span><i class="ri-apps-2-line"></i></span>
                        I specialize in deciphering intricate data sets to uncover valuable insights. With a knack for spotting trends and a strong grasp of statistical analysis, I transform raw data into actionable information. Whether it's crunching numbers, creating visualizations, or conducting thorough research, I'm committed to delivering precise and impactful results. Let's harness the power of data together to make informed decisions and drive your success.
                    </p>

                    <div className='flex flex-center gap-9 mt-7 sm:mt-10  '>
                        <span className='text-smallTextColor text-[15px] font-[600] sm:text-[18px]'>Follow me </span>

                        <a href="https://twitter.com/oladipu48302669"> <span className='text-smallTextColor text-[15px] font-[600] sm:text-[18px]'><i class="ri-twitter-fill"></i></span></a>
                        <a href="https://github.com/Adetayo047"><span className='text-smallTextColor text-[15px] font-[600] sm:text-[18px]'><i class="ri-github-fill"></i></span></a> 
                        <a href="http://www.linkedin.com/in/philip-adetunji "><span className='text-smallTextColor text-[15px] font-[600] sm:text-[18px]'><i class="ri-linkedin-fill"></i></span></a> 
                        <a href=" https://www.facebook.com/profile.php?id=100086570841087"><span className='text-smallTextColor text-[15px] font-[600] sm:text-[18px]'><i class="ri-facebook-circle-line"></i></span></a> 
                    </div>
                </div>  

                {/* hero-left-ended                   */}

                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img className=' h-[300px] w-[300px]  sm:mt-7 rounded-[10px] md:h-[500px] md:w-[500px] rounded md:rounded-[150px]' src={heroimg} alt="" />
                        
                    </figure>
                </div>

                

                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end '>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp  start={0} end={6} duration={2} suffix='+'/>
                        </h2> 

                        <h4 className='text-headingColor font-[600] text-[18px]'>Years of Experience</h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp  start={0} end={100} duration={2} suffix='%'/>
                        </h2> 

                        <h4 className='text-headingColor font-[600] text-[18px]'>Success Rate</h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp  start={0} end={150} duration={2} suffix='+'/>
                        </h2> 

                        <h4 className='text-headingColor font-[600] text-[18px]'>Happy Client</h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp  start={0} end={15} duration={3} suffix='+'/>
                        </h2> 

                        <h4 className='text-headingColor font-[600] text-[18px]'>Project Completed</h4>
                    </div>
                </div>
            </div>


        </div>

        

    </section>
  )
}

export default Hero
