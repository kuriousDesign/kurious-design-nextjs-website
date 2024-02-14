import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  const aboutData = [
    {
      title: 'skills',
      info: [
        {
          title: 'Web Development',
          icons: [<FaHtml5 key="html5" />, <FaCss3 key="css3" />, <FaJs key="js" />, <FaReact key="react" />, <SiNextdotjs key="nextjs" />, <SiFramer key="framer" />, <FaWordpress key="wordpress" />],
        },
        {
          title: 'UI/UX Design',
          icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="photoshop" />],
        },
      ],
    },
    {
      title: 'awards',
      info: [
        { title: 'Webby Awards - Honoree', stage: '2011 - 2012', key: 'award1' },
        { title: 'Adobe Design Achievement Awards - Finalist', stage: '2009 - 2010', key: 'award2' },
      ],
    },
    {
      title: 'experience',
      info: [
        { title: 'UX/UI Designer - XYZ Company', stage: '2012 - 2023', key: 'exp1' },
        { title: 'Web Developer - ABC Agency', stage: '2010 - 2012', key: 'exp2' },
        { title: 'Intern - DEF Corporation', stage: '2008 - 2010', key: 'exp3' },
      ],
    },
    {
      title: 'credentials',
      info: [
        { title: 'Web Development - ABC University, LA, CA', stage: '2011', key: 'cred1' },
        { title: 'Computer Science Diploma - AV Technical Institute', stage: '2009', key: 'cred2' },
        { title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA', stage: '2006', key: 'cred3' },
      ],
    },
  ];

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      {/* Render Avatar */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Render Text Section */}
        <div className='flex-1 flex flex-col justify-center'>
          {/* Render Heading and Paragraph */}
        </div>
        {/* Render Info Section */}
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          {/* Render Tabs */}
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* Render Info */}
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item) => (
              <div key={item.key} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/* Render Title */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {/* Render Icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='text-2xl text-white'>{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
