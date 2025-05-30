import ResumeSection from './ResumeSection';
import resumeData from './resumeData.json';
import axios from 'axios';


const handleDownloadPDF = async () => {
  try {
    const response = await axios.get('/api/download-resume', { responseType: 'blob' });
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    link.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
};

const DisplayDate = ( dateString ) => {
  const date =  new Date(dateString).toLocaleDateString("en-US", {month: "long", year: "numeric"});
  return date;
}


const Resume = () => {
  const { careerObjectiveSection, contactInfo, educationSection, skillsSection, employmentSection, academicExperienceSection } = resumeData;
  // how to make <li> go in a line separated by dots?

  return (
    <div className='w-full pt-[100px] bg-black overflow-scroll'>
      <ResumeSection sectionData={careerObjectiveSection} bgColor='black'>
        <p>{careerObjectiveSection.description}</p>
      </ResumeSection>
      <ResumeSection sectionData={educationSection} bgColor='black' textColor='white'>
        <ul>
          {educationSection.education.map((education, index) => (
            <li key={index}>
              <h3>{education.degree} - {education.major} <p className='text-opacity-50'>{education.university}</p></h3>
              
              <p>{DisplayDate(education.endDate)}</p>
              <p>GPA {education.gpa}</p>
              <p>{education.description}</p>
            </li>
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection sectionData={skillsSection} bgColor='black' textColor='white'>
        <ul>
          {skillsSection.skillSets.map((skillSet, index) => (
            <div key={skillSet.name}> 
              <h2>{skillSet.name}</h2>
              <ul>

                {skillSet.list.map((skill, index) => (
                  <li  key={index}>
                    <p>{skill}</p>
                  </li>
                ))
                }
              </ul>
            </div>
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection sectionData={employmentSection} bgColor='black' textColor='white'>
        <div>
          {employmentSection.jobs.map((job, index) => (
            <div key={index}> 
              <h2>{job.title}</h2>
              <h2>{job.company}, {job.location}</h2>
              <ul>

                {job.projects.map((project, idx) => (
                  <li  key={idx}>
                    <p className='font-sans'>{project.name}</p>
                    <p>{project.description}</p>
                  </li>
                ))
                }
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>
      <ResumeSection sectionData={academicExperienceSection} bgColor='black' textColor='white'>
        <div>
          {academicExperienceSection.entries.map((entry, index) => (
            <div key={index}> 
              <h2>{entry.title}</h2>
              <h2>{entry.department}, {entry.location}</h2>
              <h2>{DisplayDate(entry.startDate)} - {DisplayDate(entry.endDate)}</h2>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </ResumeSection>
      <div className='fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full bg-white bg-opacity-80 text-black text-center align-middle animate-pulse z-50'>
        <button className='h-full w-full' onClick={handleDownloadPDF}>PDF</button>
      </div>
    </div>
    
  );
};

export default Resume;
