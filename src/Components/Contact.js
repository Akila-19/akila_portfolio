import React, { useState } from 'react';
import Lottie from "lottie-react";
import emailjs from 'emailjs-com';
import contactImg from "../LottieFiles/contactImg.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_g7d81sq', 'template_4declo4', formData, '2kWQ6mkt9Wjo5umCk')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ from_name: '', from_email: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row wrapper w-full max-w-screen-lg">
        <div className="w-full md:w-2/5 md:pr-4">
          <Lottie 
            className="illustration" 
            animationData={contactImg} 
            loop={true} 
          />
        </div>
        <div className="w-full md:w-3/5">
          <div className="bg-white rounded-lg shadow-md p-8 h-full">
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Contact </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border text-black rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border text-black rounded-lg focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              //  onClick={console.log(formData)} 
               >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
