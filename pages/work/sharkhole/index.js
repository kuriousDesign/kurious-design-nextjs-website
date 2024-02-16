import ProjectPage from "../../../components/ProjectPage";
import { ProjectId, projectMap } from "../../../copy/ProjectData";


const SharkHolePage = () => {
    const projectData = projectMap.get(ProjectId.SHARKHOLE);
    return (
        <ProjectPage projectData={projectData} />
    );
};

export default SharkHolePage;
