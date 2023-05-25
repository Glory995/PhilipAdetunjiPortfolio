import React, { useState } from 'react';

const HireMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Simulating sending the form data as an email
      // You can replace this code with the actual backend implementation for sending emails
      await sendEmail({
        name,
        email,
        message,
      });

      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error case
    } finally {
      setIsSending(false);
    }
  };

  const sendEmail = (formData) => {
    // Simulating an asynchronous operation with a delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Sending email:', formData);
        resolve();
      }, 2000);
    });
  };

  return (
    <div className='container ' id='contact'>

    
      <h1 className='text-headingColor text-[2rem] font-[700] text-center pt-7'>Contact Form</h1>
      {isSent ? (
        <p  data-aos="slide-up" className='text-[32px] h-[300px]  text-smallTextColor font-[600] mx-auto'> Thank you! <br /> I will get back to you</p>
      ) : (
    <div className='bg-white rounded shadow p-4  min-w-[300px] max-w-full  relative z-[1] mx-auto sm:mb-[10px]'>
        <form onSubmit={handleSubmit} >

            <div className="flex justify-between w-full  flex-col">
          <label htmlFor="name" className='text-smallTextColor font-[700] text-xl  pt-3'>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          /> <br />
          </div>
          <div className="flex justify-between w-full  flex-col">
          <label htmlFor="email" className='text-smallTextColor font-[700] text-xl  pt-3'>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          /> <br />
           </div> 
          <div className='flex justify-between w-full  flex-col '>
          <label htmlFor="message" className='text-smallTextColor font-[700] text-xl  pt-3'>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          ></textarea> <br />
          </div>
          <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] mx-auto' type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Submit'}
          </button>
        </form>
    </div>    
        
      )}
      
    </div>
  );
};

export default HireMe;
