// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send email using the form data
    const { name, email, subject, message } = formData;
    const emailContent = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // You can use a library or an API to send the email
    // For example, you can use the 'nodemailer' library in Node.js
    // Here's a simplified example using the 'console.log' function instead
    console.log('Sending email:', emailContent);

  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12 font-permanentMarker'
          >
            We should <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto font-gothamBook'
            onSubmit={handleFormSubmit}
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                placeholder='name'
                className='input'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='email'
                className='input'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              type='text'
              placeholder='subject'
              className='input'
              name='subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              placeholder='message'
              className='textarea'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              type='submit'
              onClick={handleFormSubmit}
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-permanentMarker'>
                We can talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
