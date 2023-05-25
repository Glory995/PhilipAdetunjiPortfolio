
import React from 'react'


function Services() {
  return (
   <section id="section">
    <div className="container lg:pt-5 ">
      <div className="text-center">
        <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do i help do </h2>
        <p className='lg:max-w-[600px] text-center lg:mx-auto text-headingColor font-[500] text-[16px]'>I leverage my expertise in data analysis to extract valuable insights from complex datasets, enabling businesses to make data-driven decisions.I have a passion for exploring data, discovering correlations, and uncovering actionable insights that help organizations gain a competitive edge.</p>
      </div>

    <div className="flex flex-wrap">
      <div data-aos="zoom-in" data-aos-duration="1000" className="w-full   sm:w-1/2 lg:w-1/4 p-4  ">
        <div className="bg-white rounded shadow p-4 group hover:bg-primaryColor cursor-pointer ease-in duration-150 h-full">
          <h2 className=" text-primaryColor font-[600] text-2xl mb-2 group-hover:text-white">Data Analysis</h2>
          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font[600]"> As a data analyst, my passion lies in unraveling complex data sets and extracting valuable insights. Using advanced analytical techniques, I dive deep into the data to identify trends, patterns, and correlations. I am well-versed in a variety of data analysis tools, such as Python, R, SQL, and Tableau, which enable me to manipulate and visualize data effectively.  </p>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="900" className="w-full   sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded shadow p-4 group hover:bg-primaryColor cursor-pointer ease-in duration-150 h-full">
          <h2 className=" text-primaryColor font-[600] text-2xl mb-2 group-hover:text-white">Machine Learning</h2>
          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font[600]">I am well-versed in a range of machine learning tools and libraries, including TensorFlow, PyTorch, scikit-learn, and Keras, which allow me to implement and deploy state-of-the-art machine learning models. Whether it's building recommendation systems, performing natural language processing, or solving complex classification problems.</p>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="800" className="w-full  sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded shadow p-4 group hover:bg-primaryColor cursor-pointer ease-in duration-150 h-full">
          <h2 className="text-primaryColor font-[600] text-2xl mb-2 group-hover:text-white">Reserch and Project</h2>
          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font[600]">As a dedicated researcher and project leader, I thrive on the opportunity to explore new frontiers and drive meaningful change. With a passion for knowledge discovery, I am committed to conducting rigorous research that pushes boundaries and contributes to advancements in the field.</p>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="700" className="w-full   sm:w-1/2 lg:w-1/4 p-4 ">
        <div className="bg-white rounded shadow p-4 group hover:bg-primaryColor cursor-pointer ease-in duration-150 h-full">
          <h2 className="text-primaryColor font-[600] text-2xl mb-2 group-hover:text-white">Data Analyst Tutor</h2>
          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font[600]">As a dedicated data analyst tutor, my goal is to empower individuals with the skills and expertise required to succeed in the field of data analysis. I offer comprehensive guidance and mentorship, tailored to the unique needs of each student. Whether you're a beginner or looking to enhance your existing skills I can take you where you can thrive and excel in your data analyst journey.</p>
        </div>
      </div>
    </div>



      

    </div>
   </section>
  )
}

export default Services
