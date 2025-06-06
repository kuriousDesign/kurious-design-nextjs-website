// pages/components/CareerObjective.js
import React from 'react';

const ResumeSection = ({ sectionData, bgColor='black', textColor='white', children }) => {
    const heading = sectionData?.heading || '';
    // make heading uppercase

    return (
        <section className={`bg-${bgColor} p-8 text-${textColor}`}>
            <h2 className="text-2xl font-bold mb-4">{heading.toUpperCase()}</h2>
            {children}
        </section>
    );
}

export default ResumeSection;
