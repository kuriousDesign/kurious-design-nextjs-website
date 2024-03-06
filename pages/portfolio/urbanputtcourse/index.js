import ProjectPage from "../../../components/ProjectPage";
import { ProjectId, projectMap } from "../../../copy/ProjectData";


const UrbanPuttCoursePage = () => {
    const projectData = projectMap.get(ProjectId.URBANPUTTCOURSE);
    return (
        <ProjectPage projectData={projectData} />
    );
};

export default UrbanPuttCoursePage;
