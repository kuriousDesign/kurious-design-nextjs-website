import { useState, useEffect } from 'react';
import grayMatter from 'gray-matter'; // Import gray-matter library

const ResumePage = () => {
  const [resumeContent, setResumeContent] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const fetchResume = async () => {
    try {
      const markdownFile = await fetch('/resume.md');
      const markdownText = await markdownFile.text();
      const { data, content } = grayMatter(markdownText); // Correct function name
      setResumeContent({ metadata: data, content });
      console.log('Resume content:', content);
    } catch (error) {
      console.error('Error fetching or parsing resume:', error);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Interactive Resume</h1>
      {resumeContent && (
        <>
          {/* Render skill buttons */}
          <div className="mb-4">
            {resumeContent.content.skills.map((skill, index) => (
              <button
                key={index}
                className={`mr-2 mb-2 py-2 px-4 rounded-md ${
                  skill === selectedSkill ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
          {/* Render resume content based on selected skill */}
          {selectedSkill && (
            <div>
              <h2 className="text-2xl font-semibold">Experiences related to {selectedSkill}</h2>
              {/* Render experiences related to the selected skill */}
              {resumeContent.content.experiences[selectedSkill].map((experience, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResumePage;
